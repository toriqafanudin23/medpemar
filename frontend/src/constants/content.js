// Learning content data
export const SHAPES = [
  {
    id: 'kubus',
    name: 'Kubus',
    description: 'Bangun ruang tiga dimensi yang dibatasi oleh enam bidang sisi berbentuk persegi kongruen.',
    formula: {
      volume: 'V = r \\times r \\times r',
      surface: 'L = 6 \\times r^{2}'
    },
    properties: [
      '6 sisi berbentuk persegi yang kongruen',
      '12 rusuk dengan panjang sama',
      '8 titik sudut',
      'Semua sudut siku-siku (90°)'
    ]
  },
  {
    id: 'balok',
    name: 'Balok',
    description: 'Bangun ruang dengan 6 sisi berbentuk persegi panjang',
    formula: {
      volume: 'V = p \\times l \\times t',
      surface: 'L = 2(p \\times l + p \\times t + l \\times t)'
    },
    properties: [
      '6 sisi berbentuk persegi panjang',
      '12 rusuk (4 rusuk panjang, 4 rusuk lebar, 4 rusuk tinggi)',
      '8 titik sudut',
      'Sisi berhadapan kongruen'
    ]
  },
  {
    id: 'prisma',
    name: 'Prisma',
    description: 'Bangun ruang yang memiliki dua alas berbentuk segi-n yang kongruen dan sejajar yang dihubungkan oleh sisi-sisi tegak berbentuk persegi panjang.',
    formula: {
      volume: 'V = \\text{Luas alas} \\times \\text{tinggi}',
      surface: 'L = 2 \\times \\text{Luas alas} + \\text{Keliling alas} \\times \\text{tinggi}'
    },
    properties: [
      '2 sisi berbentuk segitiga (alas dan tutup)',
      '3 sisi berbentuk persegi panjang',
      '9 rusuk',
      '6 titik sudut'
    ]
  },
  {
    id: 'limas',
    name: 'Limas',
    description: 'Bangun ruang dengan alas berbentuk segi banyak dan sisi-sisi tegak berbentuk segitiga yang semuanya bertemu di satu titik puncak.',
    formula: {
      volume: 'V = \\frac{1}{3} \\times \\text{Luas alas} \\times \\text{tinggi}',
      surface: 'L = \\text{Luas alas} + \\text{Jumlah luas sisi tegak}'
    },
    properties: [
      '1 sisi alas berbentuk segiempat',
      '4 sisi tegak berbentuk segitiga',
      '8 rusuk',
      '5 titik sudut'
    ]
  }
];

export const QUIZ_DATA = {
  volume: [
    {
      id: 1,
      difficulty: 'sedang',
      level: 'Level 2: Sedang',
      question: 'Sebuah kubus diketahui memiliki volume 512 cm³. Berapakah luas alas kubus tersebut?',
      options: ['32 cm²', '64 cm²', '128 cm²', '256 cm²'],
      answer: 1,
      explanation: 'V = r^3 = 512 \\implies r = 8 \\text{ cm}. \\\\ \\text{Luas alas} = r \\times r = 8 \\times 8 = 64 \\text{ cm}^2'
    },
    {
      id: 2,
      difficulty: 'sulit',
      level: 'Level 4: Sulit',
      question: 'Sebuah kolam renang berbentuk prisma dengan alas trapesium siku-siku memiliki ukuran sisi sejajar 10 m dan 6 m, tinggi trapesium 4 m, dan panjang kolam 15 m. Berapa liter air yang dibutuhkan untuk memenuhi kolam tersebut?',
      options: ['480.000 liter', '320.000 liter', '240.000 liter', '180.000 liter'],
      answer: 0,
      explanation: '\\text{Luas alas trapesium} = \\frac{1}{2} \\times (10+6) \\times 4 = 32 \\text{ m}^2. \\\\ V = 32 \\times 15 = 480 \\text{ m}^3. \\\\ 1 \\text{ m}^3 = 1000 \\text{ liter}, \\text{ jadi } 480 \\times 1000 = 480.000 \\text{ liter}.'
    },
    {
      id: 3,
      difficulty: 'sulit',
      level: 'Level 4: Sulit',
      question: 'Sebuah wadah berbentuk balok berukuran 20 cm × 15 cm × 12 cm terisi air setengahnya. Ke dalam wadah tersebut dimasukkan sebuah balok besi pejal berukuran 10 cm × 15 cm × 6 cm hingga tenggelam seluruhnya. Berapakah kenaikan tinggi air dalam wadah tersebut?',
      options: ['2 cm', '3 cm', '4 cm', '5 cm'],
      answer: 1,
      explanation: '\\text{Volume besi} = 10 \\times 15 \\times 6 = 900 \\text{ cm}^3. \\\\ \\text{Luas alas wadah} = 20 \\times 15 = 300 \\text{ cm}^2. \\\\ \\text{Kenaikan tinggi} = \\frac{\\text{Volume benda yang dicelupkan}}{\\text{Luas alas wadah}} = \\frac{900}{300} = 3 \\text{ cm}.'
    },
    {
      id: 4,
      difficulty: 'hots',
      level: 'Level 5: HOTS',
      question: 'Budi memiliki kotak mainan berbentuk kubus besar. Ia ingin menyusun kubus-kubus kecil berukuran rusuk 3 cm ke dalamnya hingga penuh. Jika volume kotak besar adalah 3.375 cm³, berapa maksimal jumlah kubus kecil yang dapat dimasukkan?',
      options: ['75 buah', '100 buah', '125 buah', '150 buah'],
      answer: 2,
      explanation: '\\text{Panjang rusuk kotak besar} = \\sqrt[3]{3375} = 15 \\text{ cm}. \\\\ \\text{Jumlah kubus tiap sisi} = 15 / 3 = 5. \\\\ \\text{Total kubus} = 5 \\times 5 \\times 5 = 125 \\text{ buah}.'
    },
    {
      id: 5,
      difficulty: 'hots',
      level: 'Level 5: HOTS',
      question: 'Sebuah atap bangunan berbentuk limas segiempat beraturan. Panjang sisi alasnya 8 m dan tinggi limas 3 m. Udara di dalam atap tersebut harus disedot oleh kipas exhaust dengan kapasitas 16 m³ per menit. Berapa menit waktu minimum yang dibutuhkan untuk mengosongkan seluruh udara di dalamnya?',
      options: ['2 menit', '3 menit', '4 menit', '5 menit'],
      answer: 2,
      explanation: '\\text{Volume udara (limas)} = \\frac{1}{3} \\times (8 \\times 8) \\times 3 = 64 \\text{ m}^3. \\\\ \\text{Waktu} = \\frac{\\text{Volume}}{\\text{Kapasitas exhaust}} = \\frac{64}{16} = 4 \\text{ menit}.'
    }
  ],
  surface: [
    {
      id: 1,
      difficulty: 'sedang',
      level: 'Level 3: Sedang',
      question: 'Sebuah balok TANPA TUTUP memiliki ukuran panjang 12 cm, lebar 8 cm, dan tinggi 5 cm. Berapakah luas permukaan balok tersebut?',
      options: ['276 cm²', '296 cm²', '316 cm²', '392 cm²'],
      answer: 1,
      explanation: 'L = (p \\times l) + 2(p \\times t) + 2(l \\times t) \\\\ L = (12 \\times 8) + 2(12 \\times 5) + 2(8 \\times 5) \\\\ L = 96 + 120 + 80 = 296 \\text{ cm}^2.'
    },
    {
      id: 2,
      difficulty: 'sulit',
      level: 'Level 4: Sulit',
      question: 'Pak Budi akan membuat akuarium tanpa tutup berukuran 80 cm × 50 cm × 40 cm. Jika harga kaca adalah Rp 50.000,00 per meter persegi (m²), berapa biaya yang harus dikeluarkan untuk membeli kaca?',
      options: ['Rp 64.000,00', 'Rp 72.000,00', 'Rp 80.000,00', 'Rp 92.000,00'],
      answer: 1,
      explanation: '\\text{Dalam meter: } p=0,8 \\text{ m}; l=0,5 \\text{ m}; t=0,4 \\text{ m}. \\\\ L = (0,8 \\times 0,5) + 2(0,8 \\times 0,4) + 2(0,5 \\times 0,4) = 0,4 + 0,64 + 0,4 = 1,44 \\text{ m}^2. \\\\ \\text{Biaya} = 1,44 \\times 50.000 = \\text{Rp } 72.000,00.'
    },
    {
      id: 3,
      difficulty: 'sulit',
      level: 'Level 4: Sulit',
      question: 'Sebuah prisma alasnya berbentuk belah ketupat dengan panjang diagonal 12 cm dan 16 cm (panjang sisi belah ketupat = 10 cm). Jika luas permukaan prisma adalah 692 cm², berapakah tinggi prisma tersebut?',
      options: ['10,5 cm', '11,5 cm', '12,5 cm', '13,5 cm'],
      answer: 2,
      explanation: '\\text{Luas alas} = \\frac{1}{2} \\times 12 \\times 16 = 96 \\text{ cm}^2. \\\\ \\text{Keliling} = 4 \\times 10 = 40 \\text{ cm}. \\\\ L = 2 \\times \\text{Luas Alas} + \\text{Keliling} \\times t \\implies 692 = 2(96) + 40t \\implies 692 = 192 + 40t \\implies 500 = 40t \\implies t = 12,5 \\text{ cm}.'
    },
    {
      id: 4,
      difficulty: 'hots',
      level: 'Level 5: HOTS',
      question: 'Budi ingin mengecat seluruh bagian LUAR dan DALAM kotak kado berbentuk kubus (termasuk tutupnya) yang memiliki panjang rusuk 15 cm. Satu kaleng cat kecil hanya bisa digunakan untuk mengecat area seluas 500 cm². Berapa kaleng cat minimal yang harus dibeli Budi?',
      options: ['4 kaleng', '5 kaleng', '6 kaleng', '7 kaleng'],
      answer: 2,
      explanation: '\\text{Luas satu sisi kubus} = 15 \\times 15 = 225 \\text{ cm}^2. \\\\ \\text{Luas luar + dalam} = 2 \\times (6 \\times 225) = 2.700 \\text{ cm}^2. \\\\ \\text{Jumlah kaleng} = \\frac{2.700}{500} = 5,4 \\text{ (dibulatkan ke atas menjadi 6 kaleng)}.'
    },
    {
      id: 5,
      difficulty: 'hots',
      level: 'Level 5: HOTS',
      question: 'Sebuah tenda darurat berbentuk limas dengan alas persegi berukuran sisi 6 meter dan tinggi puncak tenda 4 meter. Tenda tersebut akan dipasangi terpal (tanpa terpal penutup lantai). Jika terpal dijual dalam gulungan (1 gulungan = 10 m²), berapa gulungan terpal minimal yang harus dibeli?',
      options: ['5 gulungan', '6 gulungan', '7 gulungan', '8 gulungan'],
      answer: 1,
      explanation: '\\text{Tinggi segitiga tegak (Phytagoras 3 dan 4)} = 5 \\text{ m}. \\\\ \\text{Luas selimut (4 segitiga)} = 4 \\times (\\frac{1}{2} \\times 6 \\times 5) = 60 \\text{ m}^2. \\\\ \\text{Jumlah gulungan} = \\frac{60}{10} = 6 \\text{ gulungan}.'
    }
  ]
};

export const IMAGES = [
  {
    src: 'rubik2.png',
    nama: 'Gambar 1. Rubik',
  },
  {
    src: '4x4x4.png',
    nama: 'Gambar 2. Kubus',
  },
];
