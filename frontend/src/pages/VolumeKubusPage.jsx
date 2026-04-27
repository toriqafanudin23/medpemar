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
    <div className="max-w-3xl mx-auto animate-fade-in space-y-6 pb-8">
      <div>
        <Heading1>Volume Bangun Ruang Sisi Datar</Heading1>
        <Heading2>A. Volume Kubus</Heading2>
      </div>

      <ImageDisplay src="rubik4.png" nama="Gambar 1. Rubik" />
      
      <Heading3>Menghitung Kubus Satuan</Heading3>
      <Paragraph>
        Pernahkah kamu bermain rubik? Rubik merupakan permainan <i>puzzle</i> warna berbentuk kubus
        dengan ukuran tertentu. Rubik adalah objek paling sederhana yang dapat digunakan untuk menjelaskan konsep volume bangun kubus. Perhatikan <MathInline>{`\\text{Gambar 1}`}</MathInline>! Jika rubik pada <MathInline>{`\\text{Gambar 1}`}</MathInline> tersusun dari kubus-kubus satuan,
        berapakah banyak kubus satuan yang menyusun rubik tersebut?
      </Paragraph>

      <Paragraph>
        Simulasi interaktif berikut bisa kamu gunakan untuk membantu menghitung banyak kubus satuan pada rubik berukuran <MathInline>{`3 \\times 3 \\times 3.`}</MathInline>
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

      <Paragraph>Setelah selesai menghitung banyak kubus satuan pada rubik tersebut, masukkan jawabanmu pada kolom berikut: </Paragraph>
      <InputAnswer answerKey="27" placeholder="Masukkan jawaban..." satuan="kubus" />

      <Paragraph>
        Selanjutnya, mari kita hitung banyak kubus satuan pada <MathInline>{`\\text{Objek 2}`}</MathInline>, di mana ukuran kubusnya adalah <MathInline>{`2 \\times 2 \\times 2.`}</MathInline>
      </Paragraph>

      <Viewer3D
        modelPath={MODELS.KUBUS_2X2}
        urlAR={AR_URLS.KUBUS_2X2}
        scale={0.7}
        title="Objek 2. Kubus"
        showAnimation={false}
      />

      <Paragraph>Masukkan jumlah kubus satuan pada kubus <MathInline>{`2 \\times 2 \\times 2`}</MathInline>:</Paragraph>
      <InputAnswer answerKey="8" placeholder="Masukkan jawaban..." satuan="kubus" />

      <Paragraph>
        Wah, sepertinya kamu sudah mulai mahir! Sekarang coba kamu hitung banyak kubus satuan yang menyusun rubik pada <MathInline>{`\\text{Gambar 2}`}</MathInline>, yaitu rubik dengan ukuran <MathInline>{`4 \\times 4 \\times 4.`}</MathInline>
      </Paragraph>

      <ImageDisplay src="rubik4444.png" nama="Gambar 2. Kubus" scale={1}/>

      <Paragraph>Jumlah kubus satuan pada <MathInline>{`\\text{Gambar 2}`}</MathInline>:</Paragraph>
      <InputAnswer answerKey="64" placeholder="Masukkan jawaban..." satuan="kubus" />

      <Paragraph>
        Dari perhitungan yang telah kamu lakukan, dapat disimpulkan bahwa kubus yang tersusun
        dari 27 kubus satuan memiliki volume sebesar 27 satuan kubik. Sementara itu,
        kubus yang tersusun dari 64 kubus satuan memiliki volume sebesar 64 satuan kubik. Dengan demikian, <b>banyaknya kubus satuan penyusun suatu kubus merupakan representasi dari volume kubus itu sendiri.</b>
      </Paragraph>

      <Heading3>Menghitung Volume Berdasarkan Panjang Rusuk</Heading3>

      <Paragraph>Sebelumnya kamu telah memahami konsep volume kubus dengan menghitung jumlah kubus satuannya. Namun, bagaimana jika kubus tersebut tidak terbentuk dari kubus satuan dan memiliki ukuran panjang tertentu, seperti sentimeter, milimeter, atau desimeter? Perhatikan <MathInline>{`\\text{Gambar 3}`}</MathInline>, yaitu kubus dengan ukuran rusuk <MathInline>{`\\text{1 cm}.`}</MathInline></Paragraph>

      <ImageDisplay src="1cm.png" nama="Gambar 3. Kubus rusuk 1 cm" scale={1} />

      <Paragraph>
        Pada <MathInline>{`\\text{Gambar 3}`}</MathInline>, volume kubus dapat dihitung dengan cara <MathBlock>{`V = \\text{1 cm} \\times \\text{1 cm} \\times \\text{1 cm} = \\text{1 cm}^3.`}</MathBlock>Sedangkan pada <MathInline>{`\\text{Gambar 4}`}</MathInline>, volume kubus dapat dicari dengan cara <MathBlock>{`V = \\text{2 cm} \\times \\text{2 cm} \\times \\text{2 cm} = \\text{8 cm}^3.`}</MathBlock>
      </Paragraph>

      <ImageDisplay src="2cm.png" nama="Gambar 4. Kubus rusuk 2 cm" scale={1} />
      
      <Paragraph>Sebagai latihan, cobalah hitung volume kubus pada <MathInline>{`\\text{Gambar 5}`}</MathInline> berikut ini.</Paragraph>
      
      <ImageDisplay src="9cm.png" nama="Gambar 5. Kubus rusuk 9 cm" scale={1} />
      
      <Paragraph>Volume kubus pada <MathInline>{`\\text{Gambar 5}`}</MathInline>:</Paragraph>
      <InputAnswer answerKey="729" placeholder="Volume kubus = ..." satuan="cm³" />
      
      <Paragraph>Secara umum, jika sebuah kubus memiliki panjang rusuk <MathInline>{`r,`}</MathInline> maka volumenya dapat dihitung dengan rumus:</Paragraph>
      
      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Kubus:</p>
        <MathBlock>{`V = r \\times r \\times r = r^3`}</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          dengan <i>r</i> = panjang rusuk kubus
        </p>
      </HighlightBox>

      <ImageDisplay src="kubusr.png" nama="Gambar 6. Kubus rusuk r" scale={1} />
      
      <Heading3>Contoh Soal</Heading3>
      <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
        <Paragraph>Diketahui sebuah kubus dengan panjang rusuk 5 cm. Hitunglah volume kubus tersebut!</Paragraph>
        <p className="font-semibold text-primary mt-4 mb-2">Penyelesaian:</p>
        <MathBlock>{`V=r \\times r \\times r \\\\ V=5 \\times 5 \\times 5 \\\\ V=125 `}</MathBlock>
        <Paragraph>Jadi, volume kubus tersebut adalah <MathInline>{`125 \\text{ cm}^3`}</MathInline>.</Paragraph>
      </div>

      <Heading3>Latihan Soal</Heading3>
      <Paragraph>Kerjakan soal-soal di bawah ini untuk menguji pemahamanmu! Soal disusun dari tingkat yang paling mudah hingga HOTS (Higher Order Thinking Skills).</Paragraph>

      <div className="space-y-6">
        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-bold mb-2">Level 1: Mudah</span><br/>
            <b>Soal 1:</b> Sebuah kotak mainan berbentuk kubus memiliki panjang rusuk <MathInline>{`12 \\text{ cm}`}</MathInline>. Berapakah volume kotak mainan tersebut?
          </Paragraph>
          <InputAnswer answerKey="1728" placeholder="Volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 2: Sedang</span><br/>
            <b>Soal 2:</b> Sebuah akuarium berbentuk kubus dapat menampung air secara penuh sebanyak <MathInline>{`3.375 \\text{ cm}^3`}</MathInline>. Berapakah panjang rusuk akuarium tersebut?
          </Paragraph>
          <InputAnswer answerKey="15" placeholder="Panjang rusuk = ..." satuan="cm" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 3: Sedang</span><br/>
            <b>Soal 3:</b> Diketahui jumlah panjang seluruh rusuk sebuah kubus adalah <MathInline>{`108 \\text{ cm}`}</MathInline>. Berapakah volume dari kubus tersebut?
          </Paragraph>
          <InputAnswer answerKey="729" placeholder="Volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold mb-2">Level 4: Sulit</span><br/>
            <b>Soal 4:</b> Terdapat dua buah kubus. Kubus pertama memiliki panjang rusuk <MathInline>{`6 \\text{ cm}`}</MathInline> dan kubus kedua memiliki panjang rusuk <MathInline>{`10 \\text{ cm}`}</MathInline>. Berapakah selisih volume kedua kubus tersebut?
          </Paragraph>
          <InputAnswer answerKey="784" placeholder="Selisih volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold mb-2">Level 5: HOTS</span><br/>
            <b>Soal 5:</b> Sebuah bak mandi berbentuk kubus memiliki ukuran panjang rusuk bagian dalam <MathInline>{`80 \\text{ cm}`}</MathInline> dan sedang terisi air penuh. Jika Andi menggunakan air dari bak mandi tersebut sebanyak <MathInline>{`128.000 \\text{ cm}^3`}</MathInline>, berapakah tinggi sisa air di dalam bak mandi tersebut sekarang?
          </Paragraph>
          <ImageDisplay src="bakmandi60.png" scale={1} />
          <InputAnswer answerKey="60" placeholder="Tinggi air sekarang = ..." satuan="cm" />
        </div>
      </div>

      <div className="pt-6">
        <NavFooter prev="/volume" next="/volume/balok" />
      </div>
    </div>
  );
};

export default VolumeKubusPage;
