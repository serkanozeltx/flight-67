// Eğitim amaçlı, Türkiye'ye uyarlanmış Uçuş 67 Yolcu Verileri
// 13B = Can Demir (arkadaş, şüpheli mesajlar)
// 1D = Murat Yılmaz (gerçek suçlu, şüpheli alışverişler)

const passengerData = {
  "1A": {
    "name": "Derya Arslan",
    "age": 16,
    "sex": "F",
    "image": "sophia-chen-16-F.jpg",
    "height": "163 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "derya.arslan@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@deryaars"
      }
    ],
    "purchases": [
      {
        "vendor": "KozmetikDünyası",
        "item": "Su",
        "amount": "31",
        "date": "2026-04-18"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Sandviç",
        "amount": "250",
        "date": "2026-04-28"
      },
      {
        "vendor": "YapıMarket",
        "item": "Şarj Kablosu",
        "amount": "409",
        "date": "2026-04-25"
      }
    ],
    "texts": [
      "Havaalanı çok kalabalık.",
      "Seni bekliyorum.",
      "Görüşürüz!"
    ],
    "websites": [
      "www.trend-market.com",
      "www.alisveris-yap.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 12,
    "purchaseScore": 5,
    "textScore": 8,
    "facialScore": 15
  },
  "1B": {
    "name": "Derya Şahin",
    "age": 17,
    "sex": "F",
    "image": "emma-rodriguez-17-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "derya.şahin@iletinet.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@deryaşah"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Kitap",
        "amount": "386",
        "date": "2026-04-28"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Şarj Kablosu",
        "amount": "494",
        "date": "2026-05-01"
      },
      {
        "vendor": "ModaTrend",
        "item": "Şarj Kablosu",
        "amount": "640",
        "date": "2026-05-01"
      }
    ],
    "texts": [
      "Görüşürüz!",
      "Havaalanı çok kalabalık.",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.muzik-dinle.com",
      "www.film-dizim.com"
    ],
    "baseScore": 8,
    "purchaseScore": 3,
    "textScore": 5,
    "facialScore": 10
  },
  "1C": {
    "name": "Aslı Doğan",
    "age": 18,
    "sex": "F",
    "image": "olivia-martinez-18-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "aslı.doğan@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@aslıdoğ"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Tişört",
        "amount": "1214",
        "date": "2026-05-08"
      },
      {
        "vendor": "Kahvecim",
        "item": "Güneş Gözlüğü",
        "amount": "9037",
        "date": "2026-04-20"
      },
      {
        "vendor": "ModaTrend",
        "item": "Kitap",
        "amount": "495",
        "date": "2026-04-18"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Umarım türbülans olmaz.",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.ilan-bul.com",
      "www.ornek-sosyal.com"
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
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "murat.y@zposta.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@muratyilmaz"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Taşınabilir Şarj",
        "amount": "2500",
        "date": "2026-04-29"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Karanlık Sırlar Kitabı",
        "amount": "550",
        "date": "2026-05-03"
      },
      {
        "vendor": "Burgercim",
        "item": "Menü",
        "amount": "350",
        "date": "2026-04-16"
      }
    ],
    "texts": [
      "Kapıya geç kaldım",
      "Bana yer tut",
      "Bu havaalanı dev gibi"
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.film-dizim.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 35,
    "purchaseScore": 55,
    "textScore": 10,
    "facialScore": 45
  },
  "2A": {
    "name": "Eda Çelik",
    "age": 19,
    "sex": "F",
    "image": "isabella-kim-19-F.jpg",
    "height": "160 cm",
    "eyes": "Kahverengi",
    "hair": "Pembe (Boyalı)",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "eda.çelik@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@edaçel"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Güneş Gözlüğü",
        "amount": "13597",
        "date": "2026-04-29"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Dergi",
        "amount": "285",
        "date": "2026-05-03"
      },
      {
        "vendor": "YapıMarket",
        "item": "Kahve",
        "amount": "141",
        "date": "2026-04-19"
      }
    ],
    "texts": [
      "Görüşürüz!",
      "Seni bekliyorum.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.muzik-dinle.com",
      "www.muzik-dinle.com"
    ],
    "baseScore": 11,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "2B": {
    "name": "Ali Kaya",
    "age": 19,
    "sex": "M",
    "image": "ethan-brooks-19-M.jpg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "ali.kaya@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@alikay"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Su",
        "amount": "35",
        "date": "2026-04-20"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Sandviç",
        "amount": "242",
        "date": "2026-05-07"
      },
      {
        "vendor": "SüperMarket",
        "item": "Parfüm",
        "amount": "4456",
        "date": "2026-04-25"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Gelince haber ver.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.kisa-mesaj.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 14,
    "purchaseScore": 8,
    "textScore": 9,
    "facialScore": 16
  },
  "2C": {
    "name": "Ceren Şahin",
    "age": 20,
    "sex": "F",
    "image": "mia-thompson-20-F.jpg",
    "height": "165 cm",
    "eyes": "Mavi",
    "hair": "Turkuaz (Boyalı)",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "ceren.şahin@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@cerenşah"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Parfüm",
        "amount": "3573",
        "date": "2026-04-18"
      },
      {
        "vendor": "YapıMarket",
        "item": "Kulaklık",
        "amount": "6397",
        "date": "2026-05-09"
      },
      {
        "vendor": "ModaTrend",
        "item": "Kulaklık",
        "amount": "4447",
        "date": "2026-05-01"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Çok sıra var.",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.muzik-dinle.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 9,
    "purchaseScore": 5,
    "textScore": 4,
    "facialScore": 11
  },
  "2D": {
    "name": "Ozan Arslan",
    "age": 20,
    "sex": "M",
    "image": "noah-garcia-20-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "ozan.arslan@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@ozanars"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Çikolata",
        "amount": "182",
        "date": "2026-05-03"
      },
      {
        "vendor": "ModaTrend",
        "item": "Kitap",
        "amount": "576",
        "date": "2026-04-24"
      },
      {
        "vendor": "SüperMarket",
        "item": "Şarj Kablosu",
        "amount": "761",
        "date": "2026-04-16"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Havaalanı çok kalabalık.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.kisa-mesaj.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "3A": {
    "name": "Elif Özdemir",
    "age": 21,
    "sex": "F",
    "image": "ava-wilson-21-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "elif.özdemir@iletinet.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@elifözd"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Güneş Gözlüğü",
        "amount": "3793",
        "date": "2026-04-26"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Su",
        "amount": "44",
        "date": "2026-05-03"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Şarj Kablosu",
        "amount": "378",
        "date": "2026-05-01"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Umarım türbülans olmaz.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.alisveris-yap.com",
      "www.video-izle.com"
    ],
    "baseScore": 7,
    "purchaseScore": 4,
    "textScore": 3,
    "facialScore": 9
  },
  "3B": {
    "name": "Tolga Doğan",
    "age": 21,
    "sex": "M",
    "image": "liam-anderson-21-M.jpg",
    "height": "185 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "tolga.doğan@coldmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@tolgadoğ"
      }
    ],
    "purchases": [
      {
        "vendor": "ModaTrend",
        "item": "Çikolata",
        "amount": "125",
        "date": "2026-04-19"
      },
      {
        "vendor": "SüperMarket",
        "item": "Kahve",
        "amount": "154",
        "date": "2026-04-18"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Kulaklık",
        "amount": "2939",
        "date": "2026-05-02"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Havaalanı çok kalabalık.",
      "Görüşürüz!"
    ],
    "websites": [
      "www.video-izle.com",
      "www.kisa-mesaj.com",
      "www.film-dizim.com"
    ],
    "baseScore": 16,
    "purchaseScore": 9,
    "textScore": 11,
    "facialScore": 18
  },
  "3C": {
    "name": "İrem Arslan",
    "age": 22,
    "sex": "F",
    "image": "charlotte-davis-22-F.jpg",
    "height": "163 cm",
    "eyes": "Kahverengi",
    "hair": "Kızıl",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "i̇rem.arslan@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇remars"
      }
    ],
    "purchases": [
      {
        "vendor": "KozmetikDünyası",
        "item": "Şarj Kablosu",
        "amount": "562",
        "date": "2026-05-05"
      },
      {
        "vendor": "ModaTrend",
        "item": "Sandviç",
        "amount": "278",
        "date": "2026-04-29"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Güneş Gözlüğü",
        "amount": "8668",
        "date": "2026-04-22"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Umarım türbülans olmaz.",
      "Çok sıra var."
    ],
    "websites": [
      "www.trend-market.com",
      "www.muzik-dinle.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 8,
    "purchaseScore": 3,
    "textScore": 5,
    "facialScore": 10
  },
  "3D": {
    "name": "Burak Aydın",
    "age": 22,
    "sex": "M",
    "image": "james-miller-22-M.jpg",
    "height": "175 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "burak.aydın@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@burakayd"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Dergi",
        "amount": "189",
        "date": "2026-05-06"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Dergi",
        "amount": "220",
        "date": "2026-04-27"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Sandviç",
        "amount": "272",
        "date": "2026-04-19"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Pasaport kontrolündeyim.",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.kisa-mesaj.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "4A": {
    "name": "Nehir Kaya",
    "age": 23,
    "sex": "F",
    "image": "amelia-brown-23-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "nehir.kaya@zposta.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@nehirkay"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Kablosu",
        "amount": "794",
        "date": "2026-04-20"
      },
      {
        "vendor": "Kahvecim",
        "item": "Çikolata",
        "amount": "235",
        "date": "2026-04-25"
      },
      {
        "vendor": "Kahvecim",
        "item": "Parfüm",
        "amount": "5039",
        "date": "2026-04-16"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Yolculuk başlıyor!",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.trend-market.com",
      "www.yemek-iste.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "4B": {
    "name": "Kaan Yıldız",
    "age": 24,
    "sex": "M",
    "image": "benjamin-lee-24-M.jpg",
    "height": "178 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "kaan.yıldız@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@kaanyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Su",
        "amount": "42",
        "date": "2026-04-20"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Tişört",
        "amount": "768",
        "date": "2026-04-19"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "173",
        "date": "2026-04-17"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Görüşürüz!",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.alisveris-yap.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "4C": {
    "name": "Ceren Kaya",
    "age": 24,
    "sex": "F",
    "image": "harper-johnson-24-F.jpg",
    "height": "173 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "ceren.kaya@iletinet.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@cerenkay"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Çikolata",
        "amount": "287",
        "date": "2026-04-26"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Güneş Gözlüğü",
        "amount": "11933",
        "date": "2026-04-21"
      },
      {
        "vendor": "YapıMarket",
        "item": "Güneş Gözlüğü",
        "amount": "4151",
        "date": "2026-05-01"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Umarım türbülans olmaz.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.trend-market.com",
      "www.muzik-dinle.com"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "4D": {
    "name": "Kerem Aydın",
    "age": 25,
    "sex": "M",
    "image": "daniel-martinez-25-M.jpg",
    "height": "188 cm",
    "eyes": "Kahverengi",
    "hair": "Kızıl",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "kerem.aydın@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@keremayd"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Kulaklık",
        "amount": "5551",
        "date": "2026-04-16"
      },
      {
        "vendor": "Kahvecim",
        "item": "Şarj Kablosu",
        "amount": "374",
        "date": "2026-04-21"
      },
      {
        "vendor": "Kahvecim",
        "item": "Parfüm",
        "amount": "5010",
        "date": "2026-04-22"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Yolculuk başlıyor!",
      "Görüşürüz!"
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.kisa-mesaj.com",
      "www.film-dizim.com"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "5A": {
    "name": "Buse Yılmaz",
    "age": 26,
    "sex": "F",
    "image": "evelyn-taylor-26-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "buse.yılmaz@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@buseyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Kablosu",
        "amount": "538",
        "date": "2026-05-06"
      },
      {
        "vendor": "ModaTrend",
        "item": "Güneş Gözlüğü",
        "amount": "8492",
        "date": "2026-05-02"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Parfüm",
        "amount": "7294",
        "date": "2026-04-21"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Valizi teslim ettim.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.ilan-bul.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "5B": {
    "name": "Kerem Aydın",
    "age": 26,
    "sex": "M",
    "image": "william-thomas-26-M.jpg",
    "height": "180 cm",
    "eyes": "Yeşil",
    "hair": "Siyah",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "kerem.aydın@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@keremayd"
      }
    ],
    "purchases": [
      {
        "vendor": "SüperMarket",
        "item": "Kulaklık",
        "amount": "2344",
        "date": "2026-05-07"
      },
      {
        "vendor": "YapıMarket",
        "item": "Dergi",
        "amount": "203",
        "date": "2026-04-18"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Su",
        "amount": "35",
        "date": "2026-04-23"
      }
    ],
    "texts": [
      "Dışarıda hava çok güzel.",
      "Uçağa biniyorum!",
      "Gelince haber ver."
    ],
    "websites": [
      "www.trend-market.com",
      "www.ornek-sosyal.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 15,
    "purchaseScore": 8,
    "textScore": 10,
    "facialScore": 17
  },
  "5C": {
    "name": "Selin Arslan",
    "age": 27,
    "sex": "F",
    "image": "abigail-jackson-27-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "selin.arslan@zposta.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@selinars"
      }
    ],
    "purchases": [
      {
        "vendor": "SüperMarket",
        "item": "Kulaklık",
        "amount": "7144",
        "date": "2026-04-25"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Sandviç",
        "amount": "229",
        "date": "2026-04-17"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Çikolata",
        "amount": "130",
        "date": "2026-04-25"
      }
    ],
    "texts": [
      "Biraz gecikebilirim.",
      "Havaalanı çok kalabalık.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.alisveris-yap.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "5D": {
    "name": "Can Özdemir",
    "age": 27,
    "sex": "M",
    "image": "alexander-white-27-M.jpg",
    "height": "183 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "can.özdemir@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@canözd"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Kulaklık",
        "amount": "3040",
        "date": "2026-04-26"
      },
      {
        "vendor": "SüperMarket",
        "item": "Kitap",
        "amount": "411",
        "date": "2026-04-18"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Tişört",
        "amount": "891",
        "date": "2026-04-19"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Bileti bulamıyorum...",
      "Görüşürüz!"
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.yemek-iste.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "6A": {
    "name": "Eda Kaya",
    "age": 28,
    "sex": "F",
    "image": "emily-harris-28-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "eda.kaya@coldmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@edakay"
      }
    ],
    "purchases": [
      {
        "vendor": "SüperMarket",
        "item": "Sandviç",
        "amount": "159",
        "date": "2026-05-03"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "457",
        "date": "2026-04-29"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Şarj Kablosu",
        "amount": "695",
        "date": "2026-04-20"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Biraz gecikebilirim.",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.video-izle.com",
      "www.kisa-mesaj.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "6B": {
    "name": "Mehmet Kılıç",
    "age": 28,
    "sex": "M",
    "image": "michael-clark-28-M.jpg",
    "height": "178 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "mehmet.kılıç@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@mehmetkıl"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Kulaklık",
        "amount": "4203",
        "date": "2026-05-03"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Parfüm",
        "amount": "6795",
        "date": "2026-04-21"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kahve",
        "amount": "154",
        "date": "2026-05-01"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Havaalanı çok kalabalık.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.muzik-dinle.com",
      "www.video-izle.com"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "6C": {
    "name": "Nehir Kara",
    "age": 29,
    "sex": "F",
    "image": "elizabeth-lewis-29-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "nehir.kara@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@nehirkar"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Sandviç",
        "amount": "271",
        "date": "2026-04-23"
      },
      {
        "vendor": "SüperMarket",
        "item": "Parfüm",
        "amount": "4380",
        "date": "2026-05-08"
      },
      {
        "vendor": "YapıMarket",
        "item": "Su",
        "amount": "32",
        "date": "2026-05-03"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Havaalanı çok kalabalık.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.trend-market.com",
      "www.film-dizim.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "6D": {
    "name": "Tolga Kılıç",
    "age": 29,
    "sex": "M",
    "image": "david-robinson-29-M.jpg",
    "height": "185 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "tolga.kılıç@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@tolgakıl"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Sandviç",
        "amount": "297",
        "date": "2026-05-04"
      },
      {
        "vendor": "SüperMarket",
        "item": "Parfüm",
        "amount": "9368",
        "date": "2026-04-20"
      },
      {
        "vendor": "ModaTrend",
        "item": "Kitap",
        "amount": "470",
        "date": "2026-04-28"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Seni bekliyorum.",
      "Görüşürüz!"
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.trend-market.com",
      "www.video-izle.com"
    ],
    "baseScore": 14,
    "purchaseScore": 8,
    "textScore": 9,
    "facialScore": 16
  },
  "7A": {
    "name": "Selin Şahin",
    "age": 30,
    "sex": "F",
    "image": "sofia-walker-30-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "selin.şahin@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@selinşah"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Çikolata",
        "amount": "182",
        "date": "2026-04-28"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Su",
        "amount": "38",
        "date": "2026-04-20"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Kahve",
        "amount": "167",
        "date": "2026-04-15"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Gelince haber ver.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.muzik-dinle.com",
      "www.film-dizim.com",
      "www.trend-market.com"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "7B": {
    "name": "Ahmet Öztürk",
    "age": 30,
    "sex": "M",
    "image": "matthew-hall-30-M.jpg",
    "height": "175 cm",
    "eyes": "Yeşil",
    "hair": "Siyah",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "ahmet.öztürk@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@ahmetözt"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Çikolata",
        "amount": "254",
        "date": "2026-04-28"
      },
      {
        "vendor": "SüperMarket",
        "item": "Kahve",
        "amount": "151",
        "date": "2026-04-19"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Şarj Kablosu",
        "amount": "494",
        "date": "2026-04-29"
      }
    ],
    "texts": [
      "Havaalanı çok kalabalık.",
      "Dışarıda hava çok güzel.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.film-dizim.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "7C": {
    "name": "Derya Yıldız",
    "age": 31,
    "sex": "F",
    "image": "chloe-allen-31-F.jpg",
    "height": "173 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "derya.yıldız@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@deryayıl"
      }
    ],
    "purchases": [
      {
        "vendor": "SüperMarket",
        "item": "Çikolata",
        "amount": "157",
        "date": "2026-04-30"
      },
      {
        "vendor": "ModaTrend",
        "item": "Tişört",
        "amount": "1212",
        "date": "2026-04-18"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Tişört",
        "amount": "1415",
        "date": "2026-04-26"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Gelince haber ver.",
      "Pasaport kontrolündeyim."
    ],
    "websites": [
      "www.trend-market.com",
      "www.ilan-bul.com",
      "www.film-dizim.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "7D": {
    "name": "Arda Çelik",
    "age": 31,
    "sex": "M",
    "image": "christopher-young-31-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "arda.çelik@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@ardaçel"
      }
    ],
    "purchases": [
      {
        "vendor": "ModaTrend",
        "item": "Parfüm",
        "amount": "4181",
        "date": "2026-04-17"
      },
      {
        "vendor": "Kahvecim",
        "item": "Su",
        "amount": "41",
        "date": "2026-04-17"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Kulaklık",
        "amount": "7524",
        "date": "2026-04-15"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Görüşürüz!",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.ornek-sosyal.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "8A": {
    "name": "İrem Arslan",
    "age": 32,
    "sex": "F",
    "image": "grace-king-32-F.jpg",
    "height": "163 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "i̇rem.arslan@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇remars"
      }
    ],
    "purchases": [
      {
        "vendor": "KozmetikDünyası",
        "item": "Güneş Gözlüğü",
        "amount": "5762",
        "date": "2026-04-18"
      },
      {
        "vendor": "SüperMarket",
        "item": "Kulaklık",
        "amount": "7147",
        "date": "2026-05-07"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Su",
        "amount": "50",
        "date": "2026-05-02"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Havaalanı çok kalabalık.",
      "Gelince haber ver."
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.ornek-sosyal.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "8B": {
    "name": "Berke Şahin",
    "age": 32,
    "sex": "M",
    "image": "andrew-scott-32-M.jpg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "berke.şahin@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@berkeşah"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Güneş Gözlüğü",
        "amount": "7270",
        "date": "2026-04-16"
      },
      {
        "vendor": "SüperMarket",
        "item": "Güneş Gözlüğü",
        "amount": "5084",
        "date": "2026-04-30"
      },
      {
        "vendor": "YapıMarket",
        "item": "Kahve",
        "amount": "141",
        "date": "2026-04-26"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Seni bekliyorum.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.alisveris-yap.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "8C": {
    "name": "İrem Çelik",
    "age": 33,
    "sex": "F",
    "image": "lily-green-33-F.jpg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Kızıl",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "i̇rem.çelik@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇remçel"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Çikolata",
        "amount": "160",
        "date": "2026-04-19"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Sandviç",
        "amount": "227",
        "date": "2026-05-04"
      },
      {
        "vendor": "YapıMarket",
        "item": "Şarj Kablosu",
        "amount": "700",
        "date": "2026-04-25"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Seni bekliyorum.",
      "Görüşürüz!"
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.ornek-sosyal.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "8D": {
    "name": "Ozan Arslan",
    "age": 33,
    "sex": "M",
    "image": "joshua-adams-33-M.jpg",
    "height": "188 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "ozan.arslan@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@ozanars"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Sandviç",
        "amount": "247",
        "date": "2026-04-18"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Kitap",
        "amount": "445",
        "date": "2026-05-07"
      },
      {
        "vendor": "ModaTrend",
        "item": "Parfüm",
        "amount": "3283",
        "date": "2026-04-19"
      }
    ],
    "texts": [
      "Pasaport kontrolündeyim.",
      "Havaalanı çok kalabalık.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.kisa-mesaj.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "9A": {
    "name": "İrem Çetin",
    "age": 34,
    "sex": "F",
    "image": "zoe-baker-34-F.jpg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "i̇rem.çetin@coldmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇remçet"
      }
    ],
    "purchases": [
      {
        "vendor": "ModaTrend",
        "item": "Tişört",
        "amount": "671",
        "date": "2026-04-26"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Dergi",
        "amount": "297",
        "date": "2026-04-19"
      },
      {
        "vendor": "ModaTrend",
        "item": "Dergi",
        "amount": "288",
        "date": "2026-04-24"
      }
    ],
    "texts": [
      "Görüşürüz!",
      "Valizi teslim ettim.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.muzik-dinle.com",
      "www.trend-market.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "9B": {
    "name": "Mehmet Aydın",
    "age": 34,
    "sex": "M",
    "image": "ryan-nelson-34-M.jpg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "mehmet.aydın@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@mehmetayd"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Parfüm",
        "amount": "5164",
        "date": "2026-04-30"
      },
      {
        "vendor": "ModaTrend",
        "item": "Kitap",
        "amount": "332",
        "date": "2026-04-17"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Kahve",
        "amount": "140",
        "date": "2026-05-04"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Pasaport kontrolündeyim.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.kisa-mesaj.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 12,
    "purchaseScore": 6,
    "textScore": 7,
    "facialScore": 14
  },
  "9C": {
    "name": "Defne Kara",
    "age": 35,
    "sex": "F",
    "image": "natalie-carter-35-F.jpg",
    "height": "170 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "defne.kara@ymail.net"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@defnekar"
      }
    ],
    "purchases": [
      {
        "vendor": "ModaTrend",
        "item": "Sandviç",
        "amount": "211",
        "date": "2026-05-01"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Güneş Gözlüğü",
        "amount": "14364",
        "date": "2026-05-01"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kitap",
        "amount": "435",
        "date": "2026-04-22"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Çok sıra var.",
      "Seni bekliyorum."
    ],
    "websites": [
      "www.trend-market.com",
      "www.video-izle.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "9D": {
    "name": "Deniz Yıldız",
    "age": 36,
    "sex": "M",
    "image": "kevin-mitchell-36-M.jpg",
    "height": "185 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "deniz.yıldız@coldmail.com"
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
        "item": "Tişört",
        "amount": "1445",
        "date": "2026-04-28"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Şarj Kablosu",
        "amount": "740",
        "date": "2026-05-06"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Tişört",
        "amount": "831",
        "date": "2026-05-08"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Havaalanı çok kalabalık.",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.muzik-dinle.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 11,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 13
  },
  "10A": {
    "name": "Zeynep Yıldız",
    "age": 36,
    "sex": "F",
    "image": "hannah-phillips-36-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "zeynep.yıldız@zposta.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@zeynepyıl"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Dergi",
        "amount": "267",
        "date": "2026-04-19"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Tişört",
        "amount": "1138",
        "date": "2026-04-18"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Kahve",
        "amount": "120",
        "date": "2026-04-25"
      }
    ],
    "texts": [
      "Biraz gecikebilirim.",
      "Havaalanı çok kalabalık.",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.trend-market.com",
      "www.ilan-bul.com"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "10B": {
    "name": "Ali Çelik",
    "age": 37,
    "sex": "M",
    "image": "brandon-evans-37-M.jpg",
    "height": "175 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "ali.çelik@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@aliçel"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Kablosu",
        "amount": "700",
        "date": "2026-04-20"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Dergi",
        "amount": "214",
        "date": "2026-05-09"
      },
      {
        "vendor": "YapıMarket",
        "item": "Dergi",
        "amount": "258",
        "date": "2026-05-08"
      }
    ],
    "texts": [
      "Görüşürüz!",
      "Bileti bulamıyorum...",
      "Umarım türbülans olmaz."
    ],
    "websites": [
      "www.video-izle.com",
      "www.trend-market.com",
      "www.alisveris-yap.com"
    ],
    "baseScore": 16,
    "purchaseScore": 9,
    "textScore": 11,
    "facialScore": 18
  },
  "10C": {
    "name": "Melis Özdemir",
    "age": 38,
    "sex": "F",
    "image": "victoria-campbell-38-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "melis.özdemir@zposta.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@melisözd"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Çikolata",
        "amount": "279",
        "date": "2026-04-18"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Kulaklık",
        "amount": "6632",
        "date": "2026-04-28"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Su",
        "amount": "33",
        "date": "2026-04-20"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Umarım türbülans olmaz.",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.trend-market.com",
      "www.yemek-iste.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "10D": {
    "name": "Ozan Kaya",
    "age": 40,
    "sex": "M",
    "image": "tyler-parker-40-M.jpg",
    "height": "183 cm",
    "eyes": "Mavi",
    "hair": "Gri",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "ozan.kaya@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@ozankay"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Parfüm",
        "amount": "7507",
        "date": "2026-04-27"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Kulaklık",
        "amount": "4888",
        "date": "2026-04-15"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Çikolata",
        "amount": "198",
        "date": "2026-04-24"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Pasaport kontrolündeyim.",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.kisa-mesaj.com",
      "www.film-dizim.com",
      "www.film-dizim.com"
    ],
    "baseScore": 13,
    "purchaseScore": 7,
    "textScore": 8,
    "facialScore": 15
  },
  "11A": {
    "name": "Defne Aslan",
    "age": 39,
    "sex": "F",
    "image": "madison-murphy-39-F.jpg",
    "height": "165 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "defne.aslan@ymail.net"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@defneasl"
      }
    ],
    "purchases": [
      {
        "vendor": "SüperMarket",
        "item": "Tişört",
        "amount": "613",
        "date": "2026-04-19"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Dergi",
        "amount": "203",
        "date": "2026-04-22"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Sandviç",
        "amount": "188",
        "date": "2026-05-08"
      }
    ],
    "texts": [
      "Umarım türbülans olmaz.",
      "Gelince haber ver.",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.trend-market.com",
      "www.film-dizim.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "11B": {
    "name": "Elif Kılıç",
    "age": 41,
    "sex": "F",
    "image": "jessica-rivera-41-F.jpg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "elif.kılıç@coldmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@elifkıl"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Çikolata",
        "amount": "285",
        "date": "2026-04-24"
      },
      {
        "vendor": "YapıMarket",
        "item": "Güneş Gözlüğü",
        "amount": "10293",
        "date": "2026-04-24"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Kulaklık",
        "amount": "4473",
        "date": "2026-04-20"
      }
    ],
    "texts": [
      "Biraz gecikebilirim.",
      "Umarım türbülans olmaz.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.trend-market.com",
      "www.muzik-dinle.com",
      "www.video-izle.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "11C": {
    "name": "Cem Kılıç",
    "age": 41,
    "sex": "M",
    "image": "jason-wright-41-M.jpg",
    "height": "180 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "cem.kılıç@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@cemkıl"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Güneş Gözlüğü",
        "amount": "6945",
        "date": "2026-04-25"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kulaklık",
        "amount": "2581",
        "date": "2026-04-18"
      },
      {
        "vendor": "ModaTrend",
        "item": "Kulaklık",
        "amount": "4394",
        "date": "2026-05-02"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Bileti bulamıyorum...",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.ornek-sosyal.com",
      "www.yemek-iste.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 10,
    "purchaseScore": 5,
    "textScore": 6,
    "facialScore": 12
  },
  "11D": {
    "name": "Tolga Özdemir",
    "age": 42,
    "sex": "M",
    "image": "robert-torres-42-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "tolga.özdemir@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@tolgaözd"
      }
    ],
    "purchases": [
      {
        "vendor": "KozmetikDünyası",
        "item": "Tişört",
        "amount": "1259",
        "date": "2026-05-03"
      },
      {
        "vendor": "YapıMarket",
        "item": "Dergi",
        "amount": "177",
        "date": "2026-05-05"
      },
      {
        "vendor": "SüperMarket",
        "item": "Parfüm",
        "amount": "6132",
        "date": "2026-04-27"
      }
    ],
    "texts": [
      "Seni bekliyorum.",
      "Bileti bulamıyorum...",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.video-izle.com",
      "www.muzik-dinle.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 9,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 11
  },
  "12A": {
    "name": "İrem Kaya",
    "age": 44,
    "sex": "F",
    "image": "nicole-stewart-44-F.jpg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "i̇rem.kaya@tmail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇remkay"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Tişört",
        "amount": "834",
        "date": "2026-04-17"
      },
      {
        "vendor": "Kahvecim",
        "item": "Sandviç",
        "amount": "252",
        "date": "2026-04-18"
      },
      {
        "vendor": "Kahvecim",
        "item": "Sandviç",
        "amount": "290",
        "date": "2026-04-27"
      }
    ],
    "texts": [
      "Valizi teslim ettim.",
      "Gelince haber ver.",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.ilan-bul.com",
      "www.alisveris-yap.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 6,
    "purchaseScore": 2,
    "textScore": 3,
    "facialScore": 8
  },
  "12B": {
    "name": "Buse Şahin",
    "age": 45,
    "sex": "F",
    "image": "jennifer-collins-45-F.jpg",
    "height": "163 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "buse.şahin@ymail.net"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@buseşah"
      }
    ],
    "purchases": [
      {
        "vendor": "GiyimMağazası",
        "item": "Dergi",
        "amount": "222",
        "date": "2026-04-19"
      },
      {
        "vendor": "SüperMarket",
        "item": "Kahve",
        "amount": "129",
        "date": "2026-05-04"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Su",
        "amount": "46",
        "date": "2026-04-15"
      }
    ],
    "texts": [
      "Bileti bulamıyorum...",
      "Bileti bulamıyorum...",
      "Yolculuk başlıyor!"
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.kisa-mesaj.com",
      "www.muzik-dinle.com"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "12C": {
    "name": "Ahmet Kara",
    "age": 45,
    "sex": "M",
    "image": "steven-sanchez-45-M.jpg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Siyah",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "ahmet.kara@zposta.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@ahmetkar"
      }
    ],
    "purchases": [
      {
        "vendor": "KozmetikDünyası",
        "item": "Şarj Kablosu",
        "amount": "590",
        "date": "2026-04-24"
      },
      {
        "vendor": "SüperMarket",
        "item": "Kitap",
        "amount": "385",
        "date": "2026-05-08"
      },
      {
        "vendor": "Kahvecim",
        "item": "Kitap",
        "amount": "410",
        "date": "2026-04-21"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Biraz gecikebilirim.",
      "Biraz gecikebilirim."
    ],
    "websites": [
      "www.film-dizim.com",
      "www.trend-market.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 8,
    "purchaseScore": 4,
    "textScore": 5,
    "facialScore": 10
  },
  "12D": {
    "name": "Cem Çetin",
    "age": 58,
    "sex": "M",
    "image": "george-patterson-58-M.jpg",
    "height": "185 cm",
    "eyes": "Kahverengi",
    "hair": "White",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "cem.çetin@hizlimail.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@cemçet"
      }
    ],
    "purchases": [
      {
        "vendor": "Kahvecim",
        "item": "Güneş Gözlüğü",
        "amount": "7237",
        "date": "2026-05-06"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Tişört",
        "amount": "664",
        "date": "2026-04-15"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Tişört",
        "amount": "961",
        "date": "2026-05-02"
      }
    ],
    "texts": [
      "Görüşürüz!",
      "Gelince haber ver.",
      "Uçağa biniyorum!"
    ],
    "websites": [
      "www.trend-market.com",
      "www.kisa-mesaj.com",
      "www.video-izle.com"
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
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "can.demir@tmail.com"
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
        "item": "Filtre Kahve",
        "amount": "145",
        "date": "2026-04-16"
      },
      {
        "vendor": "SüperMarket",
        "item": "Su",
        "amount": "35",
        "date": "2026-04-28"
      }
    ],
    "texts": [
      "Planı unutma",
      "Her şey hazır mı?",
      "Kimseye söyleme"
    ],
    "websites": [
      "www.trend-market.com",
      "www.muzik-dinle.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 42,
    "purchaseScore": 8,
    "textScore": 55,
    "facialScore": 52,
    "isAlex": true
  },
  "13C": {
    "name": "İnci Doğan",
    "age": 47,
    "sex": "F",
    "image": "karen-price-47-F.jpg",
    "height": "165 cm",
    "eyes": "Yeşil",
    "hair": "Sarı",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "i̇nci.doğan@ymail.net"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@i̇ncidoğ"
      }
    ],
    "purchases": [
      {
        "vendor": "YapıMarket",
        "item": "Çikolata",
        "amount": "241",
        "date": "2026-05-07"
      },
      {
        "vendor": "KitapDünyası",
        "item": "Tişört",
        "amount": "1485",
        "date": "2026-04-29"
      },
      {
        "vendor": "SüperMarket",
        "item": "Sandviç",
        "amount": "194",
        "date": "2026-04-24"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Havaalanı çok kalabalık.",
      "Valizi teslim ettim."
    ],
    "websites": [
      "www.muzik-dinle.com",
      "www.ilan-bul.com",
      "www.ornek-sosyal.com"
    ],
    "baseScore": 4,
    "purchaseScore": 1,
    "textScore": 2,
    "facialScore": 6
  },
  "13D": {
    "name": "Ali Aydın",
    "age": 48,
    "sex": "M",
    "image": "mark-foster-48-M.jpg",
    "height": "175 cm",
    "eyes": "Yeşil",
    "hair": "Gri",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "ali.aydın@postakutum.tr"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@aliayd"
      }
    ],
    "purchases": [
      {
        "vendor": "TeknoMerkez",
        "item": "Dergi",
        "amount": "172",
        "date": "2026-04-24"
      },
      {
        "vendor": "Kahvecim",
        "item": "Sandviç",
        "amount": "245",
        "date": "2026-04-24"
      },
      {
        "vendor": "GiyimMağazası",
        "item": "Sandviç",
        "amount": "274",
        "date": "2026-04-16"
      }
    ],
    "texts": [
      "Uçağa biniyorum!",
      "Biraz gecikebilirim.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.kisa-mesaj.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 5,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 7
  },
  "14A": {
    "name": "Eda Aslan",
    "age": 50,
    "sex": "F",
    "image": "patricia-morgan-50-F.jpg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Gri",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "eda.aslan@zposta.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@edaasl"
      }
    ],
    "purchases": [
      {
        "vendor": "ModaTrend",
        "item": "Kitap",
        "amount": "519",
        "date": "2026-04-17"
      },
      {
        "vendor": "ModaTrend",
        "item": "Su",
        "amount": "29",
        "date": "2026-04-23"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Kulaklık",
        "amount": "5284",
        "date": "2026-04-21"
      }
    ],
    "texts": [
      "Yolculuk başlıyor!",
      "Seni bekliyorum.",
      "Havaalanı çok kalabalık."
    ],
    "websites": [
      "www.yemek-iste.com",
      "www.trend-market.com",
      "www.kisa-mesaj.com"
    ],
    "baseScore": 3,
    "purchaseScore": 1,
    "textScore": 1,
    "facialScore": 5
  },
  "14B": {
    "name": "Ahmet Aydın",
    "age": 50,
    "sex": "M",
    "image": "richard-hayes-50-M.jpg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Gri",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "ahmet.aydın@iletinet.com"
    ],
    "socials": [
      {
        "platform": "tiktok",
        "handle": "@ahmetayd"
      }
    ],
    "purchases": [
      {
        "vendor": "KitapDünyası",
        "item": "Tişört",
        "amount": "1377",
        "date": "2026-05-02"
      },
      {
        "vendor": "TeknoMerkez",
        "item": "Şarj Kablosu",
        "amount": "675",
        "date": "2026-04-30"
      },
      {
        "vendor": "Kahvecim",
        "item": "Güneş Gözlüğü",
        "amount": "3186",
        "date": "2026-05-05"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Gelince haber ver.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.trend-market.com",
      "www.ilan-bul.com",
      "www.yemek-iste.com"
    ],
    "baseScore": 7,
    "purchaseScore": 3,
    "textScore": 4,
    "facialScore": 9
  },
  "14C": {
    "name": "Nehir Çelik",
    "age": 52,
    "sex": "F",
    "image": "linda-russell-52-F.jpg",
    "height": "165 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "nehir.çelik@coldmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@nehirçel"
      }
    ],
    "purchases": [
      {
        "vendor": "SüperMarket",
        "item": "Şarj Kablosu",
        "amount": "601",
        "date": "2026-04-20"
      },
      {
        "vendor": "KozmetikDünyası",
        "item": "Şarj Kablosu",
        "amount": "497",
        "date": "2026-04-22"
      },
      {
        "vendor": "ModaTrend",
        "item": "Kahve",
        "amount": "149",
        "date": "2026-05-03"
      }
    ],
    "texts": [
      "Çok sıra var.",
      "Dışarıda hava çok güzel.",
      "Bileti bulamıyorum..."
    ],
    "websites": [
      "www.trend-market.com",
      "www.film-dizim.com",
      "www.video-izle.com"
    ],
    "baseScore": 4,
    "purchaseScore": 2,
    "textScore": 2,
    "facialScore": 6
  },
  "14D": {
    "name": "Elif Kara",
    "age": 55,
    "sex": "F",
    "image": "dorothy-howard-55-F.jpg",
    "height": "168 cm",
    "eyes": "Kahverengi",
    "hair": "Gri",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "elif.kara@tmail.com"
    ],
    "socials": [
      {
        "platform": "insta",
        "handle": "@elifkar"
      }
    ],
    "purchases": [
      {
        "vendor": "KozmetikDünyası",
        "item": "Sandviç",
        "amount": "260",
        "date": "2026-04-19"
      },
      {
        "vendor": "YapıMarket",
        "item": "Kahve",
        "amount": "177",
        "date": "2026-04-23"
      },
      {
        "vendor": "YapıMarket",
        "item": "Tişört",
        "amount": "1216",
        "date": "2026-04-26"
      }
    ],
    "texts": [
      "Gelince haber ver.",
      "Gelince haber ver.",
      "Dışarıda hava çok güzel."
    ],
    "websites": [
      "www.alisveris-yap.com",
      "www.trend-market.com",
      "www.kisa-mesaj.com"
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
