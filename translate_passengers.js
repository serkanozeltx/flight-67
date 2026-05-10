const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'passengers.js');
let fileContent = fs.readFileSync(filePath, 'utf-8');

// We evaluate the file to get the objects
const scriptToEval = fileContent + '\nmodule.exports = { passengerData, config };';
const tempPath = path.join(__dirname, 'temp_passengers.js');
fs.writeFileSync(tempPath, scriptToEval);

const { passengerData, config } = require('./temp_passengers');

const trMaleNames = ['Emre', 'Can', 'Burak', 'Ahmet', 'Mehmet', 'Ali', 'Ozan', 'Cem', 'Kaan', 'Mert', 'Kerem', 'Deniz', 'Barış', 'Ege', 'Arda', 'Berke', 'Tolga'];
const trFemaleNames = ['Ayşe', 'Zeynep', 'Elif', 'Defne', 'Nehir', 'Selin', 'Aslı', 'Ceren', 'Derya', 'İrem', 'Eda', 'Merve', 'Büşra', 'Melis', 'Buse', 'İnci'];
const trSurnames = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Kara'];
const trCities = ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Adana', 'Konya', 'Mersin', 'Gaziantep', 'Eskişehir', 'Samsun', 'Trabzon', 'Denizli'];

const purchaseVendors = ['YapıMarket', 'SüperMarket', 'Kahvecim', 'KitapDünyası', 'GiyimMağazası', 'ModaTrend', 'KozmetikDünyası', 'TeknoMerkez'];
const purchaseItems = [
  { name: 'Kahve', min: 120, max: 180 },
  { name: 'Sandviç', min: 150, max: 300 },
  { name: 'Kitap', min: 300, max: 600 },
  { name: 'Şarj Kablosu', min: 300, max: 800 },
  { name: 'Kulaklık', min: 2000, max: 8000 },
  { name: 'Güneş Gözlüğü', min: 3000, max: 15000 },
  { name: 'Parfüm', min: 3000, max: 10000 },
  { name: 'Tişört', min: 600, max: 1500 },
  { name: 'Çikolata', min: 100, max: 300 },
  { name: 'Su', min: 25, max: 50 },
  { name: 'Dergi', min: 150, max: 300 }
];
const texts = [
  "Uçağa biniyorum!", "Biraz gecikebilirim.", "Pasaport kontrolündeyim.", 
  "Gelince haber ver.", "Seni bekliyorum.", "Yolculuk başlıyor!", 
  "Bileti bulamıyorum...", "Çok sıra var.", "Valizi teslim ettim.",
  "Dışarıda hava çok güzel.", "Umarım türbülans olmaz.", "Görüşürüz!",
  "Havaalanı çok kalabalık."
];
const websites = ['www.ornek-sosyal.com', 'www.video-izle.com', 'www.alisveris-yap.com', 'www.trend-market.com', 'www.kisa-mesaj.com', 'www.film-dizim.com', 'www.ilan-bul.com', 'www.yemek-iste.com', 'www.muzik-dinle.com'];

const fakeDomains = ['tmail.com', 'coldmail.com', 'ymail.net', 'zposta.com', 'iletinet.com', 'hizlimail.com', 'postakutum.tr'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomRecentDate() {
  const start = new Date(2026, 3, 15); // April 15, 2026
  const end = new Date(2026, 4, 10); // May 10, 2026
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

function parseHeight(h) {
  // 5'4" -> 5 * 30.48 + 4 * 2.54
  const match = h.match(/(\d+)'(\d+)"/);
  if (match) {
    const ft = parseInt(match[1]);
    const inc = parseInt(match[2]);
    return Math.round(ft * 30.48 + inc * 2.54) + ' cm';
  }
  return h;
}

Object.keys(passengerData).forEach(seat => {
  const p = passengerData[seat];
  
  // Specific Overrides
  if (p.name === 'Marcus Webb') {
    p.name = 'Murat Yılmaz';
    p.emails = [`murat.y@${getRandomItem(fakeDomains)}`];
    p.socials = [{ platform: 'insta', handle: '@muratyilmaz' }];
    p.texts = ['Kapıya geç kaldım', 'Bana yer tut', 'Bu havaalanı dev gibi'];
    p.purchases = [
      { vendor: 'TeknoMerkez', item: 'Taşınabilir Şarj', amount: '2500', date: getRandomRecentDate() },
      { vendor: 'KitapDünyası', item: 'Karanlık Sırlar Kitabı', amount: '550', date: getRandomRecentDate() },
      { vendor: 'Burgercim', item: 'Menü', amount: '350', date: getRandomRecentDate() }
    ];
  } else if (seat === config.alexSeat) {
    p.name = 'Can Demir';
    p.emails = [`can.demir@${getRandomItem(fakeDomains)}`];
    p.socials = [{ platform: 'insta', handle: '@candemir' }];
    p.texts = ['Planı unutma', 'Her şey hazır mı?', 'Kimseye söyleme'];
    p.purchases = [
      { vendor: 'Kahvecim', item: 'Filtre Kahve', amount: '145', date: getRandomRecentDate() },
      { vendor: 'SüperMarket', item: 'Su', amount: '35', date: getRandomRecentDate() }
    ];
    p.isAlex = true; // ensure this flag is set if app.js needs it
  } else {
    // Generic Turkish Generation
    const isMale = p.sex === 'M';
    const first = isMale ? getRandomItem(trMaleNames) : getRandomItem(trFemaleNames);
    const last = getRandomItem(trSurnames);
    p.name = `${first} ${last}`;
    p.emails = [`${first.toLowerCase()}.${last.toLowerCase()}@${getRandomItem(fakeDomains)}`];
    p.socials = [{ platform: getRandomItem(['insta', 'tiktok']), handle: `@${first.toLowerCase()}${last.toLowerCase().substring(0,3)}` }];
    
    // Purchases
    p.purchases = p.purchases.map(oldP => {
      const selectedItem = getRandomItem(purchaseItems);
      return {
        vendor: getRandomItem(purchaseVendors),
        item: selectedItem.name,
        amount: Math.floor(Math.random() * (selectedItem.max - selectedItem.min + 1) + selectedItem.min).toString(),
        date: getRandomRecentDate()
      };
    });
    
    // Texts
    p.texts = p.texts.map(() => getRandomItem(texts));
  }
  
  // Generic mappings for all
  p.height = parseHeight(p.height);
  p.hometown = getRandomItem(trCities);
  p.passport = 'Türkiye';
  p.websites = [getRandomItem(websites), getRandomItem(websites), getRandomItem(websites)];
  
  // Translate colors
  const colors = {
    'Brown': 'Kahverengi',
    'Black': 'Siyah',
    'Blue': 'Mavi',
    'Green': 'Yeşil',
    'Hazel': 'Ela',
    'Blonde': 'Sarı',
    'Red': 'Kızıl',
    'Grey': 'Gri',
    'Dyed Pink': 'Pembe (Boyalı)',
    'Dyed Teal': 'Turkuaz (Boyalı)',
    'Dyed Blue': 'Mavi (Boyalı)'
  };
  p.eyes = colors[p.eyes] || p.eyes;
  p.hair = colors[p.hair] || p.hair;
});

// Construct new file content
const newFileContent = `// Eğitim amaçlı, Türkiye'ye uyarlanmış Uçuş 67 Yolcu Verileri
// ${config.alexSeat} = Can Demir (arkadaş, şüpheli mesajlar)
// 1D = Murat Yılmaz (gerçek suçlu, şüpheli alışverişler)

const passengerData = ${JSON.stringify(passengerData, null, 2)};

const config = ${JSON.stringify(config, null, 2)};
`;

fs.writeFileSync(filePath, newFileContent);
fs.unlinkSync(tempPath);
console.log('Passengers localized successfully.');
