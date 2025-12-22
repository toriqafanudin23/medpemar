import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
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

      <Paragraph>
        Limas segiempat memiliki 1 sisi alas berbentuk segiempat dan 4 sisi tegak berbentuk segitiga. 
        Mari kita lihat jaring-jaringnya.
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_LIMAS}
        urlAR={AR_URLS.LIMAS_JARING}
        scale={1}
        title="Objek 9. Jaring-jaring Limas Segiempat"
      />

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Komponen Luas Permukaan Limas:</p>
        <ul className="space-y-1 text-sm text-foreground">
          <li>Luas alas (segiempat)</li>
          <li>Jumlah luas sisi tegak (segitiga-segitiga)</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Limas:</p>
        <MathBlock>L = Luas alas + Jumlah luas sisi tegak</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          Luas sisi tegak = ½ × alas × tinggi segitiga (apotema)
        </p>
      </HighlightBox>

      <Paragraph>
        <strong>Contoh:</strong> Limas segiempat dengan alas persegi sisi 6 cm dan tinggi segitiga pada sisi tegak 
        (apotema) 5 cm.
      </Paragraph>

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm font-medium text-foreground mb-2">Pembahasan:</p>
        <p className="text-sm text-foreground font-mono">
          Luas alas = 6 × 6 = 36 cm²<br/>
          Luas sisi tegak = 4 × (½ × 6 × 5) = 4 × 15 = 60 cm²<br/>
          L = 36 + 60 = 96 cm²
        </p>
      </div>

      <Paragraph>
        <strong>Latihan:</strong> Limas dengan alas persegi sisi 8 cm dan apotema 6 cm. 
        Hitung luas permukaannya!
      </Paragraph>
      <InputAnswer answerKey="160" placeholder="Luas permukaan = ..." />

      <NavFooter prev="/luas-permukaan/prisma" next="/quiz/surface" nextLabel="Quiz Luas Permukaan" />
    </div>
  );
};

export default LuasLimasPage;
