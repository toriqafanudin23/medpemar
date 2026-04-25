import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import ImageDisplay from '@/components/ui/ImageDisplay';
import Viewer3D from '@/components/features/Viewer3D';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const LuasLimasPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(8);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>D. Luas Permukaan Limas</Heading2>
      <Heading3>Jaring-jaring Limas</Heading3>

      <Paragraph>Jaring-jaring yang akan dipelajari terakhir kali adalah limas. Jaring-jaring limas tersusun dari alas berbentuk segi-n dan segitiga sejumlah n. Kamu bisa 
        melihat contoh jaring-jaring limas segiempat pada <MathInline>{`\\text{Objek 9}`}</MathInline> berikut.</Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_LIMAS}
        urlAR={AR_URLS.LIMAS_JARING}
        scale={0.5}
        title="Objek 9. Jaring-jaring Limas Segiempat"
      />
      <ImageDisplay src="jaringlimassegi3.png" />
      <ImageDisplay src="jaringlimassegi4.png" />
      <ImageDisplay src="jaringlimassegi6.png" nama="Gambar 25. Contoh Jaring-jaring Limas" />
      <ImageDisplay src="jaringlimaspuncakt.png" nama="Gambar 26. Jaring-jaring Limas Puncak Tidak di Tengah" />
      <Paragraph>Tentu masih banyak lagi contoh jaring-jaring limas yang lain. Dalam materi ini terbatas pada limas dengan alas berbentuk segi-n beraturan. Sebagai latihan, cobalah kamu buat jaring-jaring limas segiempat selain yang sudah dicontohkan!</Paragraph>
      <Heading3>Luas Permukaan Limas</Heading3>
      <Paragraph>Luas permukaan limas dapat dilihat dari jaring-jaringnya. Pada limas segi-n beraturan luas permukaannya dapat dicari dengan</Paragraph>
      <MathBlock>{`L=\\text{Luas Alas}+n \\times \\text{Sisi Tegak}`}</MathBlock>
      <Paragraph>Dalam hal ini sisi tegak limas berbentuk segitiga.</Paragraph>





      
      <InputAnswer answerKey="160" placeholder="Luas permukaan = ..." />

      <NavFooter prev="/luas-permukaan/prisma" next="/quiz/surface" nextLabel="Quiz Luas Permukaan" />
    </div>
  );
};

export default LuasLimasPage;
