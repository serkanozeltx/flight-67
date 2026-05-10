// Eğitim amaçlı, Türkiye'ye uyarlanmış Uçuş 67 Yolcu Verileri
// 13B = Can Demir (arkadaş, şüpheli mesajlar)
// 1D = Murat Yılmaz (gerçek suçlu, şüpheli alışverişler)

const passengerData = {
  "1A": {
    "name": "Melis Aydın",
    "age": 16,
    "sex": "F",
    "image": "sophia-chen-16-F.jpg",
    "height": "163 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "melis.aydın@ymail.net"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@melisayd"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "168",
        "date": "08-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "377",
        "date": "23-04-2026"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Aksesuarı",
        "amount": "690",
        "date": "08-05-2026"
      }
    ],
    "texts": [
      "Havaalanı çok kalabalık.",
      "Biraz gecikebilirim.",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.ilan-bul.com",
      "www.video-izle.com"
    ],
    "baseScore": 12,
    "purchaseScore": 5,
    "textScore": 8,
    "facialScore": 15
  },
  "1B": {
    "name": "Aslı Özdemir",
    "age": 17,
    "sex": "F",
    "image": "emma-rodriguez-17-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "aslı.özdemir@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@aslıözd"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Gözlük / Maske",
        "amount": "1118",
        "date": "24-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "177",
        "date": "25-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Dergi",
        "amount": "170",
        "date": "27-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Valizi teslim ettim.",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.video-izle.com",
      "www.trend-market.com"
    ],
    "baseScore": 8,
    "purchaseScore": 3,
    "textScore": 5,
    "facialScore": 10
  },
  "1C": {
    "name": "Defne Çetin",
    "age": 18,
    "sex": "F",
    "image": "olivia-martinez-18-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "defne.çetin@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@defneçet"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "498",
        "date": "09-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "142",
        "date": "20-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Seyahat Aksesuarı",
        "amount": "772",
        "date": "01-05-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Umarım türbülans olmaz.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.muzik-dinle.com",
      "www.trend-market.com"
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
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "murat.y@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@muratyilmaz"
      }
    ],
    "purchases": [
      {
        "vendor": "SeyahatEşyaları",
        "item": "Battaniye",
        "amount": "850",
        "date": "20-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Şişe Su",
        "amount": "35",
        "date": "17-04-2026"
      }
    ],
    "texts": [
      "Kapıya geç kaldım",
      "Bana yer tut",
      "Bu havaalanı dev gibi"
    ],
    "websites": [
      "www.muzik-dinle.com",
      "www.yemek-iste.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 35,
    "purchaseScore": 55,
    "textScore": 10,
    "facialScore": 45
  },
  "2A": {
    "name": "Nehir Öztürk",
    "age": 19,
    "sex": "F",
    "image": "isabella-kim-19-F.jpg",
    "height": "160 cm",
    "eyes": "Kahverengi",
    "hair": "Pembe (Boyalı)",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "nehir.öztürk@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@nehirözt"
      }
    ],
    "purchases": [
      {
        "vendor": "Havalimanı Büfe",
        "item": "Kulaklık",
        "amount": "5954",
        "date": "09-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "440",
        "date": "26-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "İçecek",
        "amount": "149",
        "date": "24-04-2026"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Pasaport kontrolündeyim.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.alisveris-yap.com",
      "www.trend-market.com"
    ],
    "baseScore": 11,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "2B": {
    "name": "Cem Kılıç",
    "age": 19,
    "sex": "M",
    "image": "ethan-brooks-19-M.jpg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "cem.kılıç@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@cemkıl"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Giyim / Çanta",
        "amount": "1531",
        "date": "25-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "174",
        "date": "02-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Atıştırmalık",
        "amount": "209",
        "date": "15-04-2026"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Valizi teslim ettim.",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.alisveris-yap.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 14,
    "purchaseScore": 8,
    "textScore": 9,
    "facialScore": 16
  },
  "2C": {
    "name": "Eda Çetin",
    "age": 20,
    "sex": "F",
    "image": "mia-thompson-20-F.jpg",
    "height": "165 cm",
    "eyes": "Mavi",
    "hair": "Turkuaz (Boyalı)",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "eda.çetin@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@edaçet"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Kitap",
        "amount": "389",
        "date": "29-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "İçecek",
        "amount": "172",
        "date": "21-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Gözlük / Maske",
        "amount": "1808",
        "date": "28-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Umarım türbülans olmaz.",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.video-izle.com",
      "www.kisa-mesaj.com",
      "www.muzik-dinle.com"
    ],
    "baseScore": 9,
    "purchaseScore": 5,
    "textScore": 4,
    "facialScore": 11
  },
  "2D": {
    "name": "Ege Demir",
    "age": 20,
    "sex": "M",
    "image": "noah-garcia-20-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "ege.demir@tmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@egedem"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1852",
        "date": "09-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "327",
        "date": "28-04-2026"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Aksesuarı",
        "amount": "487",
        "date": "17-04-2026"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Biraz gecikebilirim.",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.film-dizim.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "3A": {
    "name": "Ceren Aydın",
    "age": 21,
    "sex": "F",
    "image": "ava-wilson-21-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "ceren.aydın@iletinet.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@cerenayd"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "307",
        "date": "09-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "125",
        "date": "28-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "1148",
        "date": "22-04-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Dışarıda hava çok güzel.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.video-izle.com",
      "www.ornek-sosyal.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 7,
    "purchaseScore": 4,
    "textScore": 3,
    "facialScore": 9
  },
  "3B": {
    "name": "Cem Arslan",
    "age": 21,
    "sex": "M",
    "image": "liam-anderson-21-M.jpg",
    "height": "185 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "cem.arslan@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@cemars"
      }
    ],
    "purchases": [
      {
        "vendor": "SporMağazası",
        "item": "Hediyelik Eşya",
        "amount": "208",
        "date": "16-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "347",
        "date": "17-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Atıştırmalık",
        "amount": "114",
        "date": "29-04-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Çok sıra var.",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.kisa-mesaj.com",
      "www.trend-market.com"
    ],
    "baseScore": 16,
    "purchaseScore": 9,
    "textScore": 11,
    "facialScore": 18
  },
  "3C": {
    "name": "Melis Kaya",
    "age": 22,
    "sex": "F",
    "image": "charlotte-davis-22-F.jpg",
    "height": "163 cm",
    "eyes": "Kahverengi",
    "hair": "Kızıl",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "melis.kaya@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@meliskay"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "817",
        "date": "25-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1614",
        "date": "06-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "125",
        "date": "28-04-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Dışarıda hava çok güzel.",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.alisveris-yap.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 8,
    "purchaseScore": 3,
    "textScore": 5,
    "facialScore": 10
  },
  "3D": {
    "name": "Burak Yılmaz",
    "age": 22,
    "sex": "M",
    "image": "james-miller-22-M.jpg",
    "height": "175 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "burak.yılmaz@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@burakyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "Restoran",
        "item": "Hediyelik Eşya",
        "amount": "305",
        "date": "25-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Yemek Menüsü",
        "amount": "372",
        "date": "16-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Hediyelik Eşya",
        "amount": "661",
        "date": "19-04-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Çok sıra var.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.film-dizim.com",
      "www.trend-market.com"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "4A": {
    "name": "Ayşe Çetin",
    "age": 23,
    "sex": "F",
    "image": "amelia-brown-23-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "ayşe.çetin@zposta.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@ayşeçet"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "923",
        "date": "29-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "532",
        "date": "25-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "410",
        "date": "23-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Pasaport kontrolündeyim.",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.trend-market.com",
      "www.video-izle.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "4B": {
    "name": "Deniz Yılmaz",
    "age": 24,
    "sex": "M",
    "image": "benjamin-lee-24-M.jpg",
    "height": "178 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "deniz.yılmaz@zposta.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@denizyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "810",
        "date": "26-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "129",
        "date": "07-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Atıştırmalık",
        "amount": "72",
        "date": "22-04-2026"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Çok sıra var.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.muzik-dinle.com",
      "www.muzik-dinle.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "4C": {
    "name": "İnci Yılmaz",
    "age": 24,
    "sex": "F",
    "image": "harper-johnson-24-F.jpg",
    "height": "173 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "i̇nci.yılmaz@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@i̇nciyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Kozmetik Ürünü",
        "amount": "1642",
        "date": "17-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Yemek Menüsü",
        "amount": "306",
        "date": "23-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "1731",
        "date": "06-05-2026"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Valizi teslim ettim.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.yemek-iste.com",
      "www.muzik-dinle.com"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "4D": {
    "name": "Burak Kara",
    "age": 25,
    "sex": "M",
    "image": "daniel-martinez-25-M.jpg",
    "height": "188 cm",
    "eyes": "Kahverengi",
    "hair": "Kızıl",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "burak.kara@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@burakkar"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "904",
        "date": "08-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "121",
        "date": "03-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Kitap",
        "amount": "421",
        "date": "25-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Havaalanı çok kalabalık.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.alisveris-yap.com",
      "www.film-dizim.com"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "5A": {
    "name": "Ceren Çelik",
    "age": 26,
    "sex": "F",
    "image": "evelyn-taylor-26-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "ceren.çelik@tmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@cerençel"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "749",
        "date": "28-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Yemek Menüsü",
        "amount": "413",
        "date": "23-04-2026"
      },
      {
        "vendor": "Havalimanı Büfe",
        "item": "Giyim / Çanta",
        "amount": "1461",
        "date": "05-05-2026"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Pasaport kontrolündeyim.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.alisveris-yap.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "5B": {
    "name": "Berke Özdemir",
    "age": 26,
    "sex": "M",
    "image": "william-thomas-26-M.jpg",
    "height": "180 cm",
    "eyes": "Yeşil",
    "hair": "Siyah",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "berke.özdemir@tmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@berkeözd"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "661",
        "date": "20-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "İçecek",
        "amount": "185",
        "date": "17-04-2026"
      },
      {
        "vendor": "SporMağazası",
        "item": "Giyim / Çanta",
        "amount": "1115",
        "date": "06-05-2026"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Görüşürüz!",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.kisa-mesaj.com",
      "www.video-izle.com"
    ],
    "baseScore": 15,
    "purchaseScore": 8,
    "textScore": 10,
    "facialScore": 17
  },
  "5C": {
    "name": "Büşra Aydın",
    "age": 27,
    "sex": "F",
    "image": "abigail-jackson-27-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "büşra.aydın@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@büşraayd"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Kitap",
        "amount": "593",
        "date": "15-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "557",
        "date": "19-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Saat",
        "amount": "3553",
        "date": "08-05-2026"
      }
    ],
    "texts": [
      "Biraz gecikebilirim.",
      "Pasaport kontrolündeyim.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.muzik-dinle.com",
      "www.video-izle.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "5D": {
    "name": "Emre Kaya",
    "age": 27,
    "sex": "M",
    "image": "alexander-white-27-M.jpg",
    "height": "183 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "emre.kaya@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@emrekay"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "485",
        "date": "25-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "134",
        "date": "04-05-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "1264",
        "date": "15-04-2026"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Gelince haber ver.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.film-dizim.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "6A": {
    "name": "Ceren Çetin",
    "age": 28,
    "sex": "F",
    "image": "emily-harris-28-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "ceren.çetin@iletinet.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@cerençet"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Giyim / Çanta",
        "amount": "992",
        "date": "20-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "525",
        "date": "26-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "389",
        "date": "27-04-2026"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Uçağa biniyorum!",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.video-izle.com",
      "www.video-izle.com",
      "www.film-dizim.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "6B": {
    "name": "Mert Yıldız",
    "age": 28,
    "sex": "M",
    "image": "michael-clark-28-M.jpg",
    "height": "178 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "mert.yıldız@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@mertyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "815",
        "date": "03-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "503",
        "date": "29-04-2026"
      },
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "955",
        "date": "24-04-2026"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Bileti bulamıyorum...",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.video-izle.com",
      "www.video-izle.com",
      "www.film-dizim.com"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "6C": {
    "name": "Melis Özdemir",
    "age": 29,
    "sex": "F",
    "image": "elizabeth-lewis-29-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Sarı",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "melis.özdemir@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@melisözd"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "262",
        "date": "20-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "1474",
        "date": "30-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "152",
        "date": "24-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Gelince haber ver.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.muzik-dinle.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "6D": {
    "name": "Barış Çetin",
    "age": 29,
    "sex": "M",
    "image": "david-robinson-29-M.jpg",
    "height": "185 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "barış.çetin@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@barışçet"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "925",
        "date": "04-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "484",
        "date": "24-04-2026"
      },
      {
        "vendor": "SporMağazası",
        "item": "Giyim / Çanta",
        "amount": "788",
        "date": "30-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Uçağa biniyorum!",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.film-dizim.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 14,
    "purchaseScore": 8,
    "textScore": 9,
    "facialScore": 16
  },
  "7A": {
    "name": "Merve Aydın",
    "age": 30,
    "sex": "F",
    "image": "sofia-walker-30-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "merve.aydın@ymail.net"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@merveayd"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "578",
        "date": "28-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "İçecek",
        "amount": "133",
        "date": "26-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "538",
        "date": "18-04-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Pasaport kontrolündeyim.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.ilan-bul.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "7B": {
    "name": "Berke Kaya",
    "age": 30,
    "sex": "M",
    "image": "matthew-hall-30-M.jpg",
    "height": "175 cm",
    "eyes": "Yeşil",
    "hair": "Siyah",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "berke.kaya@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@berkekay"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "928",
        "date": "21-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "409",
        "date": "30-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Hediyelik Eşya",
        "amount": "950",
        "date": "25-04-2026"
      }
    ],
    "texts": [
      "Havaalanı çok kalabalık.",
      "Umarım türbülans olmaz.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.yemek-iste.com",
      "www.trend-market.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "7C": {
    "name": "Eda Doğan",
    "age": 31,
    "sex": "F",
    "image": "chloe-allen-31-F.jpg",
    "height": "173 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "eda.doğan@ymail.net"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@edadoğ"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "612",
        "date": "27-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "İçecek",
        "amount": "200",
        "date": "25-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Giyim / Çanta",
        "amount": "1514",
        "date": "29-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Pasaport kontrolündeyim.",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.trend-market.com",
      "www.trend-market.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "7D": {
    "name": "Can Kılıç",
    "age": 31,
    "sex": "M",
    "image": "christopher-young-31-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "can.kılıç@tmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@cankıl"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "984",
        "date": "28-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "471",
        "date": "21-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "İçecek",
        "amount": "218",
        "date": "23-04-2026"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Dışarıda hava çok güzel.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.ornek-sosyal.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "8A": {
    "name": "İrem Şahin",
    "age": 32,
    "sex": "F",
    "image": "grace-king-32-F.jpg",
    "height": "163 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "i̇rem.şahin@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇remşah"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "675",
        "date": "19-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Atıştırmalık",
        "amount": "166",
        "date": "03-05-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Hediyelik Eşya",
        "amount": "519",
        "date": "19-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Yolculuk başlıyor!",
      "Çok sıra var."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.video-izle.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "8B": {
    "name": "Ali Aslan",
    "age": 32,
    "sex": "M",
    "image": "andrew-scott-32-M.jpg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "ali.aslan@iletinet.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@aliasl"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Giyim / Çanta",
        "amount": "758",
        "date": "30-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "491",
        "date": "22-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "392",
        "date": "01-05-2026"
      }
    ],
    "texts": [
      "Havaalanı çok kalabalık.",
      "Uçağa biniyorum!",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.alisveris-yap.com",
      "www.film-dizim.com"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "8C": {
    "name": "Selin Özdemir",
    "age": 33,
    "sex": "F",
    "image": "lily-green-33-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Kızıl",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "selin.özdemir@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@selinözd"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "997",
        "date": "27-04-2026"
      },
      {
        "vendor": "SüperMarket",
        "item": "Hediyelik Eşya",
        "amount": "944",
        "date": "08-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "988",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Yolculuk başlıyor!",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.trend-market.com",
      "www.ornek-sosyal.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "8D": {
    "name": "Mehmet Doğan",
    "age": 33,
    "sex": "M",
    "image": "joshua-adams-33-M.jpg",
    "height": "188 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "mehmet.doğan@iletinet.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@mehmetdoğ"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "541",
        "date": "15-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Yemek Menüsü",
        "amount": "346",
        "date": "03-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1115",
        "date": "09-05-2026"
      }
    ],
    "texts": [
      "Havaalanı çok kalabalık.",
      "Bileti bulamıyorum...",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.yemek-iste.com",
      "www.video-izle.com"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "9A": {
    "name": "Buse Kılıç",
    "age": 34,
    "sex": "F",
    "image": "zoe-baker-34-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "buse.kılıç@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@busekıl"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "840",
        "date": "08-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "458",
        "date": "16-04-2026"
      },
      {
        "vendor": "SüperMarket",
        "item": "Yemek Menüsü",
        "amount": "490",
        "date": "03-05-2026"
      }
    ],
    "texts": [
      "Biraz gecikebilirim.",
      "Biraz gecikebilirim.",
      "Çok sıra var."
    ],
    "websites": [
      "www.video-izle.com",
      "www.ornek-sosyal.com",
      "www.video-izle.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "9B": {
    "name": "Mert Demir",
    "age": 34,
    "sex": "M",
    "image": "ryan-nelson-34-M.jpg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "mert.demir@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@mertdem"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "626",
        "date": "21-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "145",
        "date": "29-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "847",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Dışarıda hava çok güzel.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.alisveris-yap.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "9C": {
    "name": "Büşra Kılıç",
    "age": 35,
    "sex": "F",
    "image": "natalie-carter-35-F.jpg",
    "height": "170 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "büşra.kılıç@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@büşrakıl"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "2347",
        "date": "30-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "264",
        "date": "26-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "404",
        "date": "07-05-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Bileti bulamıyorum...",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.trend-market.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "9D": {
    "name": "Arda Kara",
    "age": 36,
    "sex": "M",
    "image": "kevin-mitchell-36-M.jpg",
    "height": "185 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "arda.kara@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@ardakar"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "924",
        "date": "04-05-2026"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Gözlük / Maske",
        "amount": "2450",
        "date": "05-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "970",
        "date": "29-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Bileti bulamıyorum...",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.video-izle.com",
      "www.trend-market.com"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "10A": {
    "name": "İrem Özdemir",
    "age": 36,
    "sex": "F",
    "image": "hannah-phillips-36-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "i̇rem.özdemir@zposta.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇remözd"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "950",
        "date": "19-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "479",
        "date": "17-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "743",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Gelince haber ver.",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.muzik-dinle.com",
      "www.film-dizim.com"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "10B": {
    "name": "Ege Yılmaz",
    "age": 37,
    "sex": "M",
    "image": "brandon-evans-37-M.jpg",
    "height": "175 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "ege.yılmaz@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@egeyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "SüperMarket",
        "item": "Hediyelik Eşya",
        "amount": "307",
        "date": "03-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "389",
        "date": "21-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Gözlük / Maske",
        "amount": "2061",
        "date": "08-05-2026"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Çok sıra var.",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.film-dizim.com",
      "www.muzik-dinle.com"
    ],
    "baseScore": 16,
    "purchaseScore": 9,
    "textScore": 11,
    "facialScore": 18
  },
  "10C": {
    "name": "Derya Aydın",
    "age": 38,
    "sex": "F",
    "image": "victoria-campbell-38-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "derya.aydın@ymail.net"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@deryaayd"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "573",
        "date": "22-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "369",
        "date": "23-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Hediyelik Eşya",
        "amount": "659",
        "date": "25-04-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Seni bekliyorum.",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.ornek-sosyal.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "10D": {
    "name": "Deniz Doğan",
    "age": 40,
    "sex": "M",
    "image": "tyler-parker-40-M.jpg",
    "height": "183 cm",
    "eyes": "Mavi",
    "hair": "Gri",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "deniz.doğan@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@denizdoğ"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Saat",
        "amount": "3850",
        "date": "06-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "127",
        "date": "08-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "452",
        "date": "28-04-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Yolculuk başlıyor!",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.trend-market.com",
      "www.trend-market.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "11A": {
    "name": "İrem Yıldız",
    "age": 39,
    "sex": "F",
    "image": "madison-murphy-39-F.jpg",
    "height": "165 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "i̇rem.yıldız@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@i̇remyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Atıştırmalık",
        "amount": "228",
        "date": "21-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "825",
        "date": "01-05-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "2230",
        "date": "17-04-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Görüşürüz!",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.muzik-dinle.com",
      "www.video-izle.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "11B": {
    "name": "Defne Yıldız",
    "age": 41,
    "sex": "F",
    "image": "jessica-rivera-41-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "defne.yıldız@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@defneyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "932",
        "date": "07-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "310",
        "date": "26-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "450",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Görüşürüz!",
      "Görüşürüz!"
    ],
    "websites": [
      "www.trend-market.com",
      "www.ornek-sosyal.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "11C": {
    "name": "Mehmet Özdemir",
    "age": 41,
    "sex": "M",
    "image": "jason-wright-41-M.jpg",
    "height": "180 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "mehmet.özdemir@ymail.net"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@mehmetözd"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "636",
        "date": "29-04-2026"
      },
      {
        "vendor": "SüperMarket",
        "item": "Hediyelik Eşya",
        "amount": "755",
        "date": "02-05-2026"
      },
      {
        "vendor": "SporMağazası",
        "item": "Giyim / Çanta",
        "amount": "2349",
        "date": "25-04-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Biraz gecikebilirim.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.muzik-dinle.com",
      "www.film-dizim.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "11D": {
    "name": "Mehmet Demir",
    "age": 42,
    "sex": "M",
    "image": "robert-torres-42-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "mehmet.demir@coldmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@mehmetdem"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "400",
        "date": "30-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "403",
        "date": "06-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "322",
        "date": "06-05-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Biraz gecikebilirim.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.muzik-dinle.com",
      "www.yemek-iste.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "12A": {
    "name": "Aslı Yılmaz",
    "age": 44,
    "sex": "F",
    "image": "nicole-stewart-44-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "aslı.yılmaz@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@aslıyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "599",
        "date": "16-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "414",
        "date": "17-04-2026"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Giyim / Çanta",
        "amount": "1564",
        "date": "01-05-2026"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Çok sıra var.",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.video-izle.com",
      "www.ornek-sosyal.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "12B": {
    "name": "İnci Kara",
    "age": 45,
    "sex": "F",
    "image": "jennifer-collins-45-F.jpg",
    "height": "163 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "i̇nci.kara@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇ncikar"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "382",
        "date": "26-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Atıştırmalık",
        "amount": "113",
        "date": "02-05-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "389",
        "date": "22-04-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Pasaport kontrolündeyim.",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.ornek-sosyal.com",
      "www.film-dizim.com"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "12C": {
    "name": "Tolga Doğan",
    "age": 45,
    "sex": "M",
    "image": "steven-sanchez-45-M.jpg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Siyah",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "tolga.doğan@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@tolgadoğ"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Giyim / Çanta",
        "amount": "2298",
        "date": "29-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "519",
        "date": "07-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "249",
        "date": "05-05-2026"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Seni bekliyorum.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.video-izle.com",
      "www.kisa-mesaj.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "12D": {
    "name": "Can Çelik",
    "age": 58,
    "sex": "M",
    "image": "george-patterson-58-M.jpg",
    "height": "185 cm",
    "eyes": "Kahverengi",
    "hair": "White",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "can.çelik@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@cançel"
      }
    ],
    "purchases": [
      {
        "vendor": "SporMağazası",
        "item": "Giyim / Çanta",
        "amount": "2387",
        "date": "27-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Kahve",
        "amount": "152",
        "date": "28-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Gözlük / Maske",
        "amount": "1965",
        "date": "24-04-2026"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Biraz gecikebilirim.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.video-izle.com",
      "www.ornek-sosyal.com"
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
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "can.demir@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@candemir"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "174",
        "date": "18-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "350",
        "date": "06-05-2026"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Aksesuarı",
        "amount": "428",
        "date": "03-05-2026"
      }
    ],
    "texts": [
      "Paketi aldın mı?",
      "Çılgın bir uçuş. Dostum, acilen tuvalete gitmem lazım!",
      "Planı unutma"
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.video-izle.com",
      "www.muzik-dinle.com"
    ],
    "baseScore": 42,
    "purchaseScore": 8,
    "textScore": 55,
    "facialScore": 52,
    "isAlex": true
  },
  "13C": {
    "name": "Selin Aydın",
    "age": 47,
    "sex": "F",
    "image": "karen-price-47-F.jpg",
    "height": "165 cm",
    "eyes": "Yeşil",
    "hair": "Sarı",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "selin.aydın@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@selinayd"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Hediyelik Eşya",
        "amount": "613",
        "date": "01-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Hediyelik Eşya",
        "amount": "757",
        "date": "15-04-2026"
      },
      {
        "vendor": "SüperMarket",
        "item": "Hobi / Müzik Eşyası",
        "amount": "597",
        "date": "01-05-2026"
      }
    ],
    "texts": [
      "Havaalanı çok kalabalık.",
      "Çok sıra var.",
      "Çok sıra var."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.alisveris-yap.com",
      "www.video-izle.com"
    ],
    "baseScore": 4,
    "purchaseScore": 1,
    "textScore": 2,
    "facialScore": 6
  },
  "13D": {
    "name": "Deniz Şahin",
    "age": 48,
    "sex": "M",
    "image": "mark-foster-48-M.jpg",
    "height": "175 cm",
    "eyes": "Yeşil",
    "hair": "Gri",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "deniz.şahin@coldmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@denizşah"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "331",
        "date": "05-05-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "160",
        "date": "20-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "335",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Yolculuk başlıyor!",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.trend-market.com",
      "www.muzik-dinle.com"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "14A": {
    "name": "Ceren Aydın",
    "age": 50,
    "sex": "F",
    "image": "patricia-morgan-50-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Gri",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "ceren.aydın@zposta.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@cerenayd"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Atıştırmalık",
        "amount": "295",
        "date": "23-04-2026"
      },
      {
        "vendor": "Kahvecim",
        "item": "İçecek",
        "amount": "187",
        "date": "06-05-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "931",
        "date": "27-04-2026"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Pasaport kontrolündeyim.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.kisa-mesaj.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 3,
    "purchaseScore": 1,
    "textScore": 1,
    "facialScore": 5
  },
  "14B": {
    "name": "Can Yılmaz",
    "age": 50,
    "sex": "M",
    "image": "richard-hayes-50-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Gri",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "can.yılmaz@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@canyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1219",
        "date": "29-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "264",
        "date": "23-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hobi / Müzik Eşyası",
        "amount": "1425",
        "date": "18-04-2026"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Valizi teslim ettim.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.trend-market.com",
      "www.yemek-iste.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "14C": {
    "name": "İnci Kaya",
    "age": 52,
    "sex": "F",
    "image": "linda-russell-52-F.jpg",
    "height": "165 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "i̇nci.kaya@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇ncikay"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Atıştırmalık",
        "amount": "121",
        "date": "23-04-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Hediyelik Eşya",
        "amount": "320",
        "date": "15-04-2026"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "511",
        "date": "04-05-2026"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Pasaport kontrolündeyim.",
      "Çok sıra var."
    ],
    "websites": [
      "www.trend-market.com",
      "www.yemek-iste.com",
      "www.trend-market.com"
    ],
    "baseScore": 4,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 6
  },
  "14D": {
    "name": "Derya Doğan",
    "age": 55,
    "sex": "F",
    "image": "dorothy-howard-55-F.jpg",
    "height": "168 cm",
    "eyes": "Kahverengi",
    "hair": "Gri",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "derya.doğan@iletinet.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@deryadoğ"
      }
    ],
    "purchases": [
      {
        "vendor": "Eczane",
        "item": "Hediyelik Eşya",
        "amount": "627",
        "date": "06-05-2026"
      },
      {
        "vendor": "Restoran",
        "item": "Yemek Menüsü",
        "amount": "276",
        "date": "24-04-2026"
      },
      {
        "vendor": "Yerel Mağaza",
        "item": "Hediyelik Eşya",
        "amount": "516",
        "date": "09-05-2026"
      }
    ],
    "texts": [
      "Biraz gecikebilirim.",
      "Yolculuk başlıyor!",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.alisveris-yap.com",
      "www.alisveris-yap.com"
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
