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
        dengan ukuran tertentu. Rubik adalah objek paling sederhana, untuk menjelaskan konsep volume bangun kubus. Perhatikan <MathInline>{`\\text{Gambar 1}`}</MathInline>, jika rubik pada <MathInline>{`\\text{Gambar 1}`}</MathInline> tersusun dari kubus-kubus satuan,
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
        Selanjutnya, hitunglah banyaknya kubus satuan pada <MathInline>{`\\text{Objek 2}`}</MathInline>, dimana ukuran kubusnya adalah <MathInline>{`2 \\times 2 \\times 2.`}</MathInline>
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.KUBUS_2X2}
        urlAR={AR_URLS.KUBUS_2X2}
        scale={0.7}
        title="Objek 2. Kubus"
        showAnimation={false}
      />

      <Paragraph>Masukkan jumlah kubus satuan pada kubus <MathInline>{`2 \\times 2 \\times 2`}</MathInline>:</Paragraph>
      <InputAnswer answerKey="8" placeholder="Masukkan jawaban..." />

      <Paragraph>
        Wah, sepertinya kamu sudah mulai mahir menghitung kubus satuan! Sekarang coba kamu hitung banyaknya kubus satuan yang menyusun rubik pada <MathInline>{`\\text{Gambar 2}`}</MathInline>, rubik dengan ukuran <MathInline>{`4 \\times 4 \\times 4.`}</MathInline>
      </Paragraph>

      <ImageDisplay src="rubik4444.png" nama="Gambar 2. Kubus" scale={1}/>

      <Paragraph>Jumlah kubus satuan pada <MathInline>{`\\text{Gambar 2}`}</MathInline>:</Paragraph>
      <InputAnswer answerKey="64" placeholder="Masukkan jawaban..." />

      <Paragraph>
        Dari perhitungan yang telah kamu lakukan, dapat disimpulkan bahwa kubus yang tersusun
        dari 27 kubus satuan memiliki volume sebesar 27 satuan kubik. Sementara itu,
        kubus yang tersusun dari 64 kubus satuan memiliki volume sebesar 64 satuan kubik. Sehingga dapat disimpulkan bahwa, <b>banyaknya kubus satuan penyusun suatu kubus, merupakan volume dari kubus itu sendiri.</b>
      </Paragraph>
      <Heading3>Kubus dengan Ukuran</Heading3>

      <Paragraph>Sebelumnya kamu telah menghitung volume kubus dengan menghitung kubus satuannya. Nah sekarang bagaimana dengan kubus yang tidak terbentuk dari kubus satuan, namun memiliki ukuran panjang tertentu, seperti centimeter, milimeter, desimeter, dll. Perhatikan <MathInline>{`\\text{Gambar 3}`}</MathInline>, kubus dengan ukuran <MathInline>{`\\text{1 cm} \\times\\text{1 cm} \\times\\text{1 cm} .`}</MathInline></Paragraph>

      <ImageDisplay src="1cm.png" nama="Gambar 3. Kubus rusuk 1 cm" scale={1} />

      <Paragraph>
        Pada <MathInline>{`\\text{Gambar 3}`}</MathInline>, volume kubus dapat dihitung dengan <MathBlock>{`\\text{1 cm} \\times\\text{1 cm} \\times\\text{1 cm}=\\text{1 cm}^3.`}</MathBlock>Sedangkan pada <MathInline>{`\\text{Gambar 4}`}</MathInline>, volume kubus dapat dicari dengan <MathBlock>{`\\text{2 cm} \\times\\text{2 cm} \\times\\text{2 cm}=\\text{8 cm}^3.`}</MathBlock>
      </Paragraph>

      <ImageDisplay src="2cm.png" nama="Gambar 4. Kubus rusuk 2 cm" scale={1} />
      <Paragraph>Sebagai latihan, cobalah hitung volume kubus pada <MathInline>{`\\text{Gambar 5}`}</MathInline> berikut.</Paragraph>
      <ImageDisplay src="9cm.png" nama="Gambar 5. Kubus rusuk 9 cm" scale={1} />
      <Paragraph>Volume kubus pada <MathInline>{`\\text{Gambar 5}`}</MathInline>:</Paragraph>
      <InputAnswer answerKey="729" placeholder="Volume kubus = ..." />
      <Paragraph>Secara umum, kubus dengan panjang rusuk <MathInline>{`r,`}</MathInline> dapat dihitung volumenya dengan<MathBlock>{`V=r \\times r \\times r = r^3`}</MathBlock></Paragraph>
      <ImageDisplay src="kubusr.png" nama="Gambar 6. Kubus rusuk r" scale={1} />
      <Heading3>Contoh:</Heading3>
      <Paragraph>Diketahui sebuah kubus dengan panjang rusuk 5 cm. Hitunglah volume kubus tersebut!</Paragraph>
      <MathBlock>{`V=r \\times r \\times r \\\\ V=5\\times 5 \\times 5 \\\\ V=125 `}</MathBlock>
      <Paragraph>Jadi, volume kubus tersebut adalah <MathInline>{`125 \\text{ cm}^3`}</MathInline>.</Paragraph>
      <Heading3>Latihan Soal:</Heading3>
      <Paragraph>Diketahui sebuah kubus memiliki volume <MathInline>{`\\text{343 cm}^3`}</MathInline>, berapakah panjang rusuk kubus tersebut?</Paragraph>
      <InputAnswer answerKey="7" placeholder="Panjang rusuk = ..." />
      <Paragraph>Diketahui sebuah bak mandi dengan ukuran <MathInline>{`\\text{80 cm}\\times \\text{80 cm} \\times \\text{80 cm}`}</MathInline> terisi penuh. Jika Andi menggunakan air di bak mandi sebanyak <MathInline>{`\\text{128.000 cm}^3`}</MathInline>, berapa <MathInline>{`\\text{cm}`}</MathInline> tinggi air di bak mandi sekarang?</Paragraph>
      <ImageDisplay src="bakmandi60.png" scale={1} />
      <InputAnswer answerKey="60" placeholder="Tinggi bak mandi = ..." />




      {/* <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Kubus:</p>
        <MathBlock>{`V = s \\times s \\times s = s^3`}</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          dengan s = panjang rusuk kubus
        </p>
      </HighlightBox> */}

      <NavFooter prev="/volume" next="/volume/balok" />
    </div>
  );
};

export default VolumeKubusPage;
