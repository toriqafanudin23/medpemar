import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
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
        scale={0.6}
        title="Objek 7. Jaring-jaring Balok"
      />
      <ImageDisplay src="jaringjaringbalok1.png" />
      <ImageDisplay src="jaringjaringbalok2.png" nama="Gambar 21. Contoh Jaring-jaring Balok" />



      <Paragraph>Tentu masih banyak lagi contoh jaring-jaring balok yang lainnya, mengingat perbandingan panjang, lebar, dan tinggi balok bervariasi. Nah sekarang coba kamu buat contoh jaring-jaring balok 
        dengan ukuran panjang 4 cm, lebar 3 cm, dan tinggi 2 cm!</Paragraph>
      <Heading3>Luas Permukaan Balok</Heading3>
      <Paragraph>Untuk memahami luas permukaan pada balok, coba kamu perhatikan ilustrasi pada <MathInline>{`\\text{Gambar 22}`}</MathInline> berikut.</Paragraph>
      <ImageDisplay src="ilustrasiluasbalok.png" nama="Gambar 22. Ilustrasi Luas Permukaan Balok" />
      <Paragraph>Dari <MathInline>{`\\text{Gambar 22}`}</MathInline> terlihat bahwa, balok memiliki sisi dengan 3 jenis ukuran. Pertama, 
        ada sisi dengan ukuran <MathInline>{`p \\times t`}</MathInline>, kedua ada sisi dengan ukuran <MathInline>{`p \\times l`}</MathInline>, dan
       ketiga ada sisi dengan ukuran <MathInline>{`l \\times t`}</MathInline>. Dimana masing-masing terdapat 2 sisi dengan ukuran yang sama. Sehingga 
       luas permukaan balok dapat dituliskan sebagai</Paragraph>
       <MathBlock>{`L=2 \\times p \\times t + 2 \\times p \\times l + 2 \\times l \\times t \\\\ L=2(p \\times t + p \\times l + l \\times t)`}</MathBlock>
       <Heading3>Contoh:</Heading3>
       <Paragraph>Diketahui sebuah balok memiliki ukuran panjang 4 cm, lebar 3 cm, dan tinggi 2 cm. Berapakah luas permukaan balok tersebut?</Paragraph>
       <Paragraph>Pembahasan:</Paragraph>
       <MathBlock>{`L=2(p \\times t + p \\times l + l \\times t) \\\\ L=2(4 \\times 2 + 4 \\times 3 + 3 \\times 2) \\\\ L=2(8+12+6)\\\\L=2(26)=52`}</MathBlock>
       <Paragraph>Jadi, luas permukaan balok tersebut adalah <MathInline>{`\\text{52 cm}^2`}</MathInline>.</Paragraph>
       <Heading3>Latihan:</Heading3>
       <Paragraph>Diketahui sebuah balok memiliki luas permukaan <MathInline>{`\\text{122 cm}^2`}</MathInline>. Jika lebar balok 4 cm dan tinggi balok 3 cm, maka berapakah ukuran panjang balok?</Paragraph>
      <InputAnswer answerKey="7" placeholder="Panjang balok = ..." />





      <NavFooter prev="/luas-permukaan/kubus" next="/luas-permukaan/prisma" />
    </div>
  );
};

export default LuasBalokPage;
