import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const LuasKubusPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(5);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading1>Luas Permukaan Bangun Ruang</Heading1>
      
      <Heading2>A. Luas Permukaan Kubus</Heading2>

      <Paragraph>
        Untuk menghitung luas permukaan kubus, kita perlu memahami jaring-jaring kubus terlebih dahulu. 
        Jaring-jaring kubus adalah rangkaian dari 6 persegi yang jika dilipat akan membentuk kubus.
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.KUBUS_JARING}
        urlAR={AR_URLS.KUBUS_JARING}
        scale={1}
        title="Jaring-jaring Kubus"
      />

      <Paragraph>
        Dari animasi di atas, dapat dilihat bahwa kubus memiliki 6 sisi yang berbentuk persegi 
        dengan ukuran yang sama. Jika panjang rusuk kubus adalah s, maka:
      </Paragraph>

      <HighlightBox variant="info">
        <ul className="space-y-2 text-sm text-foreground">
          <li>Luas satu sisi = s × s = s²</li>
          <li>Jumlah sisi = 6</li>
          <li>Luas permukaan = 6 × s²</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Kubus:</p>
        <MathBlock>L = 6s²</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          dengan s = panjang rusuk kubus
        </p>
      </HighlightBox>

      <Paragraph>
        Contoh: Jika panjang rusuk kubus adalah 5 cm, maka luas permukaannya adalah:
      </Paragraph>

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm text-foreground font-mono">
          L = 6 × 5² = 6 × 25 = 150 cm²
        </p>
      </div>

      <Paragraph>Latihan: Hitunglah luas permukaan kubus dengan rusuk 7 cm!</Paragraph>
      <InputAnswer answerKey="294" placeholder="Luas permukaan = ..." />

      <NavFooter prev="/luas-permukaan" next="/luas-permukaan/balok" />
    </div>
  );
};

export default LuasKubusPage;
