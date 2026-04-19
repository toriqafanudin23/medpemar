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

      <Paragraph>Tentu masih banyak jenis prisma lainnya. Bayangkan setiap bangun yang memiliki dua sisi, alas dan tutup yang sama, kemudian kedua sisi dihubungkan dengan persegi panjang, bisa kita sebut sebagai prisma. Nah sekarang coba kamu perhatikan bangun pada <MathInline>{`\\text{Gambar 12}`}</MathInline>, apakah bisa disebut prisma?</Paragraph>
      <ImageDisplay src="tabung.png" scale={0.7} nama="Gambar 12. Tabung" />





    


      <NavFooter prev="/volume/balok" next="/volume/limas" />
    </div>
  );
};

export default VolumePrismaPage;
