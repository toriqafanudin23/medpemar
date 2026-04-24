import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const LuasPrismaPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(7);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>C. Luas Permukaan Prisma</Heading2>
      <Heading3>Jaring-jaring Prisma</Heading3>

      <Paragraph>Variasi jaring-jaring prisma tentu lebih banyak dari pada kubus ataupun balok. Hal ini dikarenakan 
        bentuk alas prisma yang bermacam-macam, mulai dari segi-n beraturan, trapesium, ataupun segi-n tidak beraturan. Berikut contoh 
        jaring-jaring prisma segitiga tersaji pada <MathInline>{`\\text{Objek 8}`}</MathInline>.</Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_PRISMA}
        urlAR={AR_URLS.PRISMA_JARING}
        scale={0.6}
        title="Objek 8. Jaring-jaring Prisma Segitiga"
      />


      <NavFooter prev="/luas-permukaan/balok" next="/luas-permukaan/limas" />
    </div>
  );
};

export default LuasPrismaPage;
