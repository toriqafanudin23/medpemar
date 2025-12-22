import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import { ARButton } from '@/components/features/ARViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS, URL_ANIM } from '@/constants/urls';

const VolumeKubusPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(1);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading1>Volume Bangun Ruang Sisi Datar</Heading1>
      
      <Heading2>A. Volume Kubus</Heading2>

      <ImageDisplay src="rubik2.png" nama="Gambar 1. Rubik" />

      <Paragraph>
        Pernahkah kamu bermain rubik? Rubik merupakan permainan puzzle warna berbentuk kubus 
        dengan ukuran tertentu. Jika rubik pada Gambar 1 tersusun dari kubus satuan, 
        maka berapakah banyaknya kubus satuan yang menyusun Rubik di atas?
      </Paragraph>

      <Paragraph>
        Untuk membantumu menghitung banyaknya kubus satuan penyusun Rubik pada Gambar 1, 
        perhatikan simulasi berikut.
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.KUBUS_WARNA_ANIM}
        urlAR={AR_URLS.KUBUS_VOLUME}
        scale={0.8}
        title="Objek 1. Volume Kubus"
      />

      <Paragraph>Masukkan jumlah kubus satuan:</Paragraph>
      <InputAnswer answerKey="27" placeholder="Masukkan jawaban..." />

      <Paragraph>
        Setelah menghitung dengan bantuan Augmented Reality, tentu kamu sudah tahu jumlah 
        kubus satuan yang menyusun rubik. Selanjutnya, tanpa bantuan animasi, hitunglah 
        jumlah kubus satuan pada Objek 2 berikut!
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.KUBUS_2X2}
        urlAR={AR_URLS.KUBUS_2X2}
        scale={1.2}
        title="Objek 2. Kubus"
        showAnimation={false}
      />

      <Paragraph>Masukkan jumlah kubus satuan pada Objek 2:</Paragraph>
      <InputAnswer answerKey="8" placeholder="Masukkan jawaban..." />

      <Paragraph>
        Setelah kamu berhasil menghitung jumlah kubus dengan bantuan animasi, 
        sekarang coba hitung jumlah kubus satuan penyusun kubus pada Gambar 2.
      </Paragraph>

      <ImageDisplay src="4x4x4.png" nama="Gambar 2. Kubus" />

      <Paragraph>Jumlah kubus satuan pada Gambar 2:</Paragraph>
      <InputAnswer answerKey="64" placeholder="Masukkan jawaban..." />

      <Paragraph>
        Dari perhitungan yang telah kamu lakukan, dapat disimpulkan bahwa kubus yang tersusun 
        dari 27 kubus satuan memiliki volume sebesar 27 satuan kubik. Sementara itu, 
        kubus yang tersusun dari 64 kubus satuan memiliki volume sebesar 64 satuan kubik.
      </Paragraph>

      <Paragraph>
        Sebelumnya, kamu telah menggunakan satuan kubik untuk menyatakan volume. 
        Sekarang, bagaimana jika kubus satuan penyusun kubus memiliki panjang rusuk 1 cm?
      </Paragraph>

      <ImageDisplay src="1cm3.png" nama="Gambar 3. Kubus 1 cm³" scale={0.8} />

      <Paragraph>
        Pada Gambar 3, kubus memiliki volume 1 cm³. Sedangkan pada Gambar 4, 
        kubus memiliki volume 8 cm³.
      </Paragraph>

      <ImageDisplay src="2cm.png" nama="Gambar 4. Kubus 2 cm" scale={0.8} />

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Kubus:</p>
        <MathBlock>V = s × s × s = s³</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          dengan s = panjang rusuk kubus
        </p>
      </HighlightBox>

      <Paragraph>
        Terdapat cara yang lebih mudah untuk menghitung volume kubus tanpa harus menghitung 
        satu per satu kubus satuannya, yaitu dengan mengalikan banyaknya kubus satuan 
        penyusun rusuk panjang, rusuk lebar, dan rusuk tinggi.
      </Paragraph>

      <ImageDisplay src="4x4plt.png" nama="Gambar 5. Kubus" width="300px" />

      <div className="space-y-2 my-4">
        <Paragraph>p: banyaknya kubus satuan yang menyusun rusuk panjang.</Paragraph>
        <Paragraph>l: banyaknya kubus satuan yang menyusun rusuk lebar.</Paragraph>
        <Paragraph>t: banyaknya kubus satuan yang menyusun rusuk tinggi.</Paragraph>
      </div>

      <MathBlock>V = p × l × t = 4 × 4 × 4 = 64 satuan³</MathBlock>

      <Paragraph>
        Jadi, volume kubus pada Gambar 5 adalah 64 satuan³.
      </Paragraph>

      <Paragraph>
        Pada kubus, banyaknya kubus satuan yang menyusun rusuk panjang, rusuk lebar, 
        dan rusuk tinggi jumlahnya sama, sehingga untuk mempermudah perhitungan digunakanlah rumus:
      </Paragraph>

      <HighlightBox variant="info">
        <MathBlock>V = r × r × r = r³</MathBlock>
        <p className="text-sm text-muted-foreground text-center mt-2">
          r = jumlah kubus satuan penyusun rusuk kubus (panjang, lebar, atau tinggi)
        </p>
      </HighlightBox>

      <ImageDisplay src="4x4rrr.png" nama="Gambar 6. Kubus" width="300px" />

      <Paragraph>Sebagai latihan, hitunglah volume kubus berikut!</Paragraph>
      <ImageDisplay src="kubus-9x9x9x.png" />
      <InputAnswer answerKey="729" placeholder="Volume kubus = ..." />

      <NavFooter prev="/volume" next="/volume/balok" />
    </div>
  );
};

export default VolumeKubusPage;
