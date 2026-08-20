const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'passengers.js');
let fileContent = fs.readFileSync(filePath, 'utf-8');

const scriptToEval = fileContent + '\nmodule.exports = { passengerData, config };';
const tempPath = path.join(__dirname, 'temp_passengers.js');
fs.writeFileSync(tempPath, scriptToEval);

const { passengerData, config } = require('./temp_passengers');

const trMaleNames = ['Emre', 'Can', 'Burak', 'Ahmet', 'Mehmet', 'Ali', 'Ozan', 'Cem', 'Kaan', 'Mert', 'Kerem', 'Deniz', 'Barış', 'Ege', 'Arda', 'Berke', 'Tolga'];
const trFemaleNames = ['Ayşe', 'Zeynep', 'Elif', 'Defne', 'Nehir', 'Selin', 'Aslı', 'Ceren', 'Derya', 'İrem', 'Eda', 'Merve', 'Büşra', 'Melis', 'Buse', 'İnci'];
const trSurnames = ['Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Kara'];
const trCities = ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Adana', 'Konya', 'Mersin', 'Gaziantep', 'Eskişehir', 'Samsun', 'Trabzon', 'Denizli'];

const texts = [
  "Uçağa biniyorum!", "Biraz gecikebilirim.", "Pasaport kontrolündeyim.", 
  "Gelince haber ver.", "Seni bekliyorum.", "Yolculuk başlıyor!", 
  "Bileti bulamıyorum...", "Çok sıra var.", "Valizi teslim ettim.",
  "Dışarıda hava çok güzel.", "Umarım türbülans olmaz.", "Görüşürüz!",
  "Havaalanı çok kalabalık."
];
const websites = ['www.okulcantasi-dunyasi.biz', 'www.bilim-ve-doga.xyz', 'www.gezgin-rotalar.net', 'www.dijital-sayfalar.info', 'www.macera-oyunlari.biz', 'www.gunluk-haberler.net', 'www.oyun-gemisi.xyz', 'www.sinema-perdesi.biz'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomRecentDate() {
  const start = new Date(2026, 3, 15);
  const end = new Date(2026, 4, 10);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}-${m}-${y}`;
}

function parseHeight(h) {
  if (!h) return "170 cm";
  const match = h.match(/(\d+)'(\d+)"/);
  if (match) {
    const ft = parseInt(match[1]);
    const inc = parseInt(match[2]);
    return Math.round(ft * 30.48 + inc * 2.54) + ' cm';
  }
  return h.includes('cm') ? h : h + " cm";
}

const itemCategories = [
  { regex: /Water|Bottle/i, type: 'Şişe Su', min: 80, max: 150 },
  { regex: /Coffee|Americano|Cappuccino|Latte|Cold Brew|Espresso|Mocha|Red Eye|Flat White|Pour Over|Drip/i, type: 'Kahve', min: 300, max: 450 },
  { regex: /Book|Journal|Novel|Guide|Manual|Studies|Textbook|Review/i, type: 'Kitap', min: 300, max: 600 },
  { regex: /Charger|Cable|USB/i, type: 'Şarj Aksesuarı', min: 300, max: 800 },
  { regex: /Headphones|Earbuds/i, type: 'Kulaklık', min: 2000, max: 8000 },
  { regex: /Sunglasses|Glasses|Goggles|Mask/i, type: 'Gözlük / Maske', min: 1000, max: 5000 },
  { regex: /Perfume|Makeup|Lipstick/i, type: 'Kozmetik Ürünü', min: 1000, max: 5000 },
  { regex: /T-Shirt|Dress|Blazer|Blouse|Cardigan|Leggings|Scarf|Tie|Jersey|Shoes|Boots|Hat|Briefcase|Backpack|Luggage|Bag|Clothes|Wear|Shirt/i, type: 'Giyim / Çanta', min: 600, max: 2500 },
  { regex: /Chocolate|Gum|Treats|Macarons|Snack|Mix|Bar|Seeds|Scone/i, type: 'Atıştırmalık', min: 150, max: 400 },
  { regex: /Magazine/i, type: 'Dergi', min: 150, max: 300 },
  { regex: /Sandwich|Burger|Salad|Pizza|Breakfast|Meal|Burrito|Steak|Seafood|Wrap|Bowl|Chicken|Pork|Crawfish|Pierogi|Cake|Mignon|Ribeye|Food|Bites/i, type: 'Yemek Menüsü', min: 400, max: 700 },
  { regex: /Tea|Juice|Smoothie|Shake|Drink/i, type: 'İçecek', min: 200, max: 400 },
  { regex: /Watch/i, type: 'Saat', min: 2000, max: 10000 },
  { regex: /Pillow|Blanket|Travel/i, type: 'Seyahat Aksesuarı', min: 400, max: 900 },
  { regex: /Album|Record|Game|Toys|Guitar|Harmonica|Pick/i, type: 'Hobi / Müzik Eşyası', min: 500, max: 2000 }
];

function translateItemPrice(itemStr) {
  for (let cat of itemCategories) {
    if (cat.regex.test(itemStr)) {
      return { item: cat.type, amount: Math.floor(Math.random() * (cat.max - cat.min + 1) + cat.min).toString() };
    }
  }
  return { item: 'Hediyelik Eşya', amount: Math.floor(Math.random() * 800 + 200).toString() };
}

const vendorCategories = [
  { regex: /AirportMart|TravelEase|SkyMall/i, type: 'Havalimanı Büfe' },
  { regex: /Cafe|Brew|Coffee/i, type: 'Kahvecim' },
  { regex: /Book|News|Journal/i, type: 'KitapDünyası' },
  { regex: /Burger|Pizza|Grill|Bite|Food|Shack|Diner|Restaurant/i, type: 'Restoran' },
  { regex: /Tech|Gear|Electronics|Store/i, type: 'TeknoMerkez' },
  { regex: /Fashion|Style|Boutique/i, type: 'GiyimMağazası' },
  { regex: /Market|Store|Shop/i, type: 'SüperMarket' },
  { regex: /Sport|Athletics/i, type: 'SporMağazası' },
  { regex: /Med|Supply/i, type: 'Eczane' },
];

function translateVendor(vendorStr) {
  for (let cat of vendorCategories) {
    if (cat.regex.test(vendorStr)) {
      return cat.type;
    }
  }
  return 'Yerel Mağaza';
}

Object.keys(passengerData).forEach(seat => {
  const p = passengerData[seat];
  
  if (seat === '1D') { // Marcus Webb -> Murat Yılmaz
    p.name = 'Murat Yılmaz';
    p.socials = [{ platform: 'FotoAğı', handle: '@uye_murat' }];
    p.texts = ['Kapıya geç kaldım.', 'Bana yer tutar mısın?', 'Bu havaalanı dev gibi.'];
    p.purchases = [
      { vendor: 'SeyahatEşyaları', item: 'Battaniye', amount: '850', date: getRandomRecentDate() },
      { vendor: 'Havalimanı Büfe', item: 'Şişe Su', amount: '120', date: getRandomRecentDate() }
    ];
  } else if (seat === config.alexSeat) { // Alex Mercer -> Can Demir
    p.name = 'Can Demir';
    p.socials = [{ platform: 'VideoGezgini', handle: '@kullanici_cnd' }];
    p.texts = ['Paketi aldın mı?', 'Uçuş çok sarsıntılı, midem bulandı. Hemen tuvalete gitmem lazım!', 'Planı unutma.'];
    // Preserve original vendor types but translate them
    p.purchases = p.purchases.map(oldP => {
      const translated = translateItemPrice(oldP.item);
      return {
        vendor: translateVendor(oldP.vendor),
        item: translated.item,
        amount: translated.amount,
        date: getRandomRecentDate()
      };
    });
    p.isAlex = true;
  } else {
    // Generic Turkish Generation
    const isMale = p.sex === 'M';
    const first = isMale ? getRandomItem(trMaleNames) : getRandomItem(trFemaleNames);
    const last = getRandomItem(trSurnames);
    p.name = `${first} ${last}`;
    p.socials = [{ platform: getRandomItem(['FotoAğı', 'VideoGezgini', 'KısaMesaj']), handle: `@uye_${Math.floor(Math.random() * 90000 + 10000)}` }];
    
    // Purchases (translate existing purchases)
    p.purchases = p.purchases.map(oldP => {
      const translated = translateItemPrice(oldP.item);
      return {
        vendor: translateVendor(oldP.vendor),
        item: translated.item,
        amount: translated.amount,
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

const newFileContent = `// Eğitim amaçlı, Türkiye'ye uyarlanmış Uçuş 67 Yolcu Verileri
// ${config.alexSeat} = Can Demir (arkadaş, şüpheli mesajlar)
// 1D = Murat Yılmaz (gerçek suçlu, şüpheli alışverişler)

const passengerData = ${JSON.stringify(passengerData, null, 2)};

const config = ${JSON.stringify(config, null, 2)};
`;

fs.writeFileSync(filePath, newFileContent);
fs.unlinkSync(tempPath);
console.log('Passengers localized successfully with matched original categories and dates.');
