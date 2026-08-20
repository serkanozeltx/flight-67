// Eğitim amaçlı, Türkiye'ye uyarlanmış Uçuş 67 Yolcu Verileri
// 13B = Can Demir (arkadaş, şüpheli mesajlar)
// 1D = Murat Yılmaz (gerçek suçlu, şüpheli alışverişler)

const passengerData = {
  "1A": {
    "name": "Merve Kılıç",
    "age": 16,
    "sex": "F",
    "image": "sophia-chen-16-F.jpg",
    "height": "163 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "sophia.chen@gmail.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_70816"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "389",
        "date": "30-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "348",
        "date": "24-04-2026"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Aksesuarı",
        "amount": "714",
        "date": "30-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Çok sıra var.",
      "Çok sıra var."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.dijital-sayfalar.info",
      "www.gezgin-rotalar.net"
    ],
    "baseScore": 12,
    "purchaseScore": 5,
    "textScore": 8,
    "facialScore": 15
  },
  "1B": {
    "name": "Aslı Arslan",
    "age": 17,
    "sex": "F",
    "image": "emma-rodriguez-17-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "emma.rod@gmail.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_95910"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Gözlük / Maske",
        "amount": "3635",
        "date": "22-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "316",
        "date": "22-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Dergi",
        "amount": "171",
        "date": "05-05-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Pasaport kontrolündeyim.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.gunluk-haberler.net",
      "www.gunluk-haberler.net"
    ],
    "baseScore": 8,
    "purchaseScore": 3,
    "textScore": 5,
    "facialScore": 10
  },
  "1C": {
    "name": "Zeynep Şahin",
    "age": 18,
    "sex": "F",
    "image": "olivia-martinez-18-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "olivia.m@gmail.com",
      "omartinez@university.edu"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_90095"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "522",
        "date": "30-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "318",
        "date": "29-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Seyahat Aksesuarı",
        "amount": "666",
        "date": "07-05-2026"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Görüşürüz!",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.gezgin-rotalar.net",
      "www.sinema-perdesi.biz",
      "www.macera-oyunlari.biz"
    ],
    "baseScore": 10,
    "purchaseScore": 4,
    "textScore": 6,
    "facialScore": 12
  },
  "1D": {
    "name": "Murat Yılmaz",
    "age": 18,
    "sex": "M",
    "image": "marcus-webb-18-M.jpg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "marcus.webb@gmail.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_murat"
      }
    ],
    "purchases": [
      {
        "vendor": "SeyahatEşyaları",
        "item": "Battaniye",
        "amount": "850",
        "date": "30-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Şişe Su",
        "amount": "120",
        "date": "27-04-2026"
      }
    ],
    "texts": [
      "Kapıya geç kaldım.",
      "Bana yer tutar mısın?",
      "Bu havaalanı dev gibi."
    ],
    "websites": [
      "www.okulcantasi-dunyasi.biz",
      "www.dijital-sayfalar.info",
      "www.gunluk-haberler.net"
    ],
    "baseScore": 35,
    "purchaseScore": 55,
    "textScore": 10,
    "facialScore": 45
  },
  "2A": {
    "name": "Aslı Kaya",
    "age": 19,
    "sex": "F",
    "image": "isabella-kim-19-F.jpg",
    "height": "160 cm",
    "eyes": "Kahverengi",
    "hair": "Pembe (Boyalı)",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "bella.kim@gmail.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_73574"
      }
    ],
    "purchases": [
      {
        "vendor": "Havalimanı Büfe",
        "item": "Kulaklık",
        "amount": "7627",
        "date": "15-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "402",
        "date": "01-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "İçecek",
        "amount": "251",
        "date": "20-04-2026"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Biraz gecikebilirim.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.dijital-sayfalar.info",
      "www.bilim-ve-doga.xyz",
      "www.macera-oyunlari.biz"
    ],
    "baseScore": 11,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "2B": {
    "name": "Mert Çelik",
    "age": 19,
    "sex": "M",
    "image": "ethan-brooks-19-M.jpg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "ethan.brooks@gmail.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_74956"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Giyim / Çanta",
        "amount": "1320",
        "date": "30-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "445",
        "date": "23-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Atıştırmalık",
        "amount": "365",
        "date": "21-04-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Seni bekliyorum.",
      "Görüşürüz!"
    ],
    "websites": [
      "www.bilim-ve-doga.xyz",
      "www.dijital-sayfalar.info",
      "www.gunluk-haberler.net"
    ],
    "baseScore": 14,
    "purchaseScore": 8,
    "textScore": 9,
    "facialScore": 16
  },
  "2C": {
    "name": "Eda Öztürk",
    "age": 20,
    "sex": "F",
    "image": "mia-thompson-20-F.jpg",
    "height": "165 cm",
    "eyes": "Mavi",
    "hair": "Turkuaz (Boyalı)",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "mia.t@gmail.com",
      "mthompson@work.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_26026"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Kitap",
        "amount": "560",
        "date": "20-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "İçecek",
        "amount": "232",
        "date": "27-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Gözlük / Maske",
        "amount": "2364",
        "date": "28-04-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Havaalanı çok kalabalık.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.oyun-gemisi.xyz",
      "www.sinema-perdesi.biz",
      "www.bilim-ve-doga.xyz"
    ],
    "baseScore": 9,
    "purchaseScore": 5,
    "textScore": 4,
    "facialScore": 11
  },
  "2D": {
    "name": "Arda Öztürk",
    "age": 20,
    "sex": "M",
    "image": "noah-garcia-20-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "noah.garcia@gmail.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_38423"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1373",
        "date": "01-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "651",
        "date": "28-04-2026"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Aksesuarı",
        "amount": "741",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Bileti bulamıyorum...",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.gezgin-rotalar.net",
      "www.okulcantasi-dunyasi.biz",
      "www.macera-oyunlari.biz"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "3A": {
    "name": "İnci Aydın",
    "age": 21,
    "sex": "F",
    "image": "ava-wilson-21-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "ava.wilson@gmail.com",
      "awilson@lawfirm.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_86513"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "324",
        "date": "23-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "369",
        "date": "08-05-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "2476",
        "date": "20-04-2026"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Pasaport kontrolündeyim.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.sinema-perdesi.biz",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 7,
    "purchaseScore": 4,
    "textScore": 3,
    "facialScore": 9
  },
  "3B": {
    "name": "Mehmet Kaya",
    "age": 21,
    "sex": "M",
    "image": "liam-anderson-21-M.jpg",
    "height": "185 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "liam.a@gmail.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_78628"
      }
    ],
    "purchases": [
      {
        "vendor": "SporMağazası",
        "item": "Hediyelik Eşya",
        "amount": "649",
        "date": "05-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "618",
        "date": "22-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Atıştırmalık",
        "amount": "224",
        "date": "22-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Çok sıra var.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.okulcantasi-dunyasi.biz",
      "www.okulcantasi-dunyasi.biz",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 16,
    "purchaseScore": 9,
    "textScore": 11,
    "facialScore": 18
  },
  "3C": {
    "name": "İrem Doğan",
    "age": 22,
    "sex": "F",
    "image": "charlotte-davis-22-F.jpg",
    "height": "163 cm",
    "eyes": "Kahverengi",
    "hair": "Kızıl",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "charlotte.d@gmail.com",
      "cdavis@music.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_56743"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1337",
        "date": "26-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1851",
        "date": "23-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "411",
        "date": "26-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Havaalanı çok kalabalık.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.oyun-gemisi.xyz",
      "www.gunluk-haberler.net",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 8,
    "purchaseScore": 3,
    "textScore": 5,
    "facialScore": 10
  },
  "3D": {
    "name": "Mehmet Özdemir",
    "age": 22,
    "sex": "M",
    "image": "james-miller-22-M.jpg",
    "height": "175 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "james.miller@gmail.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_61216"
      }
    ],
    "purchases": [
      {
        "vendor": "Restoran",
        "item": "Hediyelik Eşya",
        "amount": "752",
        "date": "15-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Yemek Menüsü",
        "amount": "555",
        "date": "04-05-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Hediyelik Eşya",
        "amount": "923",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Pasaport kontrolündeyim.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.okulcantasi-dunyasi.biz",
      "www.macera-oyunlari.biz",
      "www.bilim-ve-doga.xyz"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "4A": {
    "name": "Selin Aydın",
    "age": 23,
    "sex": "F",
    "image": "amelia-brown-23-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "amelia.brown@gmail.com",
      "abrown@hospital.org"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_87587"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "603",
        "date": "26-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "424",
        "date": "04-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "504",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Biraz gecikebilirim.",
      "Görüşürüz!",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.oyun-gemisi.xyz",
      "www.dijital-sayfalar.info",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "4B": {
    "name": "Ozan Kara",
    "age": 24,
    "sex": "M",
    "image": "benjamin-lee-24-M.jpg",
    "height": "178 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "ben.lee@gmail.com",
      "blee@techcorp.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_52986"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "223",
        "date": "26-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "338",
        "date": "19-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Atıştırmalık",
        "amount": "206",
        "date": "26-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Seni bekliyorum.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.gezgin-rotalar.net",
      "www.sinema-perdesi.biz",
      "www.gezgin-rotalar.net"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "4C": {
    "name": "Elif Öztürk",
    "age": 24,
    "sex": "F",
    "image": "harper-johnson-24-F.jpg",
    "height": "173 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "harper.j@gmail.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_60262"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Kozmetik Ürünü",
        "amount": "3187",
        "date": "27-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Yemek Menüsü",
        "amount": "464",
        "date": "21-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "2330",
        "date": "02-05-2026"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Pasaport kontrolündeyim.",
      "Çok sıra var."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.gunluk-haberler.net",
      "www.gezgin-rotalar.net"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "4D": {
    "name": "Kaan Aslan",
    "age": 25,
    "sex": "M",
    "image": "daniel-martinez-25-M.jpg",
    "height": "188 cm",
    "eyes": "Kahverengi",
    "hair": "Kızıl",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "daniel.m@gmail.com",
      "dmartinez@filmstudio.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_63608"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "583",
        "date": "27-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "304",
        "date": "25-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Kitap",
        "amount": "497",
        "date": "21-04-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Bileti bulamıyorum...",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.gunluk-haberler.net",
      "www.okulcantasi-dunyasi.biz",
      "www.oyun-gemisi.xyz"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "5A": {
    "name": "Büşra Çetin",
    "age": 26,
    "sex": "F",
    "image": "evelyn-taylor-26-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "evelyn.t@gmail.com",
      "etaylor@marketing.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_49584"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "409",
        "date": "01-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Yemek Menüsü",
        "amount": "465",
        "date": "01-05-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Giyim / Çanta",
        "amount": "1472",
        "date": "21-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Çok sıra var.",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.dijital-sayfalar.info",
      "www.oyun-gemisi.xyz",
      "www.bilim-ve-doga.xyz"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "5B": {
    "name": "Arda Kaya",
    "age": 26,
    "sex": "M",
    "image": "william-thomas-26-M.jpg",
    "height": "180 cm",
    "eyes": "Yeşil",
    "hair": "Siyah",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "will.thomas@gmail.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_52402"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "886",
        "date": "30-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "İçecek",
        "amount": "335",
        "date": "27-04-2026"
      },
      {
        "vendor": "SporMağazası",
        "item": "Giyim / Çanta",
        "amount": "1559",
        "date": "28-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Görüşürüz!",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.dijital-sayfalar.info",
      "www.dijital-sayfalar.info"
    ],
    "baseScore": 15,
    "purchaseScore": 8,
    "textScore": 10,
    "facialScore": 17
  },
  "5C": {
    "name": "Ayşe Çelik",
    "age": 27,
    "sex": "F",
    "image": "abigail-jackson-27-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "abigail.j@gmail.com",
      "ajackson@auto.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_24201"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Kitap",
        "amount": "365",
        "date": "02-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "417",
        "date": "05-05-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Saat",
        "amount": "2605",
        "date": "08-05-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Görüşürüz!",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.gunluk-haberler.net",
      "www.dijital-sayfalar.info",
      "www.bilim-ve-doga.xyz"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "5D": {
    "name": "Tolga Çelik",
    "age": 27,
    "sex": "M",
    "image": "alexander-white-27-M.jpg",
    "height": "183 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "alex.white@gmail.com",
      "awhite@finance.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_17481"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "459",
        "date": "06-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "375",
        "date": "18-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "1823",
        "date": "09-05-2026"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Dışarıda hava çok güzel.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.okulcantasi-dunyasi.biz",
      "www.oyun-gemisi.xyz"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "6A": {
    "name": "Buse Çetin",
    "age": 28,
    "sex": "F",
    "image": "emily-harris-28-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "emily.h@gmail.com",
      "eharris@nonprofit.org"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_27285"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Giyim / Çanta",
        "amount": "972",
        "date": "25-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "627",
        "date": "28-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "437",
        "date": "22-04-2026"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Umarım türbülans olmaz.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.oyun-gemisi.xyz",
      "www.bilim-ve-doga.xyz",
      "www.oyun-gemisi.xyz"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "6B": {
    "name": "Berke Kaya",
    "age": 28,
    "sex": "M",
    "image": "michael-clark-28-M.jpg",
    "height": "178 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "michael.clark@gmail.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_52957"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "809",
        "date": "24-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "479",
        "date": "26-04-2026"
      },
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "902",
        "date": "25-04-2026"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Yolculuk başlıyor!",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.bilim-ve-doga.xyz",
      "www.bilim-ve-doga.xyz",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "6C": {
    "name": "Selin Çelik",
    "age": 29,
    "sex": "F",
    "image": "elizabeth-lewis-29-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Sarı",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "elizabeth.l@gmail.com",
      "elewis@realestate.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_90423"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "702",
        "date": "21-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "942",
        "date": "26-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "326",
        "date": "25-04-2026"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Çok sıra var.",
      "Çok sıra var."
    ],
    "websites": [
      "www.gunluk-haberler.net",
      "www.dijital-sayfalar.info",
      "www.macera-oyunlari.biz"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "6D": {
    "name": "Berke Aslan",
    "age": 29,
    "sex": "M",
    "image": "david-robinson-29-M.jpg",
    "height": "185 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "david.r@gmail.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_29592"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "741",
        "date": "25-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "405",
        "date": "21-04-2026"
      },
      {
        "vendor": "SporMağazası",
        "item": "Giyim / Çanta",
        "amount": "1708",
        "date": "29-04-2026"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Çok sıra var.",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.macera-oyunlari.biz",
      "www.oyun-gemisi.xyz",
      "www.gunluk-haberler.net"
    ],
    "baseScore": 14,
    "purchaseScore": 8,
    "textScore": 9,
    "facialScore": 16
  },
  "7A": {
    "name": "İrem Arslan",
    "age": 30,
    "sex": "F",
    "image": "sofia-walker-30-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "sofia.walker@gmail.com",
      "swalker@school.edu"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_59311"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "833",
        "date": "27-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "İçecek",
        "amount": "335",
        "date": "08-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "593",
        "date": "23-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Bileti bulamıyorum...",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.okulcantasi-dunyasi.biz",
      "www.oyun-gemisi.xyz",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "7B": {
    "name": "Mehmet Doğan",
    "age": 30,
    "sex": "M",
    "image": "matthew-hall-30-M.jpg",
    "height": "175 cm",
    "eyes": "Yeşil",
    "hair": "Siyah",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "matt.hall@gmail.com",
      "mhall@hospital.org"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_75862"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "266",
        "date": "18-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "620",
        "date": "17-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Hediyelik Eşya",
        "amount": "487",
        "date": "19-04-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Yolculuk başlıyor!",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.gezgin-rotalar.net",
      "www.gunluk-haberler.net",
      "www.gezgin-rotalar.net"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "7C": {
    "name": "Defne Aslan",
    "age": 31,
    "sex": "F",
    "image": "chloe-allen-31-F.jpg",
    "height": "173 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "chloe.allen@gmail.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_99199"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "423",
        "date": "01-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "İçecek",
        "amount": "256",
        "date": "05-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Giyim / Çanta",
        "amount": "1214",
        "date": "01-05-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Gelince haber ver.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.bilim-ve-doga.xyz",
      "www.dijital-sayfalar.info"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "7D": {
    "name": "Kerem Çelik",
    "age": 31,
    "sex": "M",
    "image": "christopher-young-31-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "chris.young@gmail.com",
      "cyoung@racing.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_98456"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "596",
        "date": "25-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "390",
        "date": "04-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "İçecek",
        "amount": "373",
        "date": "23-04-2026"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Seni bekliyorum.",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.dijital-sayfalar.info",
      "www.oyun-gemisi.xyz",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "8A": {
    "name": "Buse Demir",
    "age": 32,
    "sex": "F",
    "image": "grace-king-32-F.jpg",
    "height": "163 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "grace.king@gmail.com",
      "gking@design.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_10116"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "572",
        "date": "27-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Atıştırmalık",
        "amount": "231",
        "date": "24-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Hediyelik Eşya",
        "amount": "743",
        "date": "08-05-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Umarım türbülans olmaz.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.dijital-sayfalar.info",
      "www.dijital-sayfalar.info",
      "www.gezgin-rotalar.net"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "8B": {
    "name": "Kerem Çetin",
    "age": 32,
    "sex": "M",
    "image": "andrew-scott-32-M.jpg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "andrew.scott@gmail.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_39458"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Giyim / Çanta",
        "amount": "2145",
        "date": "28-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "479",
        "date": "23-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "220",
        "date": "19-04-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Bileti bulamıyorum...",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.gunluk-haberler.net",
      "www.oyun-gemisi.xyz",
      "www.gunluk-haberler.net"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "8C": {
    "name": "Büşra Yılmaz",
    "age": 33,
    "sex": "F",
    "image": "lily-green-33-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Kızıl",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "lily.green@gmail.com",
      "lgreen@brewery.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_10457"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "308",
        "date": "25-04-2026"
      },
      {
        "vendor": "SüperMarket",
        "item": "Hediyelik Eşya",
        "amount": "984",
        "date": "21-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "912",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Havaalanı çok kalabalık.",
      "Görüşürüz!",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.bilim-ve-doga.xyz",
      "www.macera-oyunlari.biz",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "8D": {
    "name": "Kerem Yılmaz",
    "age": 33,
    "sex": "M",
    "image": "joshua-adams-33-M.jpg",
    "height": "188 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "josh.adams@gmail.com",
      "jadams@music.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_93874"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1750",
        "date": "29-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Yemek Menüsü",
        "amount": "433",
        "date": "07-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1082",
        "date": "27-04-2026"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Biraz gecikebilirim.",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.gunluk-haberler.net",
      "www.sinema-perdesi.biz",
      "www.gunluk-haberler.net"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "9A": {
    "name": "Eda Doğan",
    "age": 34,
    "sex": "F",
    "image": "zoe-baker-34-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "zoe.baker@gmail.com",
      "zbaker@restaurant.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_30600"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "381",
        "date": "23-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "294",
        "date": "02-05-2026"
      },
      {
        "vendor": "SüperMarket",
        "item": "Yemek Menüsü",
        "amount": "604",
        "date": "02-05-2026"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Bileti bulamıyorum...",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.gunluk-haberler.net",
      "www.dijital-sayfalar.info",
      "www.bilim-ve-doga.xyz"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "9B": {
    "name": "Berke Çetin",
    "age": 34,
    "sex": "M",
    "image": "ryan-nelson-34-M.jpg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "ryan.nelson@gmail.com",
      "rnelson@startup.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_73967"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "610",
        "date": "26-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "303",
        "date": "16-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "270",
        "date": "30-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Görüşürüz!",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.gunluk-haberler.net",
      "www.macera-oyunlari.biz",
      "www.oyun-gemisi.xyz"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "9C": {
    "name": "Büşra Şahin",
    "age": 35,
    "sex": "F",
    "image": "natalie-carter-35-F.jpg",
    "height": "170 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "natalie.c@gmail.com",
      "ncarter@bank.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_85839"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "1321",
        "date": "16-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "624",
        "date": "09-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "596",
        "date": "25-04-2026"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Dışarıda hava çok güzel.",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.bilim-ve-doga.xyz",
      "www.gunluk-haberler.net",
      "www.okulcantasi-dunyasi.biz"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "9D": {
    "name": "Barış Aydın",
    "age": 36,
    "sex": "M",
    "image": "kevin-mitchell-36-M.jpg",
    "height": "185 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "kevin.m@gmail.com",
      "kmitchell@outdoors.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_17322"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "328",
        "date": "29-04-2026"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Gözlük / Maske",
        "amount": "1330",
        "date": "27-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "875",
        "date": "15-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Umarım türbülans olmaz.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.dijital-sayfalar.info",
      "www.sinema-perdesi.biz",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "10A": {
    "name": "Büşra Arslan",
    "age": 36,
    "sex": "F",
    "image": "hannah-phillips-36-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "hannah.p@gmail.com",
      "hphillips@tech.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_88610"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "950",
        "date": "18-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "441",
        "date": "27-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "671",
        "date": "29-04-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Umarım türbülans olmaz.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.oyun-gemisi.xyz",
      "www.macera-oyunlari.biz",
      "www.gezgin-rotalar.net"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "10B": {
    "name": "Mehmet Çelik",
    "age": 37,
    "sex": "M",
    "image": "brandon-evans-37-M.jpg",
    "height": "175 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "brandon.e@gmail.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_98639"
      }
    ],
    "purchases": [
      {
        "vendor": "SüperMarket",
        "item": "Hediyelik Eşya",
        "amount": "661",
        "date": "06-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "507",
        "date": "22-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Gözlük / Maske",
        "amount": "2991",
        "date": "08-05-2026"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Seni bekliyorum.",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.sinema-perdesi.biz",
      "www.dijital-sayfalar.info"
    ],
    "baseScore": 16,
    "purchaseScore": 9,
    "textScore": 11,
    "facialScore": 18
  },
  "10C": {
    "name": "Defne Çetin",
    "age": 38,
    "sex": "F",
    "image": "victoria-campbell-38-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "victoria.c@gmail.com",
      "vcampbell@law.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_44360"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "481",
        "date": "08-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "805",
        "date": "24-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Hediyelik Eşya",
        "amount": "604",
        "date": "19-04-2026"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Valizi teslim ettim.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.sinema-perdesi.biz",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "10D": {
    "name": "Emre Doğan",
    "age": 40,
    "sex": "M",
    "image": "tyler-parker-40-M.jpg",
    "height": "183 cm",
    "eyes": "Mavi",
    "hair": "Gri",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "tyler.parker@gmail.com",
      "tparker@silicon.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_82624"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Saat",
        "amount": "9908",
        "date": "26-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "439",
        "date": "15-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "361",
        "date": "20-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Valizi teslim ettim.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.dijital-sayfalar.info",
      "www.gezgin-rotalar.net",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "11A": {
    "name": "Melis Yıldız",
    "age": 39,
    "sex": "F",
    "image": "madison-murphy-39-F.jpg",
    "height": "165 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "madison.m@gmail.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_72734"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Atıştırmalık",
        "amount": "390",
        "date": "28-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "625",
        "date": "27-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "883",
        "date": "26-04-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Görüşürüz!",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.macera-oyunlari.biz",
      "www.macera-oyunlari.biz",
      "www.gunluk-haberler.net"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "11B": {
    "name": "Aslı Kaya",
    "age": 41,
    "sex": "F",
    "image": "jessica-rivera-41-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "jessica.r@gmail.com",
      "jrivera@healthcare.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_33544"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "809",
        "date": "03-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "669",
        "date": "15-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "569",
        "date": "20-04-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Çok sıra var.",
      "Görüşürüz!"
    ],
    "websites": [
      "www.macera-oyunlari.biz",
      "www.dijital-sayfalar.info",
      "www.sinema-perdesi.biz"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "11C": {
    "name": "Mert Çelik",
    "age": 41,
    "sex": "M",
    "image": "jason-wright-41-M.jpg",
    "height": "180 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "jason.wright@gmail.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_71738"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "958",
        "date": "21-04-2026"
      },
      {
        "vendor": "SüperMarket",
        "item": "Hediyelik Eşya",
        "amount": "335",
        "date": "08-05-2026"
      },
      {
        "vendor": "SporMağazası",
        "item": "Giyim / Çanta",
        "amount": "1468",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Uçağa biniyorum!",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.gunluk-haberler.net",
      "www.dijital-sayfalar.info"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "11D": {
    "name": "Tolga Yıldız",
    "age": 42,
    "sex": "M",
    "image": "robert-torres-42-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "robert.t@gmail.com",
      "rtorres@engineering.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_33665"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "837",
        "date": "30-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "515",
        "date": "30-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "530",
        "date": "02-05-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Çok sıra var.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.gunluk-haberler.net",
      "www.bilim-ve-doga.xyz",
      "www.gunluk-haberler.net"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "12A": {
    "name": "Aslı Kara",
    "age": 44,
    "sex": "F",
    "image": "nicole-stewart-44-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "nicole.s@gmail.com",
      "nstewart@insurance.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_31621"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "778",
        "date": "30-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "557",
        "date": "20-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "1160",
        "date": "16-04-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Yolculuk başlıyor!",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.gezgin-rotalar.net",
      "www.okulcantasi-dunyasi.biz",
      "www.gezgin-rotalar.net"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "12B": {
    "name": "Buse Öztürk",
    "age": 45,
    "sex": "F",
    "image": "jennifer-collins-45-F.jpg",
    "height": "163 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "jennifer.c@gmail.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@uye_23487"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "502",
        "date": "09-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Atıştırmalık",
        "amount": "235",
        "date": "21-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "598",
        "date": "18-04-2026"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Yolculuk başlıyor!",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.gezgin-rotalar.net",
      "www.gunluk-haberler.net",
      "www.bilim-ve-doga.xyz"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "12C": {
    "name": "Deniz Demir",
    "age": 45,
    "sex": "M",
    "image": "steven-sanchez-45-M.jpg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "steven.s@gmail.com",
      "ssanchez@mining.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_21066"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Giyim / Çanta",
        "amount": "1470",
        "date": "17-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "640",
        "date": "05-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "245",
        "date": "07-05-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Umarım türbülans olmaz.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.okulcantasi-dunyasi.biz",
      "www.gunluk-haberler.net",
      "www.dijital-sayfalar.info"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "12D": {
    "name": "Can Kara",
    "age": 58,
    "sex": "M",
    "image": "george-patterson-58-M.jpg",
    "height": "185 cm",
    "eyes": "Kahverengi",
    "hair": "White",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "george.p@gmail.com",
      "gpatterson@steel.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_67251"
      }
    ],
    "purchases": [
      {
        "vendor": "SporMağazası",
        "item": "Giyim / Çanta",
        "amount": "1902",
        "date": "02-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Kahve",
        "amount": "391",
        "date": "17-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Gözlük / Maske",
        "amount": "3884",
        "date": "29-04-2026"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Havaalanı çok kalabalık.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.oyun-gemisi.xyz",
      "www.gezgin-rotalar.net",
      "www.dijital-sayfalar.info"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "13B": {
    "name": "Can Demir",
    "age": 23,
    "sex": "M",
    "image": "alex-mercer-23-M.jpg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "alex.mercer@gmail.com",
      "amercer@newsoutlet.com"
    ],
    "socials": [
      {
        "platform": "VideoGezgini",
        "handle": "@kullanici_cnd"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "413",
        "date": "22-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "438",
        "date": "15-04-2026"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Aksesuarı",
        "amount": "748",
        "date": "28-04-2026"
      }
    ],
    "texts": [
      "Paketi aldın mı?",
      "Uçuş çok sarsıntılı, midem bulandı. Hemen tuvalete gitmem lazım!",
      "Planı unutma."
    ],
    "websites": [
      "www.macera-oyunlari.biz",
      "www.sinema-perdesi.biz",
      "www.macera-oyunlari.biz"
    ],
    "baseScore": 42,
    "purchaseScore": 8,
    "textScore": 55,
    "facialScore": 52,
    "isAlex": true
  },
  "13C": {
    "name": "Buse Aslan",
    "age": 47,
    "sex": "F",
    "image": "karen-price-47-F.jpg",
    "height": "165 cm",
    "eyes": "Yeşil",
    "hair": "Sarı",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "karen.price@gmail.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_96290"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "579",
        "date": "22-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "620",
        "date": "18-04-2026"
      },
      {
        "vendor": "SüperMarket",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1322",
        "date": "26-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Uçağa biniyorum!",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.oyun-gemisi.xyz",
      "www.gezgin-rotalar.net",
      "www.macera-oyunlari.biz"
    ],
    "baseScore": 4,
    "purchaseScore": 1,
    "textScore": 2,
    "facialScore": 6
  },
  "13D": {
    "name": "Burak Yılmaz",
    "age": 48,
    "sex": "M",
    "image": "mark-foster-48-M.jpg",
    "height": "175 cm",
    "eyes": "Yeşil",
    "hair": "Gri",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "mark.foster@gmail.com",
      "mfoster@accounting.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_59474"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "971",
        "date": "20-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "409",
        "date": "16-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "419",
        "date": "07-05-2026"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Görüşürüz!",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.okulcantasi-dunyasi.biz",
      "www.okulcantasi-dunyasi.biz"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "14A": {
    "name": "Selin Aslan",
    "age": 50,
    "sex": "F",
    "image": "patricia-morgan-50-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Gri",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "patricia.m@gmail.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_24512"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Atıştırmalık",
        "amount": "224",
        "date": "01-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "İçecek",
        "amount": "264",
        "date": "27-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "555",
        "date": "03-05-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Yolculuk başlıyor!",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.gunluk-haberler.net",
      "www.gezgin-rotalar.net"
    ],
    "baseScore": 3,
    "purchaseScore": 1,
    "textScore": 1,
    "facialScore": 5
  },
  "14B": {
    "name": "Emre Yılmaz",
    "age": 50,
    "sex": "M",
    "image": "richard-hayes-50-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Gri",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "richard.h@gmail.com",
      "rhayes@music.com"
    ],
    "socials": [
      {
        "platform": "KısaMesaj",
        "handle": "@uye_48829"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "909",
        "date": "30-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "391",
        "date": "07-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1710",
        "date": "05-05-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Dışarıda hava çok güzel.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.gezgin-rotalar.net",
      "www.macera-oyunlari.biz",
      "www.bilim-ve-doga.xyz"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "14C": {
    "name": "Nehir Çetin",
    "age": 52,
    "sex": "F",
    "image": "linda-russell-52-F.jpg",
    "height": "165 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "linda.r@gmail.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_26825"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Atıştırmalık",
        "amount": "301",
        "date": "21-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Hediyelik Eşya",
        "amount": "447",
        "date": "09-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "376",
        "date": "22-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Biraz gecikebilirim.",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.sinema-perdesi.biz",
      "www.gunluk-haberler.net",
      "www.macera-oyunlari.biz"
    ],
    "baseScore": 4,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 6
  },
  "14D": {
    "name": "Nehir Çelik",
    "age": 55,
    "sex": "F",
    "image": "dorothy-howard-55-F.jpg",
    "height": "168 cm",
    "eyes": "Kahverengi",
    "hair": "Gri",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "dorothy.h@gmail.com"
    ],
    "socials": [
      {
        "platform": "FotoAğı",
        "handle": "@uye_83799"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "581",
        "date": "30-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "613",
        "date": "07-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "309",
        "date": "08-05-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Bileti bulamıyorum...",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.bilim-ve-doga.xyz",
      "www.bilim-ve-doga.xyz",
      "www.macera-oyunlari.biz"
    ],
    "baseScore": 6,
    "purchaseScore": 3,
    "textScore": 3,
    "facialScore": 8
  }
};

const config = {
  "totalSeats": 56,
  "rows": 14,
  "cols": 4,
  "letters": [
    "A",
    "B",
    "C",
    "D"
  ],
  "youSeat": "13A",
  "alexSeat": "13B"
};
