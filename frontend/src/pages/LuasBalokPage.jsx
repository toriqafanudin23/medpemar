import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Heading3, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
import StaticViewer from '@/components/features/StaticViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODEL_ARRAYS } from '@/constants/urls';

const LuasBalokPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(6);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>B. Luas Permukaan Balok</Heading2>
      <Heading3>Jaring-jaring Balok</Heading3>


      <Paragraph>Terdapat sedikit perbedaan antara jaring-jaring balok dengan jaring-jaring kubus. Pada jaring-jaring kubus sisi-sisi nya selalu berbentuk persegi, sedangkan
       pada jaring-jaring balok sisi-sisinya tidak selalu persegi, bisa juga persegi panjang. Perhatikan beberapa
      contoh jaring-jaring balok berikut!</Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.JARING_BALOK}
        urlAR={AR_URLS.BALOK_JARING}
        scale={1}
        title="Objek 7. Jaring-jaring Balok"
      />
      <ImageDisplay src="jaringjaringbalok1.png" />
      <ImageDisplay src="jaringjaringbalok2.png" nama="Gambar 21. Contoh Jaring-jaring Balok" />



      <Paragraph>Tentu masih banyak lagi contoh jaring-jaring balok yang lainnya, mengingat perbandingan panjang, lebar, dan tinggi balok bervariasi. Nah sekarang coba kamu buat contoh jaring-jaring balok 
        dengan ukuran panjang 4 cm, lebar 3 cm, dan tinggi 2 cm!</Paragraph>
      <Heading3>Luas Permukaan Balok</Heading3>

      <NavFooter prev="/luas-permukaan/kubus" next="/luas-permukaan/prisma" />
    </div>
  );
};

export default LuasBalokPage;
