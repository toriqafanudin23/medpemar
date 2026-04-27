import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const LuasLimasPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(8);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in space-y-6 pb-8">
      <div>
        <Heading1>Luas Permukaan Bangun Ruang</Heading1>
        <Heading2>D. Luas Permukaan Limas</Heading2>
      </div>

      <Heading3>Jaring-jaring Limas</Heading3>
      <Paragraph>Sama seperti bangun ruang lainnya, limas juga memiliki jaring-jaring yang jika dilipat akan membentuk limas utuh. Limas terdiri dari satu buah bidang alas (segi-n) dan sisi-sisi tegak yang semuanya berbentuk segitiga yang saling bertemu di satu titik puncak. Perhatikan simulasi jaring-jaring limas pada <MathInline>{`\\text{Objek 9}`}</MathInline> berikut!</Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_LIMAS}
        urlAR={AR_URLS.LIMAS_JARING}
        scale={0.5}
        title="Objek 9. Jaring-jaring Limas"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageDisplay src="jaringlimassegi4.png" scale={1} nama="Gambar 25. Jaring-jaring Limas Segiempat" />
        <ImageDisplay src="jaringlimassegi3.png" scale={1} nama="Gambar 26. Jaring-jaring Limas Segitiga" />
      </div>

      <Paragraph>Coba perhatikan baik-baik bentuk segitiga pada sisi-sisi tegak limas. Jika alas limas berbentuk poligon beraturan (misal: persegi atau segitiga sama sisi) dan puncak limas tepat berada di tengah, maka semua segitiga tegaknya akan memiliki ukuran yang sama persis (kongruen).</Paragraph>

      <Heading3>Menghitung Luas Permukaan Limas</Heading3>
      <Paragraph>Mencari luas permukaan limas pada dasarnya adalah menjumlahkan luas alas dengan luas seluruh sisi tegak (selimut) limas tersebut.</Paragraph>
      <ImageDisplay src="ilustrasiluaslimas.png" nama="Gambar 27. Ilustrasi Luas Permukaan Limas" />
      
      <Paragraph>Berdasarkan <MathInline>{`\\text{Gambar 27}`}</MathInline>, luas permukaan limas dirumuskan sebagai berikut:</Paragraph>
      
      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Limas:</p>
        <MathBlock>{`L = \\text{Luas Alas} + \\text{Jumlah Luas Seluruh Sisi Tegak}`}</MathBlock>
      </HighlightBox>

      <Heading3>Contoh Soal</Heading3>
      <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
        <Paragraph>Sebuah limas <MathInline>{`\\text{T.ABCD}`}</MathInline> memiliki alas berbentuk persegi dengan panjang sisi <MathInline>{`10 \\text{ cm}`}</MathInline>. Jika tinggi sisi tegak (segitiga) adalah <MathInline>{`12 \\text{ cm}`}</MathInline>, berapakah luas permukaan limas tersebut?</Paragraph>
        <p className="font-semibold text-primary mt-4 mb-2">Penyelesaian:</p>
        <Paragraph className="mb-2">Luas Alas (Persegi):</Paragraph>
        <MathBlock>{`\\text{Luas Alas} = 10 \\times 10 = 100`}</MathBlock>
        <Paragraph className="mb-2">Luas 4 Sisi Tegak (Segitiga):</Paragraph>
        <MathBlock>{`\\text{Luas 4 Segitiga} = 4 \\times (\\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi}) \\\\ = 4 \\times (\\frac{1}{2} \\times 10 \\times 12) = 4 \\times 60 = 240`}</MathBlock>
        <Paragraph className="mb-2">Total Luas Permukaan:</Paragraph>
        <MathBlock>{`L = \\text{Luas Alas} + \\text{Luas 4 Segitiga} \\\\ L = 100 + 240 = 340`}</MathBlock>
        <Paragraph>Jadi, luas permukaan limas tersebut adalah <MathInline>{`340 \\text{ cm}^2`}</MathInline>.</Paragraph>
      </div>

      <Heading3>Latihan Soal</Heading3>
      <Paragraph>Kerjakan soal-soal di bawah ini untuk menguji pemahamanmu! Soal disusun dari tingkat yang paling mudah hingga HOTS.</Paragraph>

      <div className="space-y-6">
        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-bold mb-2">Level 1: Mudah</span><br/>
            <b>Soal 1:</b> Sebuah limas memiliki alas berbentuk persegi dengan panjang sisi <MathInline>{`8 \\text{ cm}`}</MathInline>. Jika tinggi segitiga pada sisi tegaknya adalah <MathInline>{`10 \\text{ cm}`}</MathInline>, berapakah luas permukaan limas tersebut?
          </Paragraph>
          <InputAnswer answerKey="224" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 2: Sedang</span><br/>
            <b>Soal 2:</b> Sebuah limas alasnya berbentuk persegi dengan panjang sisi <MathInline>{`6 \\text{ cm}`}</MathInline>. Diketahui <b>tinggi limas</b> tersebut adalah <MathInline>{`4 \\text{ cm}`}</MathInline>. Berapakah luas permukaannya? (Petunjuk: Cari tinggi segitiga sisi tegaknya terlebih dahulu dengan rumus Pythagoras!)
          </Paragraph>
          <InputAnswer answerKey="96" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 3: Sedang</span><br/>
            <b>Soal 3:</b> Sebuah limas segitiga sembarang diketahui memiliki luas alas <MathInline>{`25 \\text{ cm}^2`}</MathInline>. Jika luas masing-masing sisi tegaknya berturut-turut adalah <MathInline>{`10 \\text{ cm}^2`}</MathInline>, <MathInline>{`12 \\text{ cm}^2`}</MathInline>, dan <MathInline>{`18 \\text{ cm}^2`}</MathInline>, berapakah luas permukaan total limas tersebut?
          </Paragraph>
          <InputAnswer answerKey="65" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold mb-2">Level 4: Sulit</span><br/>
            <b>Soal 4:</b> Atap sebuah menara berbentuk limas segiempat beraturan. Panjang sisi alas atap tersebut adalah <MathInline>{`8 \\text{ meter}`}</MathInline> dan tinggi segitiga pada sisi tegaknya adalah <MathInline>{`5 \\text{ meter}`}</MathInline>. Atap tersebut hanya akan dipasangi genteng pada bagian sisi tegaknya (selimutnya) saja. Berapa meter persegi (<MathInline>{`\\text{m}^2`}</MathInline>) luas atap yang akan dipasangi genteng?
          </Paragraph>
          <InputAnswer answerKey="80" placeholder="Luas genteng = ..." satuan="m²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold mb-2">Level 5: HOTS</span><br/>
            <b>Soal 5:</b> Budi membuat miniatur piramida Mesir berbentuk limas segiempat beraturan. Alas miniatur tersebut berupa persegi dengan panjang sisi <MathInline>{`12 \\text{ cm}`}</MathInline> dan tinggi piramida adalah <MathInline>{`8 \\text{ cm}`}</MathInline>. Budi ingin melapisi <b>seluruh</b> permukaan piramida tersebut (termasuk bagian bawah alasnya) dengan kertas emas. Berapa sentimeter persegi (<MathInline>{`\\text{cm}^2`}</MathInline>) luas kertas emas yang dibutuhkan Budi?
          </Paragraph>
          <InputAnswer answerKey="384" placeholder="Luas kertas = ..." satuan="cm²" />
        </div>
      </div>

      <div className="pt-6">
        <NavFooter prev="/luas-permukaan/prisma" next="/quiz/surface" nextLabel="Quiz Luas Permukaan" />
      </div>
    </div>
  );
};

export default LuasLimasPage;
