// Day of AI: Flight 67 - Application Logic

// Toggle state
const toggleState = {
  biometrics: true,
  purchases: false,
  texts: false,
  websites: false,
  digital: false,
  facial: false,
  suspect: false
};

// Calculate dynamic suspect score based on enabled toggles
function calculateSuspectScore(passenger) {
  if (!passenger) return 0;
  
  let score = passenger.baseScore;
  
  // Add scores based on enabled data
  if (toggleState.purchases) {
    score += passenger.purchaseScore;
  }
  if (toggleState.texts) {
    score += passenger.textScore;
  }
  if (toggleState.facial) {
    score += passenger.facialScore;
  }
  if (toggleState.digital) {
    score += Math.floor(passenger.baseScore * 0.2);
  }
  if (toggleState.websites) {
    score += Math.floor(passenger.baseScore * 0.15);
  }
  
  // Normalize to percentage (max theoretical score around 160 for highest scorers)
  let maxPossible = 160;
  let percentage = Math.min(97, Math.floor((score / maxPossible) * 100));
  
  // Special scoring for key characters based on what data is enabled
  // Alex Mercer: High text score, low purchase score (suspicious texts) - FALSE POSITIVE when facial rec is on
  // Marcus Webb: High purchase score, low text score (suspicious purchases) - ACTUAL CULPRIT
  
  if (passenger.isAlex) {
    // Alex becomes the false positive ONLY when facial recognition is enabled
    // Facial recognition "confirms" a mistaken identity, making him look like the top suspect
    if (toggleState.facial) {
      if (toggleState.purchases && toggleState.texts) {
        percentage = 99; // Highest score - false positive triggered by facial rec
      } else if (toggleState.texts) {
        percentage = Math.max(percentage, 94); // High with facial + texts
      } else {
        percentage = Math.max(percentage, 85); // Moderate with just facial
      }
    }
    // Without facial recognition, Alex's score stays lower (based on raw calculation)
    // His texts are suspicious but not enough to make him top suspect
  }
  
  if (passenger.name === "Marcus Webb") {
    // Marcus is the actual culprit - his purchases are truly suspicious
    // He should be top suspect when facial recognition is OFF
    if (toggleState.purchases && !toggleState.facial) {
      percentage = Math.max(percentage, 94); // Highest when purchases enabled, no facial
    }
    if (toggleState.purchases && toggleState.texts && !toggleState.facial) {
      percentage = Math.max(percentage, 92); // Still high with texts added, no facial
    }
    // When facial recognition is ON, Marcus drops to second (Alex becomes false positive)
    if (toggleState.purchases && toggleState.texts && toggleState.facial) {
      percentage = 98; // Second highest - actual culprit overshadowed by false positive
    }
  }
  
  return percentage;
}

// Generate a consistent "random-looking" value based on passenger name
// This ensures the facial confidence stays the same for each passenger
function getConsistentConfidence(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Convert hash to a value between 85 and 99
  const normalized = Math.abs(hash % 1400) / 100; // 0 to 14
  return (85 + normalized).toFixed(1);
}

// Platform display names
const platformDisplayNames = {
  insta: 'Instagram',
  tiktok: 'TikTok',
  snap: 'Snapchat',
  youtube: 'YouTube'
};

// Render functions
function renderEmails(emails) {
  if (!emails || !emails.length) return '<i style="color:#aaa">Bulunamadı</i>';
  return emails.map(e => `<a href="#" class="email-link">✉ ${e}</a>`).join('');
}

function renderSocials(socials) {
  if (!socials || !socials.length) return '<i style="color:#aaa">Bulunamadı</i>';
  return socials.map(s => 
    `<span class="tag ${s.platform}">${platformDisplayNames[s.platform]}: ${s.handle}</span>`
  ).join('');
}

function renderPurchases(purchases) {
  if (!purchases || !purchases.length) return '<i style="color:#aaa">Veri yok</i>';
  return purchases.map(p => `
    <div class="list-item purchase">
      <div class="purchase-details">
        <div>
          <span class="meta">${p.date}</span>
          ${p.vendor}
          <div class="purchase-item">${p.item}</div>
        </div>
        <span class="amount">₺${p.amount}</span>
      </div>
    </div>
  `).join('');
}

function renderTexts(texts) {
  if (!texts || !texts.length) return '<i style="color:#aaa">Veri yok</i>';
  return texts.map((t, i) => `
    <div class="list-item text-msg">
      <span class="meta">Mesaj ${i + 1}</span>"${t}"
    </div>
  `).join('');
}

function renderWebsites(sites) {
  if (!sites || !sites.length) return '<i style="color:#aaa">Veri yok</i>';
  return sites.map(s => `
    <div class="list-item website">🌐 ${s}</div>
  `).join('');
}

// Render passenger profile
function renderPassengerProfile(container, passenger, isAlex = false) {
  const suspectScore = calculateSuspectScore(passenger);
  const isHighRisk = suspectScore >= 80;
  
  const html = `
    <div class="sidebar-header">
      <div class="profile-header">
        <div class="avatar ${passenger.sex === 'M' ? 'male' : 'female'}">
          <img src="passengers/${passenger.image}" alt="${passenger.name}">
        </div>
        <div class="profile-name">
          ${isAlex ? '<span class="friend-badge">👤 SENİN ARKADAŞIN</span>' : ''}
          <h2>${passenger.name}</h2>
          <span>Koltuk ${isAlex ? config.alexSeat : (container.dataset?.seat || '')}</span>
        </div>
      </div>
      <div class="grid-2">
        <div class="info-item">
          <label>Memleket</label>
          <div>${passenger.hometown}</div>
        </div>
        <div class="info-item">
          <label>Pasaport</label>
          <div>${passenger.passport}</div>
        </div>
      </div>
      
      ${toggleState.suspect ? `
        <div class="ai-score-box ${isHighRisk ? 'high-risk' : ''}">
          <span class="ai-score-label">Yapay Zeka Risk Skoru (Hata Payı İçerebilir)</span>
          <div class="ai-score-value">${suspectScore}%</div>
        </div>
      ` : ''}
      
      ${toggleState.facial ? `
        <div class="confidence-box">
          <span class="confidence-label">Yüz Tanıma Eşleşme Oranı</span>
          <div class="confidence-value">${getConsistentConfidence(passenger.name)}%</div>
        </div>
      ` : ''}
    </div>

    <div class="sidebar-scroll">
      <div class="data-section ${toggleState.biometrics ? '' : 'hidden'}">
        <div class="section-title">Biyometrik Veriler</div>
        <div class="grid-2">
          <div class="info-item"><label>Cinsiyet</label><div>${passenger.sex === 'M' ? 'Erkek' : 'Kadın'}</div></div>
          <div class="info-item"><label>Yaş</label><div>${passenger.age}</div></div>
          <div class="info-item"><label>Boy</label><div>${passenger.height}</div></div>
          <div class="info-item"><label>Göz Rengi</label><div>${passenger.eyes}</div></div>
          <div class="info-item"><label>Saç Rengi</label><div>${passenger.hair}</div></div>
          <div class="info-item"><label>Pasaport</label><div>${passenger.passport}</div></div>
        </div>
      </div>

      <div class="data-section ${toggleState.digital ? '' : 'hidden'}">
        <div class="section-title">Dijital Profil</div>
        <div class="info-item" style="margin-bottom:10px;">
          <label>E-posta Adresleri</label>
          <div>${renderEmails(passenger.emails)}</div>
        </div>
        <div class="info-item">
          <label>Sosyal Medya</label>
          <div>${renderSocials(passenger.socials)}</div>
        </div>
      </div>

      <div class="data-section ${toggleState.purchases ? '' : 'hidden'}">
        <div class="section-title">Son Alışverişler</div>
        <div class="list-group">${renderPurchases(passenger.purchases)}</div>
      </div>

      <div class="data-section ${toggleState.texts ? '' : 'hidden'}">
        <div class="section-title">Son 3 Kısa Mesaj</div>
        <div class="list-group">${renderTexts(passenger.texts)}</div>
      </div>
      
      <div class="data-section ${toggleState.websites ? '' : 'hidden'}">
        <div class="section-title">Son 3 Ziyaret Edilen Web Sitesi</div>
        <div class="list-group">${renderWebsites(passenger.websites)}</div>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

// Render Alex's profile in left sidebar
function renderAlexProfile() {
  const alexData = passengerData[config.alexSeat];
  const leftSidebar = document.getElementById('alex-profile-content');
  renderPassengerProfile(leftSidebar, alexData, true);
}

// Render seat map
function renderSeatMap() {
  const seatMap = document.getElementById('seat-map');
  seatMap.innerHTML = '';
  
  for (let row = 1; row <= config.rows; row++) {
    for (let col = 0; col < config.cols; col++) {
      const seatId = `${row}${config.letters[col]}`;
      const seatEl = document.createElement('div');
      seatEl.className = 'seat';
      seatEl.dataset.id = seatId;
      
      if (seatId === config.youSeat) {
        seatEl.classList.add('you-seat');
        seatEl.innerText = 'SEN';
      } else if (seatId === config.alexSeat) {
        seatEl.classList.add('alex-seat');
        seatEl.innerText = seatId;
      } else {
        seatEl.innerText = seatId;
      }
      
      seatMap.appendChild(seatEl);
      
      // Add aisle spacer after column B (index 1)
      if (col === 1) {
        const spacer = document.createElement('div');
        spacer.className = 'aisle-spacer';
        seatMap.appendChild(spacer);
      }
    }
  }
}

// Handle seat selection
let selectedSeat = null;

function handleSeatClick(seatId) {
  if (seatId === config.youSeat) return; // Can't select YOU seat
  
  // Clear previous selection
  document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
  
  // Select new seat
  const seatEl = document.querySelector(`.seat[data-id="${seatId}"]`);
  if (seatEl) {
    seatEl.classList.add('selected');
  }
  
  selectedSeat = seatId;
  
  // Show passenger data
  const passenger = passengerData[seatId];
  if (passenger) {
    document.getElementById('sidebar-placeholder').style.display = 'none';
    const sidebarContent = document.getElementById('sidebar-content');
    sidebarContent.style.display = 'flex';
    sidebarContent.dataset.seat = seatId;
    renderPassengerProfile(sidebarContent, passenger, seatId === config.alexSeat);
  }
}

function clearSelection() {
  document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
  selectedSeat = null;
  document.getElementById('sidebar-content').style.display = 'none';
  document.getElementById('sidebar-placeholder').style.display = 'block';
}

// Handle toggle changes
function handleToggle(toggleName) {
  toggleState[toggleName] = !toggleState[toggleName];
  
  // Update button appearance
  const btn = document.querySelector(`[data-toggle="${toggleName}"]`);
  if (btn) {
    btn.classList.toggle('active', toggleState[toggleName]);
    btn.classList.toggle('inactive', !toggleState[toggleName]);
    btn.textContent = toggleState[toggleName] ? 
      (toggleName === 'biometrics' ? 'AÇIK' : btn.textContent.replace('KAPALI', '').trim()) : 
      (toggleName === 'biometrics' ? 'KAPALI' : btn.textContent.replace('AÇIK', '').trim());
  }
  
  // Re-render profiles
  renderAlexProfile();
  if (selectedSeat) {
    const sidebarContent = document.getElementById('sidebar-content');
    const passenger = passengerData[selectedSeat];
    if (passenger) {
      renderPassengerProfile(sidebarContent, passenger, selectedSeat === config.alexSeat);
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Render seat map
  renderSeatMap();
  
  // Render Alex's profile
  renderAlexProfile();
  
  // Set up toggle listeners
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleToggle(btn.dataset.toggle);
    });
  });
  
  // Set up seat click listeners
  document.addEventListener('click', (e) => {
    const clickedSeat = e.target.closest('.seat');
    
    if (clickedSeat && !clickedSeat.classList.contains('you-seat')) {
      handleSeatClick(clickedSeat.dataset.id);
      return;
    }
    
    // Clear selection if clicking outside seats and sidebars
    if (!e.target.closest('.sidebar') && !e.target.closest('.seat') && !e.target.closest('.toggle-toolbar')) {
      clearSelection();
    }
  });
});
