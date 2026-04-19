import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';

const VolumeBalokPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(2);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>B. Volume Balok</Heading2>
      <Heading3>Volume Balok dengan Rumus</Heading3>
      <Paragraph>Secara umum, balok dengan panjang <MathInline>{`(p)`}</MathInline>, lebar <MathInline>{`(l)`}</MathInline>, dan tinggi <MathInline>{`(t)`}</MathInline> memiliki volume yang dapat dihitung dengan rumus:</Paragraph>
      <MathBlock>{`V = p \\times l \\times t`}</MathBlock>
      <ImageDisplay src="balokplt.png" nama="Gambar 7. Balok" scale={0.8} />
      <Heading3>Contoh:</Heading3>
      <Paragraph>Sebuah balok memiliki panjang 5 cm, lebar 3 cm, dan tinggi 2 cm. Hitunglah volume balok tersebut!</Paragraph>
      <ImageDisplay src="balok532.png" nama="Gambar 8. Balok" scale={0.8} />
      <Paragraph>Pembahasan:</Paragraph>
      <MathBlock>{`V = p \\times l \\times t \\\\ V=5\\times 3 \\times 2 \\\\ V=30`}</MathBlock>
      <Paragraph>Jadi volume balok tersebut adalah <MathInline>{`30 \\text{ cm}^3`}</MathInline>.</Paragraph>
      <Heading3>Latihan:</Heading3>
      <Paragraph>Hitunglah volume balok dengan panjang 4 cm, lebar 3 cm, dan tinggi 6 cm!</Paragraph>
      <ImageDisplay src="balok436.png"  scale={0.8} />
      <InputAnswer answerKey="72" placeholder="Volume balok = ..." />
      


      <NavFooter prev="/volume/kubus" next="/volume/prisma" />
    </div>
  );
};

export default VolumeBalokPage;
