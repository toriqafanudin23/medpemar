import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock, Heading3, MathInline } from '@/components/ui/Typography';
import StaticViewer from '@/components/features/StaticViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODEL_ARRAYS } from '@/constants/urls';

const VolumePrismaPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(3);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>C. Volume Prisma</Heading2>
      <Heading3>Prisma dan Jenis-jenisnya</Heading3>

      <Paragraph>Prisma sendiri adalah bangun ruang yang memiliki dua sisi yang kongruen dan sejajar, serta sisi tegak berbentuk persegi panjang. Dapat dilihat beberapa contoh prisma pada <MathInline>{`\\text{Objek 3}`}</MathInline> berikut.</Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.PRISMA_TYPES}
        urlAR={AR_URLS.PRISMA_JENIS}
        scale={2}
        title="Objek 3. Jenis-jenis Prisma"
      />
      <ImageDisplay src="prismasegitiga3.png" scale={1} nama="Gambar 9. Prisma Segitiga" />
      <ImageDisplay src="prismasegilima.png" scale={1} nama="Gambar 10. Prisma Segilima" />
      <ImageDisplay src="prismasegi8.png" scale={1} nama="Gambar 11. Prisma Segidelapan" />

      <Paragraph>Tentu masih banyak jenis prisma lainnya. Bayangkan setiap bangun yang memiliki dua sisi, alas dan tutup yang sama, kemudian kedua sisi dihubungkan dengan persegi panjang, bisa kita sebut sebagai prisma. Nah sekarang coba kamu perhatikan bangun pada <MathInline>{`\\text{Gambar 12}`}</MathInline>, apakah bisa disebut sebagai prisma?</Paragraph>
      <ImageDisplay src="tabung.png" scale={1} nama="Gambar 12. Tabung" />
      <Heading3>Volume Prisma</Heading3>
      <Paragraph>Sebelum menghitung volume prisma, kamu perlu mengingat kembali cara mencari volume kubus dan balok. Volume kubus dapat dicari dengan</Paragraph>
      <MathBlock>{`V = r \\times r \\times r`}</MathBlock>
      <Paragraph> Sedangkan volume balok dapat dicari dengan</Paragraph>
      <MathBlock>{`V = p \\times l \\times t`}</MathBlock>
      <Paragraph>Jika kamu mengamati volume kubus dan balok, keduanya memiliki kesamaan, yaitu cara mencari volumenya adalah dengan mengalikan luas alas dengan tinggi.</Paragraph>
      <MathBlock>{`V = \\text{Luas Alas} \\times \\text{Tinggi}`}</MathBlock>
      <Paragraph>Dimana <MathInline>{`r \\times r`}</MathInline> merupakan luas alas dari kubus, sedangkan <MathInline>{`p \\times l`}</MathInline> merupakan luas alas dari balok. Sehingga dapat disimpulkan bahwa bangun yang memiliki sisi alas dan tutup yang kongruen dan dihubungkan dengan persegi panjang bisa disebut sebagai prisma. Mudahnya, kubus dan balok adalah prisma segiempat.</Paragraph>
      <Paragraph>Volume prisma secara umum dapat dicari dengan</Paragraph>
      <MathBlock>{`V = \\text{Luas Alas} \\times \\text{Tinggi}`}</MathBlock>
      <Paragraph>Dimana alas prisma bisa berbentuk segitiga, segi lima, segi delapan, atau bentuk lainnya.</Paragraph>
      <Heading3>Contoh Soal:</Heading3>
      <Paragraph>Diketahui sebuah prisma segitiga sama sisi dengan panjang sisi alas 6 cm dan tinggi prisma 5 cm. Jika tinggi segitiga adalah <MathInline>{`3 \\sqrt{3} \\text{ cm},`}</MathInline> maka volume prisma tersebut adalah ...</Paragraph>
      <ImageDisplay src="soalprismasegitiga2.png" scale={1} />
      <Paragraph>Pembahasan:</Paragraph>
      <MathBlock>{`V = \\text{Luas Alas} \\times \\text{Tinggi} \\\\ V = \\frac{1}{2} \\times 6 \\times 3\\sqrt{3} \\times 5 \\\\ V = 45\\sqrt{3}`}</MathBlock>
      <Paragraph>Jadi volume prisma segitiga tersebut adalah <MathInline>{`45\\sqrt{3} \\text{ cm}^3`}</MathInline>.</Paragraph>
      <Heading3>Latihan Soal:</Heading3>
      <Paragraph>Sebuah atap rumah berbentuk prisma trapesium <MathInline>{`\\text{ABCD.EFGH}`}</MathInline>. Diketahui panjang <MathInline>{`\\text{AB}=\\text{13 m, panjang CD}=\\text{5 m, dan tinggi atap}=\\text{3 m}`}</MathInline>. Jika luas area <MathInline>{`\\text{ABFE}=\\text{195 m}^2`}</MathInline>, maka volume atap tersebut adalah?</Paragraph>
      <ImageDisplay src="soalatap.png" scale={1} />

      <NavFooter prev="/volume/balok" next="/volume/limas" />
    </div>
  );
};

export default VolumePrismaPage;
