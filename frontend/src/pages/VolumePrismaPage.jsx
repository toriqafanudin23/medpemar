import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const VolumePrismaPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(3);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>C. Volume Prisma Segitiga</Heading2>

      <Paragraph>
        Prisma adalah bangun ruang yang memiliki alas dan tutup berbentuk sama dan sejajar 
        (sering berbentuk segitiga atau segi-n lainnya), serta sisi-sisi tegak berbentuk 
        persegi panjang.
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.PRISMA_ANIM}
        urlAR={AR_URLS.PRISMA}
        scale={1}
        title="Objek 3. Prisma Segitiga"
      />

      <Paragraph>
        Perhatikan bahwa prisma segitiga dapat dianggap sebagai setengah dari sebuah balok. 
        Jika kita memotong balok secara diagonal, kita akan mendapatkan dua prisma segitiga.
      </Paragraph>

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Sifat Prisma Segitiga:</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Memiliki 2 sisi berbentuk segitiga (alas dan tutup)</li>
          <li>Memiliki 3 sisi berbentuk persegi panjang</li>
          <li>Memiliki 9 rusuk</li>
          <li>Memiliki 6 titik sudut</li>
        </ul>
      </HighlightBox>

      <Paragraph>
        Karena prisma dapat dianggap sebagai &quot;setengah balok&quot;, maka:
      </Paragraph>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Prisma:</p>
        <MathBlock>V = Luas alas × tinggi</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          Untuk prisma segitiga: Luas alas = ½ × alas × tinggi segitiga
        </p>
      </HighlightBox>

      <Paragraph>
        Contoh: Sebuah prisma segitiga memiliki alas berbentuk segitiga siku-siku dengan 
        panjang alas 6 cm dan tinggi segitiga 8 cm. Jika tinggi prisma 10 cm, berapakah volume prisma?
      </Paragraph>

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm text-foreground font-mono">
          Luas alas = ½ × 6 × 8 = 24 cm²<br/>
          Volume = 24 × 10 = 240 cm³
        </p>
      </div>

      <Paragraph>Latihan: Hitunglah volume prisma segitiga dengan alas (3 cm, 4 cm) dan tinggi 5 cm!</Paragraph>
      <InputAnswer answerKey="30" placeholder="Volume prisma = ..." />

      <NavFooter prev="/volume/balok" next="/volume/limas" />
    </div>
  );
};

export default VolumePrismaPage;
