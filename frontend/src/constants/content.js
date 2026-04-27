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
      question: 'Sebuah kubus memiliki rusuk 5 cm. Berapakah volume kubus tersebut?',
      options: ['100 cm³', '125 cm³', '150 cm³', '175 cm³'],
      answer: 1,
      explanation: 'V = s^{3} = 5^{3} = 125 \\text{ cm}^{3}'
    },
    {
      id: 2,
      question: 'Sebuah balok memiliki panjang 8 cm, lebar 5 cm, dan tinggi 4 cm. Hitunglah volume balok tersebut!',
      options: ['120 cm³', '140 cm³', '160 cm³', '180 cm³'],
      answer: 2,
      explanation: 'V = p \\times l \\times t = 8 \\times 5 \\times 4 = 160 \\text{ cm}^{3}'
    },
    {
      id: 3,
      question: 'Sebuah prisma segitiga memiliki alas berbentuk segitiga siku-siku dengan panjang alas 6 cm dan tinggi segitiga 8 cm. Jika tinggi prisma 10 cm, hitunglah volume prisma!',
      options: ['200 cm³', '220 cm³', '240 cm³', '260 cm³'],
      answer: 2,
      explanation: '\\text{Luas alas} = \\frac{1}{2} \\times 6 \\times 8 = 24 \\text{ cm}^{2}. V = 24 \\times 10 = 240 \\text{ cm}^{3}'
    },
    {
      id: 4,
      question: 'Sebuah limas segiempat memiliki alas berbentuk persegi dengan sisi 9 cm dan tinggi limas 14 cm. Hitunglah volume limas tersebut!',
      options: ['378 cm³', '398 cm³', '418 cm³', '438 cm³'],
      answer: 0,
      explanation: '\\text{Luas alas} = 9 \\times 9 = 81 \\text{ cm}^{2}. V = \\frac{1}{3} \\times 81 \\times 14 = 378 \\text{ cm}^{3}'
    },
    {
      id: 5,
      question: 'Jika volume sebuah kubus adalah 512 cm³, berapakah panjang rusuk kubus tersebut?',
      options: ['6 cm', '7 cm', '8 cm', '9 cm'],
      answer: 2,
      explanation: 's = \\sqrt[3]{512} = 8 \\text{ cm}'
    }
  ],
  surface: [
    {
      id: 1,
      question: 'Sebuah kubus memiliki rusuk 7 cm. Hitunglah luas permukaan kubus tersebut!',
      options: ['264 cm²', '284 cm²', '294 cm²', '304 cm²'],
      answer: 2,
      explanation: 'L = 6s^{2} = 6 \\times 7^{2} = 6 \\times 49 = 294 \\text{ cm}^{2}'
    },
    {
      id: 2,
      question: 'Sebuah balok memiliki panjang 10 cm, lebar 6 cm, dan tinggi 4 cm. Hitunglah luas permukaan balok tersebut!',
      options: ['228 cm²', '238 cm²', '248 cm²', '258 cm²'],
      answer: 2,
      explanation: 'L = 2(pl + pt + lt) = 2(60 + 40 + 24) = 2(124) = 248 \\text{ cm}^{2}'
    },
    {
      id: 3,
      question: 'Luas permukaan sebuah kubus adalah 384 cm². Berapakah panjang rusuk kubus tersebut?',
      options: ['6 cm', '7 cm', '8 cm', '9 cm'],
      answer: 2,
      explanation: '6s^{2} = 384, s^{2} = 64, s = 8 \\text{ cm}'
    },
    {
      id: 4,
      question: 'Sebuah prisma segitiga dengan alas segitiga siku-siku (alas 3 cm, tinggi 4 cm, sisi miring 5 cm) dan tinggi prisma 10 cm. Hitunglah luas permukaannya!',
      options: ['122 cm²', '132 cm²', '142 cm²', '152 cm²'],
      answer: 1,
      explanation: '\\text{Luas alas} = \\frac{1}{2} \\times 3 \\times 4 = 6 \\text{ cm}^{2}. L = 2(6) + (3+4+5) \\times 10 = 12 + 120 = 132 \\text{ cm}^{2}'
    },
    {
      id: 5,
      question: 'Sebuah limas segiempat dengan alas persegi sisi 6 cm memiliki tinggi segitiga pada sisi tegak 5 cm. Hitunglah luas permukaan limas!',
      options: ['86 cm²', '96 cm²', '106 cm²', '116 cm²'],
      answer: 1,
      explanation: '\\text{Luas alas} = 36 \\text{ cm}^{2}. \\text{Luas sisi tegak} = 4 \\times (\\frac{1}{2} \\times 6 \\times 5) = 60 \\text{ cm}^{2}. L = 36 + 60 = 96 \\text{ cm}^{2}'
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
