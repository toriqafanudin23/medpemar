import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const VolumeLimasPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(4);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>D. Volume Limas</Heading2>

      <Paragraph>
        Limas adalah bangun ruang yang memiliki alas berbentuk segi-n dan sisi-sisi tegak 
        berbentuk segitiga yang bertemu di satu titik puncak.
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.LIMAS_ANIM}
        urlAR={AR_URLS.LIMAS}
        scale={1}
        title="Objek 4. Limas Segiempat"
      />

      <Paragraph>
        Limas segiempat memiliki alas berbentuk persegi atau persegi panjang. 
        Perhatikan bahwa jika kita menggabungkan 3 limas dengan tinggi yang sama 
        dan alas yang sama, kita akan mendapatkan sebuah kubus.
      </Paragraph>

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Sifat Limas Segiempat:</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Memiliki 1 sisi alas berbentuk segiempat</li>
          <li>Memiliki 4 sisi tegak berbentuk segitiga</li>
          <li>Memiliki 8 rusuk</li>
          <li>Memiliki 5 titik sudut (4 di alas, 1 di puncak)</li>
        </ul>
      </HighlightBox>

      <Paragraph>
        Karena 3 limas = 1 kubus (dengan tinggi limas = ½ rusuk kubus), maka volume limas 
        adalah sepertiga dari volume kubus atau balok dengan alas dan tinggi yang sama.
      </Paragraph>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Limas:</p>
        <MathBlock>V = ⅓ × Luas alas × tinggi</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          Untuk limas segiempat: Luas alas = sisi × sisi (persegi) atau p × l (persegi panjang)
        </p>
      </HighlightBox>

      <Paragraph>
        Contoh: Sebuah limas segiempat memiliki alas persegi dengan sisi 9 cm dan tinggi limas 14 cm. 
        Berapakah volume limas tersebut?
      </Paragraph>

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm text-foreground font-mono">
          Luas alas = 9 × 9 = 81 cm²<br/>
          Volume = ⅓ × 81 × 14 = 378 cm³
        </p>
      </div>

      <Paragraph>Latihan: Hitunglah volume limas segiempat dengan alas persegi sisi 6 cm dan tinggi 10 cm!</Paragraph>
      <InputAnswer answerKey="120" placeholder="Volume limas = ..." />

      <NavFooter prev="/volume/prisma" next="/quiz/volume" nextLabel="Quiz Volume" />
    </div>
  );
};

export default VolumeLimasPage;
