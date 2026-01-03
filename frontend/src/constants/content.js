// Learning content data
export const SHAPES = [
  {
    id: 'kubus',
    name: 'Kubus',
    description: 'Bangun ruang dengan 6 sisi berbentuk persegi yang kongruen',
    formula: {
      volume: 'V = s³',
      surface: 'L = 6s²'
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
      volume: 'V = p × l × t',
      surface: 'L = 2(pl + pt + lt)'
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
      volume: 'V = Luas alas × tinggi',
      surface: 'L = 2 × Luas alas + Keliling alas × tinggi'
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
      volume: 'V = ⅓ × Luas alas × tinggi',
      surface: 'L = Luas alas + Jumlah luas sisi tegak'
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
      question: 'Sebuah kubus memiliki rusuk 5 cm. Berapakah volume kubus tersebut?',
      options: ['100 cm³', '125 cm³', '150 cm³', '175 cm³'],
      answer: 1,
      explanation: 'V = s³ = 5³ = 125 cm³'
    },
    {
      id: 2,
      question: 'Sebuah balok memiliki panjang 8 cm, lebar 5 cm, dan tinggi 4 cm. Hitunglah volume balok tersebut!',
      options: ['120 cm³', '140 cm³', '160 cm³', '180 cm³'],
      answer: 2,
      explanation: 'V = p × l × t = 8 × 5 × 4 = 160 cm³'
    },
    {
      id: 3,
      question: 'Sebuah prisma segitiga memiliki alas berbentuk segitiga siku-siku dengan panjang alas 6 cm dan tinggi segitiga 8 cm. Jika tinggi prisma 10 cm, hitunglah volume prisma!',
      options: ['200 cm³', '220 cm³', '240 cm³', '260 cm³'],
      answer: 2,
      explanation: 'Luas alas = ½ × 6 × 8 = 24 cm². V = 24 × 10 = 240 cm³'
    },
    {
      id: 4,
      question: 'Sebuah limas segiempat memiliki alas berbentuk persegi dengan sisi 9 cm dan tinggi limas 14 cm. Hitunglah volume limas tersebut!',
      options: ['378 cm³', '398 cm³', '418 cm³', '438 cm³'],
      answer: 0,
      explanation: 'Luas alas = 9 × 9 = 81 cm². V = ⅓ × 81 × 14 = 378 cm³'
    },
    {
      id: 5,
      question: 'Jika volume sebuah kubus adalah 512 cm³, berapakah panjang rusuk kubus tersebut?',
      options: ['6 cm', '7 cm', '8 cm', '9 cm'],
      answer: 2,
      explanation: 's = ³√512 = 8 cm'
    }
  ],
  surface: [
    {
      id: 1,
      question: 'Sebuah kubus memiliki rusuk 7 cm. Hitunglah luas permukaan kubus tersebut!',
      options: ['264 cm²', '284 cm²', '294 cm²', '304 cm²'],
      answer: 2,
      explanation: 'L = 6s² = 6 × 7² = 6 × 49 = 294 cm²'
    },
    {
      id: 2,
      question: 'Sebuah balok memiliki panjang 10 cm, lebar 6 cm, dan tinggi 4 cm. Hitunglah luas permukaan balok tersebut!',
      options: ['228 cm²', '238 cm²', '248 cm²', '258 cm²'],
      answer: 2,
      explanation: 'L = 2(pl + pt + lt) = 2(60 + 40 + 24) = 2(124) = 248 cm²'
    },
    {
      id: 3,
      question: 'Luas permukaan sebuah kubus adalah 384 cm². Berapakah panjang rusuk kubus tersebut?',
      options: ['6 cm', '7 cm', '8 cm', '9 cm'],
      answer: 2,
      explanation: '6s² = 384, s² = 64, s = 8 cm'
    },
    {
      id: 4,
      question: 'Sebuah prisma segitiga dengan alas segitiga siku-siku (alas 3 cm, tinggi 4 cm, sisi miring 5 cm) dan tinggi prisma 10 cm. Hitunglah luas permukaannya!',
      options: ['122 cm²', '132 cm²', '142 cm²', '152 cm²'],
      answer: 1,
      explanation: 'Luas alas = ½ × 3 × 4 = 6 cm². L = 2(6) + (3+4+5) × 10 = 12 + 120 = 132 cm²'
    },
    {
      id: 5,
      question: 'Sebuah limas segiempat dengan alas persegi sisi 6 cm memiliki tinggi segitiga pada sisi tegak 5 cm. Hitunglah luas permukaan limas!',
      options: ['86 cm²', '96 cm²', '106 cm²', '116 cm²'],
      answer: 1,
      explanation: 'Luas alas = 36 cm². Luas sisi tegak = 4 × (½ × 6 × 5) = 60 cm². L = 36 + 60 = 96 cm²'
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
