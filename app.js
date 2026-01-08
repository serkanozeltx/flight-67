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
  // Alex Mercer: High text score, low purchase score (suspicious texts)
  // Marcus Webb: High purchase score, low text score (suspicious purchases)
  
  if (passenger.isAlex) {
    // Alex should be highest when texts are enabled
    if (toggleState.texts && !toggleState.purchases) {
      percentage = Math.max(percentage, 92); // High when texts only
    }
    if (toggleState.texts && toggleState.purchases) {
      percentage = Math.max(percentage, 95); // Very high with both
    }
    // When ALL data enabled, Alex is the top suspect (false positive!)
    if (toggleState.purchases && toggleState.texts && toggleState.facial) {
      percentage = 99;
    }
  }
  
  if (passenger.name === "Marcus Webb") {
    // Marcus should be highest when purchases are enabled but NOT texts
    if (toggleState.purchases && !toggleState.texts) {
      percentage = Math.max(percentage, 94); // Highest when purchases only
    }
    if (toggleState.texts && toggleState.purchases) {
      percentage = Math.max(percentage, 90); // Lower when texts added (Alex's texts are more suspicious)
    }
    // When ALL data enabled, Marcus is second highest
    if (toggleState.purchases && toggleState.texts && toggleState.facial) {
      percentage = 98;
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
  if (!emails || !emails.length) return '<i style="color:#aaa">None found</i>';
  return emails.map(e => `<a href="#" class="email-link">✉ ${e}</a>`).join('');
}

function renderSocials(socials) {
  if (!socials || !socials.length) return '<i style="color:#aaa">None found</i>';
  return socials.map(s => 
    `<span class="tag ${s.platform}">${platformDisplayNames[s.platform]}: ${s.handle}</span>`
  ).join('');
}

function renderPurchases(purchases) {
  if (!purchases || !purchases.length) return '<i style="color:#aaa">No data</i>';
  return purchases.map(p => `
    <div class="list-item purchase">
      <div class="purchase-details">
        <div>
          <span class="meta">${p.date}</span>
          ${p.vendor}
          <div class="purchase-item">${p.item}</div>
        </div>
        <span class="amount">$${p.amount}</span>
      </div>
    </div>
  `).join('');
}

function renderTexts(texts) {
  if (!texts || !texts.length) return '<i style="color:#aaa">No data</i>';
  return texts.map((t, i) => `
    <div class="list-item text-msg">
      <span class="meta">Message ${i + 1}</span>"${t}"
    </div>
  `).join('');
}

function renderWebsites(sites) {
  if (!sites || !sites.length) return '<i style="color:#aaa">No data</i>';
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
          ${isAlex ? '<span class="friend-badge">👤 YOUR FRIEND</span>' : ''}
          <h2>${passenger.name}</h2>
          <span>Seat ${isAlex ? config.alexSeat : (container.dataset?.seat || '')}</span>
        </div>
      </div>
      <div class="grid-2">
        <div class="info-item">
          <label>Hometown</label>
          <div>${passenger.hometown}</div>
        </div>
        <div class="info-item">
          <label>Passport</label>
          <div>${passenger.passport}</div>
        </div>
      </div>
      
      ${toggleState.suspect ? `
        <div class="ai-score-box ${isHighRisk ? 'high-risk' : ''}">
          <span class="ai-score-label">AI Likely Suspect Score</span>
          <div class="ai-score-value">${suspectScore}%</div>
        </div>
      ` : ''}
      
      ${toggleState.facial ? `
        <div class="confidence-box">
          <span class="confidence-label">Facial Recognition Confidence</span>
          <div class="confidence-value">${getConsistentConfidence(passenger.name)}%</div>
        </div>
      ` : ''}
    </div>

    <div class="sidebar-scroll">
      <div class="data-section ${toggleState.biometrics ? '' : 'hidden'}">
        <div class="section-title">Biometrics</div>
        <div class="grid-2">
          <div class="info-item"><label>Sex</label><div>${passenger.sex === 'M' ? 'Male' : 'Female'}</div></div>
          <div class="info-item"><label>Age</label><div>${passenger.age}</div></div>
          <div class="info-item"><label>Height</label><div>${passenger.height}</div></div>
          <div class="info-item"><label>Eye Color</label><div>${passenger.eyes}</div></div>
          <div class="info-item"><label>Hair Color</label><div>${passenger.hair}</div></div>
          <div class="info-item"><label>Passport</label><div>${passenger.passport}</div></div>
        </div>
      </div>

      <div class="data-section ${toggleState.digital ? '' : 'hidden'}">
        <div class="section-title">Digital Footprint</div>
        <div class="info-item" style="margin-bottom:10px;">
          <label>Email Addresses</label>
          <div>${renderEmails(passenger.emails)}</div>
        </div>
        <div class="info-item">
          <label>Social Media</label>
          <div>${renderSocials(passenger.socials)}</div>
        </div>
      </div>

      <div class="data-section ${toggleState.purchases ? '' : 'hidden'}">
        <div class="section-title">Recent Purchases</div>
        <div class="list-group">${renderPurchases(passenger.purchases)}</div>
      </div>

      <div class="data-section ${toggleState.texts ? '' : 'hidden'}">
        <div class="section-title">Last 3 Text Messages</div>
        <div class="list-group">${renderTexts(passenger.texts)}</div>
      </div>
      
      <div class="data-section ${toggleState.websites ? '' : 'hidden'}">
        <div class="section-title">Last 3 Websites Visited</div>
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
        seatEl.innerText = 'YOU';
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
      (toggleName === 'biometrics' ? 'ON' : btn.textContent.replace('OFF', '').trim()) : 
      (toggleName === 'biometrics' ? 'OFF' : btn.textContent.replace('ON', '').trim());
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
