import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
import StaticViewer from '@/components/features/StaticViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODEL_ARRAYS } from '@/constants/urls';

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
        Sebelumnya, menghitung luas permukaan kubus cukup mudah karena semua sisi kubus 
        berbentuk persegi dengan ukuran yang sama. Sementara itu, pada balok, keenam sisinya 
        tidak memiliki ukuran yang sama, sehingga diperlukan pendekatan lain untuk menghitung 
        luas permukaannya.
      </Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.JARING_BALOK}
        urlAR={AR_URLS.BALOK_JARING}
        scale={1}
        title="Objek 7. Jaring-jaring Balok"
      />

      <Paragraph>
        Setelah kamu melihat contoh jaring-jaring balok, kita akan menganalisis salah satu 
        jaring-jaring balok untuk mempelajari cara menghitung luas jaring-jaring atau 
        luas permukaan balok.
      </Paragraph>

      <ImageDisplay 
        src="jaring-balok-L1-6-ukuran.png" 
        nama="Gambar 17. Jaring-jaring balok" 
        width="300px"
      />

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Sisi-sisi Balok:</p>
        <ul className="space-y-1 text-sm text-foreground">
          <li>L₁ = L₃ = p × l (alas dan tutup)</li>
          <li>L₂ = L₄ = t × l (sisi kiri dan kanan)</li>
          <li>L₅ = L₆ = p × t (sisi depan dan belakang)</li>
        </ul>
      </HighlightBox>

      <Paragraph>
        Terdapat tiga pasang sisi yang memiliki luas yang sama. Sehingga, rumus mencari 
        luas permukaan balok dapat disederhanakan menjadi:
      </Paragraph>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Balok:</p>
        <MathBlock>L = 2(pl + tl + pt)</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          p = panjang, l = lebar, t = tinggi
        </p>
      </HighlightBox>

      <Paragraph>
        <strong>Latihan:</strong> Hitunglah luas permukaan balok berikut!
      </Paragraph>

      <ImageDisplay src="balok-8x5x4.png" width="300px" />

      <InputAnswer answerKey="184" placeholder="Luas permukaan = ..." />

      <NavFooter prev="/luas-permukaan/kubus" next="/luas-permukaan/prisma" />
    </div>
  );
};

export default LuasBalokPage;
