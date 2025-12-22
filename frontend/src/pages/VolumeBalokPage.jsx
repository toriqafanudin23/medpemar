import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
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

      <Paragraph>
        Menurutmu, apakah perbedaan antara kubus dan balok? Untuk mengetahui perbedaannya, 
        perhatikan Gambar 7 berikut.
      </Paragraph>

      <ImageDisplay src="kubusbalokAB.png" nama="Gambar 7. Kubus dan Balok" />

      <Paragraph>
        Dapat dilihat bahwa pada bangun A, jumlah kubus satuan yang menyusun rusuk panjang, 
        lebar, dan tinggi sama. Sementara pada bangun B, jumlah kubus satuan penyusun rusuk 
        panjang, lebar, dan tinggi tidak sama.
      </Paragraph>

      <Paragraph>
        Bangun A disebut <strong>kubus</strong>, sedangkan bangun B disebut <strong>balok</strong>. 
        Sekarang, coba kamu hitung volume bangun B!
      </Paragraph>

      <InputAnswer answerKey="24" placeholder="Volume balok = ..." />

      <Paragraph>
        Dalam matematika, bangun ruang tidak selalu digambarkan dengan kubus satuan penyusunnya. 
        Namun, untuk mempermudah perhitungan, bangun ruang sering hanya digambarkan sebagai 
        kerangka dan sisi-sisinya saja, seperti terlihat pada Gambar 8 berikut.
      </Paragraph>

      <ImageDisplay src="balok_pqrs.png" nama="Gambar 8. Balok PQRS.TUVW" width="300px" />

      <Paragraph>
        Pada bangun ruang, titik sudut disimbolkan dengan huruf kapital, seperti P, Q, R, S, T, U, V, W. 
        Rusuk disimbolkan dengan huruf kecil, misalnya p, l, t, atau dapat juga dituliskan dengan 
        dua titik sudut, misalnya PQ atau RV. Selain itu, ada juga istilah sisi atau bidang. 
        Contohnya adalah sisi PQRS, sisi PQTU, dan lainnya.
      </Paragraph>

      <Paragraph>
        Sekarang, coba kamu hitung jumlah unsur-unsur yang ada pada balok di atas.
      </Paragraph>

      <div className="space-y-4 my-6">
        <div>
          <Paragraph>Jumlah titik sudut:</Paragraph>
          <InputAnswer answerKey="8" placeholder="Jumlah titik sudut = ..." />
        </div>
        <div>
          <Paragraph>Jumlah rusuk:</Paragraph>
          <InputAnswer answerKey="12" placeholder="Jumlah rusuk = ..." />
        </div>
        <div>
          <Paragraph>Jumlah sisi:</Paragraph>
          <InputAnswer answerKey="6" placeholder="Jumlah sisi = ..." />
        </div>
      </div>

      <Paragraph>
        Kita telah mempelajari bahwa volume kubus dan balok dapat dihitung dengan rumus:
      </Paragraph>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Balok:</p>
        <MathBlock>V = p × l × t</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          p = panjang, l = lebar, t = tinggi
        </p>
      </HighlightBox>

      <Paragraph>Sebagai latihan, hitunglah volume balok berikut!</Paragraph>

      <ImageDisplay src="balok-6x4x5.png" width="300px" />

      <InputAnswer answerKey="120" placeholder="Volume balok = ..." />

      <NavFooter prev="/volume/kubus" next="/volume/prisma" />
    </div>
  );
};

export default VolumeBalokPage;
