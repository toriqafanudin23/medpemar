import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import StaticViewer from '@/components/features/StaticViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODEL_ARRAYS } from '@/constants/urls';

const LuasKubusPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(5);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading1>Luas Permukaan Bangun Ruang</Heading1>
      
      <ImageDisplay src="kardus-img.png" nama="Gambar 13. Kardus" />
      
      <Heading2>A. Luas Permukaan Kubus</Heading2>
      <Heading3>Jaring-jaring Kubus</Heading3>

      <Paragraph>Jaring-jaring adalah gabungan bangun datar (seperti persegi, persegi panjang, segitiga) yang menyusun
        sebuah bangun ruang. Jika sisi-sisi bangun ruang direbahkan pada rusuk-rusuknya, akan terlihat rangkaian
        bidang datar yang membentuk jaring-jaring tersebut. Misalnya saja pada kubus, enam buah persegi yang disusun
        secara tepat, akan membentuk sebuah jaring-jaring kubus. Perhatikan beberapa contoh jaring-jaring kubus pada <MathInline>{`\\text{Objek 6}`}</MathInline> berikut.</Paragraph>


      <StaticViewer
        models={MODEL_ARRAYS.JARING_KUBUS}
        urlAR={AR_URLS.KUBUS_JARING}
        scale={0.8}
        title="Objek 6. Jaring-jaring Kubus"
      />

      <ImageDisplay src="jaring-kubus-1.png" />
      <ImageDisplay src="jaring-kubus-2.png" />
      <ImageDisplay src="jaring-kubus-3.png" />
      <ImageDisplay src="jaring-kubus-4.png" nama="Gambar 18. Macam jaring-jaring kubus" />

      <Paragraph>Tentu masih banyak contoh jaring-jaring kubus yang lain. Nah, coba sekarang kamu buat contoh lain dari jaring-jaring kubus!</Paragraph>


      <Heading3>Luas Permukaan Kubus</Heading3>
      <Paragraph>Jaring-jaring sendiri digunakan untuk memahami struktur tiga dimensi secara dua dimensi. Misalnya saja untuk
        mencari luas permukaan suatu bangun ruang. </Paragraph>
      <ImageDisplay src="jaringkubusrr.png" nama="Gambar 19. Jaring-jaring kubus" />
      <Paragraph>Luas permukaan adalah total jumlah luas yang menutupi bagian luar suatu objek tiga dimensi,
        termasuk semua sisi, alas, dan tutupnya. Mencari luas permukaan suatu bangun ruang sama halnya dengan mencari
        luas jaring-jaring dari bangun ruang tersebut. Misalnya saja pada kubus, terlihat bahwa jaring-jaring kubus 
        terbentuk dari enam buah persegi dengan ukuran yang sama <MathInline>{`(r \\times r)`}</MathInline>,
       sehingga luas permukaannya dapat dicari dengan</Paragraph>
       <MathBlock>{`L=6 \\times \\text{Luas Persegi} \\\\L=6 \\times r \\times r \\\\L=6 \\times r^2`}</MathBlock>
       <Heading3>Contoh:</Heading3>
       <Paragraph>Sebuah kubus memiliki panjang rusuk 7 cm. Tentukanlah luas permukaan kubus tersebut!</Paragraph>
       <Paragraph>Pembahasan:</Paragraph>
       <MathBlock>{`L=6\\times r^2 \\\\ L=6 \\times 7^2 \\\\ L=6 \\times 49 = 294`}</MathBlock>
       <Paragraph>Jadi luas permukaan kubus tersebut adalah <MathInline>{`\\text{294 cm}^2`}</MathInline>.</Paragraph>
       <Heading3>Latihan:</Heading3>
       <Paragraph>Diketahui sebuah kubus memiliki luas permukaan <MathInline>{`\\text{96 cm}^2`}</MathInline>. Tentukanlah panjang rusuk kubus tersebut!</Paragraph>
      <InputAnswer answerKey="4" placeholder="Panjang rusuk = ..." />

      <NavFooter prev="/luas-permukaan" next="/luas-permukaan/balok" />
    </div>
  );
};

export default LuasKubusPage;
