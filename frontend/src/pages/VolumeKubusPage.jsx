import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Paragraph, HighlightBox, MathBlock, MathInline, Heading3 } from '@/components/ui/Typography';
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

      <ImageDisplay src="rubik4.png" nama="Gambar 1. Rubik" />
      <Heading3>Menghitung Kubus Satuan</Heading3>


      <Paragraph>
        Pernahkah kamu bermain rubik? Rubik merupakan permainan puzzle warna berbentuk kubus
        dengan ukuran tertentu. Rubik adalah objek paling sederhana, untuk menjelaskan konsep volume bangun kubus. Perhatikan Gambar 1, jika rubik pada Gambar 1 tersusun dari kubus-kubus satuan,
        maka berapakah banyaknya kubus satuan yang menyusun Rubik di tersebut?
      </Paragraph>
      {/* <MathBlock>
        {`a^2 + b^2 = c^2`}
      </MathBlock>
      <Paragraph>
        Jika <MathInline>{`a = 3 \\text{ dan } b = \\sqrt{5}, \\text{ maka hasil dari } a+b \\text{ adalah}`}</MathInline>, maka
      </Paragraph> */}

      <Paragraph>
        Simulasi berikut bisa kamu gunakan untuk menghitung banyaknya kubus satuan pada rubik <MathInline>{`3 \\times 3 \\times 3.`}</MathInline>
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.KUBUS_WARNA_ANIM}
        urlAR={AR_URLS.KUBUS_VOLUME}
        scale={0.5}
        title="Objek 1. Volume Kubus"
      />

      {/* AR Button untuk melihat dengan marker */}
      <div className="flex justify-center my-4">
        <ARButton
          modelPath={URL_ANIM + MODELS.KUBUS_WARNA_ANIM}
          markerType="hiro"
          title="Volume Kubus AR"
        />
      </div>

      <Paragraph>Setelah selesai menghitung banyaknya kubus satuan pada rubik, masukan jawabannya pada kolom berikut: </Paragraph>
      <InputAnswer answerKey="27" placeholder="Masukkan jawaban..." />

      <Paragraph>
        Selanjutnya, hitunglah banyaknya kubus satuan pada Objek 2, dimana ukuran kubusnya adalah <MathInline>{`2 \\times 2 \\times 2 \\text{ satuan}^3.`}</MathInline>
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.KUBUS_2X2}
        urlAR={AR_URLS.KUBUS_2X2}
        scale={0.7}
        title="Objek 2. Kubus 2x2x2"
        showAnimation={false}
      />

      <Paragraph>Masukkan jumlah kubus satuan pada kubus <MathInline>{`2 \\times 2 \\times 2`}</MathInline>:</Paragraph>
      <InputAnswer answerKey="8" placeholder="Masukkan jawaban..." />

      <Paragraph>
        Wah, sepertinya kamu sudah mulai mahir menghitung kubus satuan! Sekarang coba kamu hitung banyaknya kubus satuan pada Gambar 2, kubus dengan ukuran <MathInline>{`4 \\times 4 \\times 4 \\text{ satuan}^3.`}</MathInline>
      </Paragraph>

      <ImageDisplay src="kubussatuan444.png" nama="Gambar 2. Kubus" />

      <Paragraph>Jumlah kubus satuan pada Gambar 2:</Paragraph>
      <InputAnswer answerKey="64" placeholder="Masukkan jawaban..." />

      <Paragraph>
        Dari perhitungan yang telah kamu lakukan, dapat disimpulkan bahwa kubus yang tersusun
        dari 27 kubus satuan memiliki volume sebesar 27 satuan kubik. Sementara itu,
        kubus yang tersusun dari 64 kubus satuan memiliki volume sebesar 64 satuan kubik. Sehingga dapat diartikan bahwa, <b>banyaknya kubus satuan penyusun suatu kubus, merupakan volume dari kubus itu sendiri.</b>
      </Paragraph>
      <Heading3>Kubus dengan Ukuran</Heading3>

      <Paragraph>Sebelumnya kamu telah menghitung volume kubus dengan menghitung kubus satuannya. Nah sekarang bagaimana dengan kubus yang tidak terbentuk dari kubus satuan, namun memiliki ukuran panjang tertentu, seperti centimeter, milimeter, desimeter, dll. Perhatikan Gambar 3, kubus dengan ukuran <MathInline>{`\\text{1 cm} \\times\\text{1 cm} \\times\\text{1 cm} .`}</MathInline></Paragraph>

      <ImageDisplay src="1cm.png" nama="Gambar 3. Kubus 1 cm³" scale={0.8} />

      <Paragraph>
        Pada Gambar 3, volume kubus dapat dihitung dengan <MathBlock>{`\\text{1 cm} \\times\\text{1 cm} \\times\\text{1 cm}=\\text{1 cm}^3.`}</MathBlock>Sedangkan pada Gambar 4, volume kubus dapat dicari dengan <MathBlock>{`\\text{2 cm} \\times\\text{2 cm} \\times\\text{2 cm}=\\text{8 cm}^3.`}</MathBlock>
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

      <ImageDisplay src="kubusplt.png" nama="Gambar 5. Kubus" width="300px" />

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

      <ImageDisplay src="kubusrrr.png" nama="Gambar 6. Kubus" width="300px" />

      <Paragraph>Sebagai latihan, hitunglah volume kubus berikut!</Paragraph>
      <ImageDisplay src="kubus9cm.png" />
      <InputAnswer answerKey="729" placeholder="Volume kubus = ..." />

      <NavFooter prev="/volume" next="/volume/balok" />
    </div>
  );
};

export default VolumeKubusPage;
