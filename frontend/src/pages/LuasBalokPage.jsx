import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const LuasBalokPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(6);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>B. Luas Permukaan Balok</Heading2>

      <Paragraph>
        Balok memiliki 6 sisi berbentuk persegi panjang. Sisi-sisi yang berhadapan memiliki ukuran 
        yang sama. Mari kita lihat jaring-jaring balok untuk memahami lebih jelas.
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.BALOK_JARING}
        urlAR={AR_URLS.BALOK_JARING}
        scale={1}
        title="Jaring-jaring Balok"
      />

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Sisi-sisi Balok:</p>
        <ul className="space-y-1 text-sm text-foreground">
          <li>2 sisi dengan ukuran p × l (alas dan tutup)</li>
          <li>2 sisi dengan ukuran p × t (depan dan belakang)</li>
          <li>2 sisi dengan ukuran l × t (kiri dan kanan)</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Balok:</p>
        <MathBlock>L = 2(pl + pt + lt)</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          p = panjang, l = lebar, t = tinggi
        </p>
      </HighlightBox>

      <Paragraph>
        Contoh: Hitunglah luas permukaan balok dengan p = 10 cm, l = 6 cm, dan t = 4 cm.
      </Paragraph>

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm text-foreground font-mono">
          L = 2(10×6 + 10×4 + 6×4)<br/>
          L = 2(60 + 40 + 24)<br/>
          L = 2(124) = 248 cm²
        </p>
      </div>

      <Paragraph>Latihan: Hitunglah luas permukaan balok dengan p = 8 cm, l = 5 cm, dan t = 3 cm!</Paragraph>
      <InputAnswer answerKey="158" placeholder="Luas permukaan = ..." />

      <NavFooter prev="/luas-permukaan/kubus" next="/luas-permukaan/prisma" />
    </div>
  );
};

export default LuasBalokPage;
