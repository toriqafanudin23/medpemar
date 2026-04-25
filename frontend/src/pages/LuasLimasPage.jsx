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

      <Paragraph>Jaring-jaring yang akan dipelajari terakhir kali adalah limas. Jaring-jaring limas tersusun dari alas berbentuk segi-<MathInline>{`n`}</MathInline> dan segitiga sejumlah <MathInline>{`n`}</MathInline>. Kamu bisa 
        melihat contoh jaring-jaring limas segiempat pada <MathInline>{`\\text{Objek 9}`}</MathInline>.</Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_LIMAS}
        urlAR={AR_URLS.LIMAS_JARING}
        scale={0.6}
        title="Objek 9. Jaring-jaring Limas Segiempat"
      />
      <ImageDisplay src="jaringlimassegi3.png" />
      <ImageDisplay src="jaringlimassegi4.png" />
      <ImageDisplay src="jaringlimassegi6.png" nama="Gambar 25. Contoh Jaring-jaring Limas" />




      
      <InputAnswer answerKey="160" placeholder="Luas permukaan = ..." />

      <NavFooter prev="/luas-permukaan/prisma" next="/quiz/surface" nextLabel="Quiz Luas Permukaan" />
    </div>
  );
};

export default LuasLimasPage;
