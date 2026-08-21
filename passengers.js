// Eğitim amaçlı, Türkiye'ye uyarlanmış Uçuş 67 Yolcu Verileri
// 13B = Can Demir (arkadaş, şüpheli mesajlar)
// 1D = Murat Yılmaz (gerçek suçlu, şüpheli alışverişler)

const passengerData = {
  "1A": {
    "name": "Merve Kılıç",
    "age": 16,
    "sex": "F",
    "image": "1A_Merve_Kilic_Kadin_16.jpeg",
    "height": "163 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "merve_kilic@example.net"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@merve_kilic67"
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
      "www.dijital-sayfalar.example",
      "www.okulcantasi-dunyasi.example.com"
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
    "image": "1B_Asli_Arslan_Kadin_17.jpeg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "asli_arslan@example.com"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@asli_arslan63"
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
      "www.bilim-ve-doga.example.net",
      "www.macera-oyunlari.example.org"
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
    "image": "1C_Zeynep_Sahin_Kadin_18.jpeg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "zeynep_sahin@example.com"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@zeynep_sahin79"
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
      "www.gezgin-rotalar.test",
      "www.dijital-sayfalar.example"
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
    "image": "1D_Murat_Yilmaz_Erkek_18.jpeg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "murat_yilmaz@example.net"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@murat_yilmaz47"
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
      "www.oyun-gemisi.test",
      "www.macera-oyunlari.example.org"
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
    "image": "2A_Asli_Kaya_Kadin_19.jpeg",
    "height": "160 cm",
    "eyes": "Kahverengi",
    "hair": "Pembe (Boyalı)",
    "hometown": "İstanbul",
    "passport": "Türkiye",
    "emails": [
      "asli_kaya@example.org"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@asli_kaya52"
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
      "www.sinema-perdesi.example.com",
      "www.okulcantasi-dunyasi.example.com"
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
    "image": "2B_Mert_Celik_Erkek_19.jpeg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "mert_celik@test"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@mert_celik15"
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
      "www.macera-oyunlari.example.org",
      "www.oyun-gemisi.test"
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
    "image": "2C_Eda_Ozturk_Kadin_20.jpeg",
    "height": "165 cm",
    "eyes": "Mavi",
    "hair": "Turkuaz (Boyalı)",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "eda_ozturk@example.org"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@eda_ozturk57"
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
      "www.gezgin-rotalar.test",
      "www.gezgin-rotalar.test"
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
    "image": "2D_Arda_Ozturk_Erkek_20.jpeg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "arda_ozturk@example.com"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@arda_ozturk80"
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
      "www.dijital-sayfalar.example",
      "www.dijital-sayfalar.example"
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
    "image": "3A_Inci_Aydin_Kadin_21.jpeg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "inci_aydin@example.net"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@inci_aydin50"
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
      "www.sinema-perdesi.example.com",
      "www.gunluk-haberler.example.net"
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
    "image": "3B_Mehmet_Kaya_Erkek_21.jpeg",
    "height": "185 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "mehmet_kaya@example.net"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@mehmet_kaya23"
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
      "www.gunluk-haberler.example.net",
      "www.gezgin-rotalar.test"
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
    "image": "3C_Irem_Dogan_Kadin_22.jpeg",
    "height": "163 cm",
    "eyes": "Kahverengi",
    "hair": "Kızıl",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "irem_dogan@example.net"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@irem_dogan26"
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
      "www.sinema-perdesi.example.com",
      "www.sinema-perdesi.example.com"
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
    "image": "3D_Mehmet_Ozdemir_Erkek_22.jpeg",
    "height": "175 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "mehmet_ozdemir@example.net"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@mehmet_ozdemir92"
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
      "www.gunluk-haberler.example.net",
      "www.okulcantasi-dunyasi.example.com"
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
    "image": "4A_Selin_Aydin_Kadin_23.jpeg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "selin_aydin@example.com"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@selin_aydin26"
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
      "www.bilim-ve-doga.example.net",
      "www.gunluk-haberler.example.net"
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
    "image": "4B_Ozan_Kara_Erkek_24.jpeg",
    "height": "178 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "ozan_kara@test"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@ozan_kara54"
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
      "www.oyun-gemisi.test",
      "www.gezgin-rotalar.test"
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
    "image": "4C_Elif_Ozturk_Kadin_24.jpeg",
    "height": "173 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "elif_ozturk@example.org"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@elif_ozturk59"
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
      "www.gezgin-rotalar.test",
      "www.dijital-sayfalar.example"
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
    "image": "4D_Kaan_Aslan_Erkek_25.jpeg",
    "height": "188 cm",
    "eyes": "Kahverengi",
    "hair": "Kızıl",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "kaan_aslan@example.net"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@kaan_aslan75"
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
      "www.bilim-ve-doga.example.net",
      "www.sinema-perdesi.example.com"
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
    "image": "5A_Busra_Cetin_Kadin_26.jpeg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "busra_cetin@example.com"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@busra_cetin59"
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
      "www.macera-oyunlari.example.org",
      "www.oyun-gemisi.test"
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
    "image": "5B_Arda_Kaya_Erkek_26.jpeg",
    "height": "180 cm",
    "eyes": "Yeşil",
    "hair": "Siyah",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "arda_kaya@example.com"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@arda_kaya1"
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
      "www.okulcantasi-dunyasi.example.com",
      "www.okulcantasi-dunyasi.example.com"
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
    "image": "5C_Ayse_Celik_Kadin_27.jpeg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "ayse_celik@example.net"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@ayse_celik52"
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
      "www.gunluk-haberler.example.net",
      "www.bilim-ve-doga.example.net"
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
    "image": "5D_Tolga_Celik_Erkek_27.jpeg",
    "height": "183 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "tolga_celik@example.net"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@tolga_celik39"
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
      "www.oyun-gemisi.test",
      "www.gezgin-rotalar.test"
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
    "image": "6A_Buse_Cetin_Kadin_28.jpeg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "buse_cetin@example.net"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@buse_cetin80"
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
      "www.gezgin-rotalar.test",
      "www.sinema-perdesi.example.com"
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
    "image": "6B_Berke_Kaya_Erkek_28.jpeg",
    "height": "178 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "berke_kaya@example.org"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@berke_kaya93"
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
      "www.oyun-gemisi.test",
      "www.gezgin-rotalar.test"
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
    "image": "6C_Selin_Celik_Kadin_29.jpeg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Sarı",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "selin_celik@example.org"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@selin_celik36"
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
      "www.gunluk-haberler.example.net",
      "www.bilim-ve-doga.example.net"
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
    "image": "6D_Berke_Aslan_Erkek_29.jpeg",
    "height": "185 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "berke_aslan@example.net"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@berke_aslan28"
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
      "www.gezgin-rotalar.test",
      "www.oyun-gemisi.test"
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
    "image": "7A_Irem_Arslan_Kadin_30.jpeg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "irem_arslan@example.org"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@irem_arslan89"
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
      "www.oyun-gemisi.test",
      "www.oyun-gemisi.test"
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
    "image": "7B_Mehmet_Dogan_Erkek_30.jpeg",
    "height": "175 cm",
    "eyes": "Yeşil",
    "hair": "Siyah",
    "hometown": "Samsun",
    "passport": "Türkiye",
    "emails": [
      "mehmet_dogan@example.net"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@mehmet_dogan60"
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
      "www.bilim-ve-doga.example.net",
      "www.bilim-ve-doga.example.net"
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
    "image": "7C_Defne_Aslan_Kadin_31.jpeg",
    "height": "173 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "defne_aslan@test"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@defne_aslan87"
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
      "www.gunluk-haberler.example.net",
      "www.gunluk-haberler.example.net"
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
    "image": "7D_Kerem_Celik_Erkek_31.jpeg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "kerem_celik@example.net"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@kerem_celik70"
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
      "www.macera-oyunlari.example.org",
      "www.sinema-perdesi.example.com"
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
    "image": "8A_Buse_Demir_Kadin_32.jpeg",
    "height": "163 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "buse_demir@test"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@buse_demir29"
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
      "www.okulcantasi-dunyasi.example.com",
      "www.sinema-perdesi.example.com"
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
    "image": "8B_Kerem_Cetin_Erkek_32.jpeg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "kerem_cetin@example.org"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@kerem_cetin26"
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
      "www.dijital-sayfalar.example",
      "www.dijital-sayfalar.example"
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
    "image": "8C_Busra_Yilmaz_Kadin_33.jpeg",
    "height": "168 cm",
    "eyes": "Yeşil",
    "hair": "Kızıl",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "busra_yilmaz@example.org"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@busra_yilmaz18"
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
      "www.okulcantasi-dunyasi.example.com",
      "www.dijital-sayfalar.example"
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
    "image": "8D_Kerem_Yilmaz_Erkek_33.jpeg",
    "height": "188 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "kerem_yilmaz@example.com"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@kerem_yilmaz52"
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
      "www.gezgin-rotalar.test",
      "www.bilim-ve-doga.example.net"
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
    "image": "9A_Eda_Dogan_Kadin_34.jpeg",
    "height": "165 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "eda_dogan@example.org"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@eda_dogan66"
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
      "www.gunluk-haberler.example.net",
      "www.dijital-sayfalar.example"
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
    "image": "9B_Berke_Cetin_Erkek_34.jpeg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "berke_cetin@test"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@berke_cetin42"
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
      "www.gezgin-rotalar.test",
      "www.oyun-gemisi.test"
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
    "image": "9C_Busra_Sahin_Kadin_35.jpeg",
    "height": "170 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "busra_sahin@test"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@busra_sahin6"
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
      "www.macera-oyunlari.example.org",
      "www.okulcantasi-dunyasi.example.com"
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
    "image": "9D_Baris_Aydin_Erkek_36.jpeg",
    "height": "185 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "baris_aydin@example.com"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@baris_aydin55"
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
      "www.sinema-perdesi.example.com",
      "www.sinema-perdesi.example.com"
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
    "image": "10A_Busra_Arslan_Kadin_36.jpeg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Kahverengi",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "busra_arslan@example.org"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@busra_arslan97"
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
      "www.oyun-gemisi.test",
      "www.oyun-gemisi.test"
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
    "image": "10B_Mehmet_Celik_Erkek_37.jpeg",
    "height": "175 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "mehmet_celik@example.net"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@mehmet_celik61"
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
      "www.gunluk-haberler.example.net",
      "www.bilim-ve-doga.example.net"
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
    "image": "10C_Defne_Cetin_Kadin_38.jpeg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Kızıl",
    "hometown": "Antalya",
    "passport": "Türkiye",
    "emails": [
      "defne_cetin@example.org"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@defne_cetin61"
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
      "www.dijital-sayfalar.example",
      "www.okulcantasi-dunyasi.example.com"
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
    "image": "10D_Emre_Dogan_Erkek_40.jpeg",
    "height": "183 cm",
    "eyes": "Mavi",
    "hair": "Gri",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "emre_dogan@example.org"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@emre_dogan37"
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
      "www.okulcantasi-dunyasi.example.com",
      "www.okulcantasi-dunyasi.example.com"
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
    "image": "11A_Melis_Yildiz_Kadin_39.jpeg",
    "height": "165 cm",
    "eyes": "Ela",
    "hair": "Sarı",
    "hometown": "Denizli",
    "passport": "Türkiye",
    "emails": [
      "melis_yildiz@example.org"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@melis_yildiz43"
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
      "www.gezgin-rotalar.test",
      "www.sinema-perdesi.example.com"
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
    "image": "11B_Asli_Kaya_Kadin_41.jpeg",
    "height": "170 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "asli_kaya@example.org"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@asli_kaya75"
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
      "www.sinema-perdesi.example.com",
      "www.gunluk-haberler.example.net"
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
    "image": "11C_Mert_Celik_Erkek_41.jpeg",
    "height": "180 cm",
    "eyes": "Yeşil",
    "hair": "Kahverengi",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "mert_celik@example.org"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@mert_celik50"
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
      "www.bilim-ve-doga.example.net",
      "www.gezgin-rotalar.test"
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
    "image": "11D_Tolga_Yildiz_Erkek_42.jpeg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "tolga_yildiz@test"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@tolga_yildiz11"
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
      "www.dijital-sayfalar.example",
      "www.bilim-ve-doga.example.net"
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
    "image": "12A_Asli_Kara_Kadin_44.jpeg",
    "height": "168 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Bursa",
    "passport": "Türkiye",
    "emails": [
      "asli_kara@example.net"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@asli_kara29"
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
      "www.dijital-sayfalar.example",
      "www.oyun-gemisi.test"
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
    "image": "12B_Buse_Ozturk_Kadin_45.jpeg",
    "height": "163 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "İzmir",
    "passport": "Türkiye",
    "emails": [
      "buse_ozturk@example.org"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@buse_ozturk60"
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
      "www.gunluk-haberler.example.net",
      "www.oyun-gemisi.test"
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
    "image": "12C_Deniz_Demir_Erkek_45.jpeg",
    "height": "178 cm",
    "eyes": "Mavi",
    "hair": "Siyah",
    "hometown": "Konya",
    "passport": "Türkiye",
    "emails": [
      "deniz_demir@example.com"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@deniz_demir18"
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
      "www.macera-oyunlari.example.org",
      "www.bilim-ve-doga.example.net"
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
    "image": "12D_Can_Kara_Erkek_58.jpeg",
    "height": "185 cm",
    "eyes": "Kahverengi",
    "hair": "White",
    "hometown": "Mersin",
    "passport": "Türkiye",
    "emails": [
      "can_kara@example.org"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@can_kara77"
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
      "www.dijital-sayfalar.example",
      "www.sinema-perdesi.example.com"
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
    "image": "13B_Can_Demir_Erkek_23.jpeg",
    "height": "180 cm",
    "eyes": "Mavi",
    "hair": "Sarı",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "can_demir@example.net"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@can_demir56"
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
      "www.oyun-gemisi.test",
      "www.gezgin-rotalar.test"
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
    "image": "13C_Buse_Aslan_Kadin_47.jpeg",
    "height": "165 cm",
    "eyes": "Yeşil",
    "hair": "Sarı",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "buse_aslan@test"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@buse_aslan51"
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
      "www.gunluk-haberler.example.net",
      "www.gezgin-rotalar.test"
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
    "image": "13D_Burak_Yilmaz_Erkek_48.jpeg",
    "height": "175 cm",
    "eyes": "Yeşil",
    "hair": "Gri",
    "hometown": "Ankara",
    "passport": "Türkiye",
    "emails": [
      "burak_yilmaz@example.org"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@burak_yilmaz14"
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
      "www.macera-oyunlari.example.org",
      "www.gezgin-rotalar.test"
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
    "image": "14A_Selin_Aslan_Kadin_50.jpeg",
    "height": "163 cm",
    "eyes": "Mavi",
    "hair": "Gri",
    "hometown": "Adana",
    "passport": "Türkiye",
    "emails": [
      "selin_aslan@test"
    ],
    "socials": [
      {
        "platform": "OyunÇemberi",
        "handle": "@selin_aslan52"
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
      "www.okulcantasi-dunyasi.example.com",
      "www.macera-oyunlari.example.org"
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
    "image": "14B_Emre_Yilmaz_Erkek_50.jpeg",
    "height": "183 cm",
    "eyes": "Kahverengi",
    "hair": "Gri",
    "hometown": "Eskişehir",
    "passport": "Türkiye",
    "emails": [
      "emre_yilmaz@test"
    ],
    "socials": [
      {
        "platform": "FikirAğı",
        "handle": "@emre_yilmaz8"
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
      "www.gezgin-rotalar.test",
      "www.gezgin-rotalar.test"
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
    "image": "14C_Nehir_Cetin_Kadin_52.jpeg",
    "height": "165 cm",
    "eyes": "Ela",
    "hair": "Kahverengi",
    "hometown": "Trabzon",
    "passport": "Türkiye",
    "emails": [
      "nehir_cetin@example.com"
    ],
    "socials": [
      {
        "platform": "FotoKare",
        "handle": "@nehir_cetin73"
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
      "www.bilim-ve-doga.example.net",
      "www.macera-oyunlari.example.org"
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
    "image": "14D_Nehir_Celik_Kadin_55.jpeg",
    "height": "168 cm",
    "eyes": "Kahverengi",
    "hair": "Gri",
    "hometown": "Gaziantep",
    "passport": "Türkiye",
    "emails": [
      "nehir_celik@example.org"
    ],
    "socials": [
      {
        "platform": "KısaVideoApp",
        "handle": "@nehir_celik58"
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
      "www.bilim-ve-doga.example.net",
      "www.gezgin-rotalar.test"
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
