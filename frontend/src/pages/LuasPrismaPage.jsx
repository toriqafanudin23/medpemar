import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
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

      <Paragraph>
        Prisma segitiga memiliki 2 sisi berbentuk segitiga (alas dan tutup) dan 3 sisi berbentuk 
        persegi panjang. Mari kita lihat jaring-jaringnya.
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_PRISMA}
        urlAR={AR_URLS.PRISMA_JARING}
        scale={1}
        title="Objek 8. Jaring-jaring Prisma Segitiga"
      />

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Komponen Luas Permukaan Prisma:</p>
        <ul className="space-y-1 text-sm text-foreground">
          <li>2 × Luas alas (segitiga)</li>
          <li>Luas sisi tegak = Keliling alas × tinggi prisma</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Prisma:</p>
        <MathBlock>L = 2 × Luas alas + Keliling alas × tinggi</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          Untuk prisma segitiga: Luas alas = ½ × a × t (segitiga)
        </p>
      </HighlightBox>

      <Paragraph>
        <strong>Contoh:</strong> Sebuah prisma segitiga dengan alas berbentuk segitiga siku-siku 
        (alas 3 cm, tinggi 4 cm, sisi miring 5 cm) dan tinggi prisma 10 cm.
      </Paragraph>

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm font-medium text-foreground mb-2">Pembahasan:</p>
        <p className="text-sm text-foreground font-mono">
          Luas alas = ½ × 3 × 4 = 6 cm²<br/>
          Keliling alas = 3 + 4 + 5 = 12 cm<br/>
          L = 2(6) + 12 × 10 = 12 + 120 = 132 cm²
        </p>
      </div>

      <Paragraph>
        <strong>Latihan:</strong> Prisma segitiga dengan alas (6, 8, 10) cm dan tinggi prisma 12 cm. 
        Hitung luas permukaannya!
      </Paragraph>
      <InputAnswer answerKey="336" placeholder="Luas permukaan = ..." />

      <NavFooter prev="/luas-permukaan/balok" next="/luas-permukaan/limas" />
    </div>
  );
};

export default LuasPrismaPage;
