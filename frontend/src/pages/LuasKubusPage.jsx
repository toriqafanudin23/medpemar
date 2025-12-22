import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
import StaticViewer from '@/components/features/StaticViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODEL_ARRAYS } from '@/constants/urls';

const LuasKubusPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(5);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading1>Luas Permukaan Bangun Ruang</Heading1>
      
      <ImageDisplay src="kardus-img.png" nama="Gambar 13. Kardus" />
      
      <Heading2>A. Luas Permukaan Kubus</Heading2>

      <Paragraph>
        Pernahkah kamu membongkar kardus atau menggunting kardus di bagian tepinya? 
        Tentu, saat kecil hal ini lumrah dilakukan anak-anak saat bermain. 
        Pernahkah kamu bertanya, bagaimana cara perusahaan menentukan luas minimal bahan 
        untuk membuat kardus?
      </Paragraph>

      <Paragraph>
        Kali ini, kamu akan menggunakan teknologi augmented reality untuk melihat seperti apa 
        bentuk kardus saat dibongkar, serta kemungkinan bentuk potongan yang terjadi. 
        Kamu akan mulai dari kardus berbentuk kubus, yaitu yang memiliki enam sisi dengan luas yang sama.
      </Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.JARING_KUBUS}
        urlAR={AR_URLS.KUBUS_JARING}
        scale={1.4}
        title="Objek 6. Jaring-jaring Kubus"
      />

      <Paragraph>
        Bongkaran kubus tadi disebut sebagai jaring-jaring. Jaring-jaring adalah susunan 
        sisi-sisi bangun ruang yang direntangkan menjadi bangun datar, sehingga dapat dilipat 
        kembali membentuk bangun ruang semula. Berikut beberapa jaring-jaring yang dapat 
        dibentuk menjadi kubus.
      </Paragraph>

      <ImageDisplay src="jaring-kubus-1.png" />
      <ImageDisplay src="jaring-kubus-2.png" />
      <ImageDisplay src="jaring-kubus-3.png" />
      <ImageDisplay src="jaring-kubus-4.png" nama="Gambar 14. Macam jaring-jaring kubus" />

      <Paragraph>
        Dapat dilihat bahwa jaring-jaring kubus terdiri atas enam buah persegi yang berukuran sama. 
        Dengan demikian, luas jaring-jaring dapat dihitung dengan mencari luas salah satu persegi, 
        kemudian dikalikan enam.
      </Paragraph>

      <ImageDisplay src="jaring-kubus-L1-6.png" nama="Gambar 15. Jaring kubus" scale={1.5} />

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Karena semua sisi kubus sama:</p>
        <ul className="space-y-1 text-sm text-foreground">
          <li>L₁ = L₂ = L₃ = L₄ = L₅ = L₆ = r × r = r²</li>
          <li>Luas permukaan = L₁ + L₂ + L₃ + L₄ + L₅ + L₆</li>
          <li>Luas permukaan = 6 × r²</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Kubus:</p>
        <MathBlock>L = 6 × r²</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          dengan r = panjang rusuk kubus
        </p>
      </HighlightBox>

      <Paragraph>
        <strong>Contoh:</strong> Diketahui sebuah kubus dengan panjang rusuk 7 cm. 
        Tentukan luas permukaan bangun tersebut!
      </Paragraph>

      <ImageDisplay src="kubus7cm.png" nama="Gambar 16. Kubus dengan rusuk 7 cm" />

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm font-medium text-foreground mb-2">Pembahasan:</p>
        <p className="text-sm text-foreground font-mono">
          L = 6 × r²<br/>
          L = 6 × 7²<br/>
          L = 6 × 49 = 294 cm²
        </p>
      </div>

      <Paragraph>Jadi, luas permukaan kubus tersebut adalah 294 cm².</Paragraph>

      <Paragraph>
        <strong>Latihan:</strong> Hitunglah luas permukaan kubus dengan rusuk 5 cm!
      </Paragraph>
      <InputAnswer answerKey="150" placeholder="Luas permukaan = ..." />

      <NavFooter prev="/luas-permukaan" next="/luas-permukaan/balok" />
    </div>
  );
};

export default LuasKubusPage;
