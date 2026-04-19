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
      <ImageDisplay src="prismasegitiga3.png" scale={0.7} nama="Gambar 9. Prisma Segitiga" />
      <ImageDisplay src="prismasegilima.png" scale={0.7} nama="Gambar 10. Prisma Segilima" />
      <ImageDisplay src="prismasegi8.png" scale={0.7} nama="Gambar 11. Prisma Segidelapan" />

      <Paragraph>Tentu masih banyak jenis prisma lainnya. Bayangkan setiap bangun yang memiliki dua sisi, alas dan tutup yang sama, kemudian kedua sisi dihubungkan dengan persegi panjang, bisa kita sebut sebagai prisma. Nah sekarang coba kamu perhatikan bangun pada <MathInline>{`\\text{Gambar 12}`}</MathInline>, apakah bisa disebut sebagai prisma?</Paragraph>
      <ImageDisplay src="tabung.png" scale={0.7} nama="Gambar 12. Tabung" />
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






    


      <NavFooter prev="/volume/balok" next="/volume/limas" />
    </div>
  );
};

export default VolumePrismaPage;
