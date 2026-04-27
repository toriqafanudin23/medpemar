import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS } from '@/constants/urls';

const LuasPrismaPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(7);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in space-y-6 pb-8">
      <div>
        <Heading1>Luas Permukaan Bangun Ruang</Heading1>
        <Heading2>C. Luas Permukaan Prisma</Heading2>
      </div>

      <Heading3>Jaring-jaring Prisma</Heading3>
      <Paragraph>Variasi jaring-jaring prisma tentu lebih banyak daripada kubus ataupun balok. Hal ini dikarenakan 
        bentuk alas prisma yang bermacam-macam, mulai dari segi-n beraturan, trapesium, hingga segi-n tidak beraturan. Sebagai contoh, 
        simulasi jaring-jaring prisma segitiga tersaji pada <MathInline>{`\\text{Objek 8}`}</MathInline> berikut.</Paragraph>

      <Viewer3D
        modelPath={MODELS.JARING_PRISMA}
        urlAR={AR_URLS.PRISMA_JARING}
        scale={0.5}
        title="Objek 8. Jaring-jaring Prisma Segitiga"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ImageDisplay src="jaringprismasegi3ke2.png" scale={1} />
        <ImageDisplay src="jaringprismasegi3.png" scale={1} nama="Gambar 22. Prisma Segitiga" />
        <ImageDisplay src="jaringprismasegi5.png" scale={1} nama="Gambar 23. Prisma Segilima" />
      </div>

      <Paragraph>Tentu semakin rumit bentuk alas prisma, semakin rumit pula jaring-jaring yang terbentuk. Sebagai tantangan, cobalah kamu gambar 
        jaring-jaring prisma segitiga yang polanya berbeda dari contoh yang sudah ada!</Paragraph>

      <Heading3>Menghitung Luas Permukaan Prisma</Heading3>
      <Paragraph>Untuk memahami cara mencari luas permukaan prisma secara umum, perhatikanlah ilustrasi jaring-jaring prisma berikut!</Paragraph>
      <ImageDisplay src="ilustrasiluasprisma.png" nama="Gambar 24. Ilustrasi Luas Permukaan Prisma" />
      <Paragraph>Dari <MathInline>{`\\text{Gambar 24}`}</MathInline> terlihat bahwa alas dan tutup prisma memiliki bentuk dan luas yang kongruen (kembar). Selain itu, panjang gabungan dari persegi panjang yang merupakan sisi tegak <MathInline>{`(a+b+c)`}</MathInline> sebenarnya persis sama dengan keliling alas prisma. 
        Oleh karena itu, luas permukaan prisma dapat dirumuskan secara elegan sebagai berikut:</Paragraph>
      
      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Prisma:</p>
        <MathBlock>{`L = 2 \\times \\text{Luas Alas} + (\\text{Keliling Alas} \\times \\text{Tinggi Prisma})`}</MathBlock>
      </HighlightBox>
      <Paragraph>Rumus di atas berlaku universal untuk prisma dengan bentuk alas apa pun.</Paragraph>

      <Heading3>Contoh Soal</Heading3>
      <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
        <Paragraph>Sebuah prisma <MathInline>{`\\text{ABC.DEF}`}</MathInline> mempunyai alas berbentuk segitiga siku-siku. Diketahui panjang <MathInline>{`\\text{AB} = 3 \\text{ cm dan BC} = 4 \\text{ cm}`}</MathInline>. Jika sudut <MathInline>{`\\text{ABC}`}</MathInline> siku-siku (<MathInline>{`90^{\\circ}`}</MathInline>) dan tinggi prisma adalah <MathInline>{`7 \\text{ cm}`}</MathInline>, tentukanlah luas permukaan prisma tersebut!</Paragraph>
        <ImageDisplay src="alasprismasegi3.png" scale={0.7} />
        <p className="font-semibold text-primary mt-4 mb-2">Penyelesaian:</p>
        <Paragraph className="mb-2">Pertama, cari sisi miring alas (AC) dengan rumus Pythagoras:</Paragraph>
        <MathBlock>{`\\text{AC}^2 = 3^2 + 4^2 = 9 + 16 = 25 \\implies \\text{AC} = 5`}</MathBlock>
        <Paragraph className="mb-2">Selanjutnya, hitung keliling alas dan masukkan ke rumus luas:</Paragraph>
        <MathBlock>{`\\text{Keliling} = 3 + 4 + 5 = 12 \\\\ L = 2 \\times \\text{Luas Alas} + \\text{Keliling} \\times t \\\\ L = 2 \\times (\\frac{1}{2} \\times 3 \\times 4) + (12 \\times 7) \\\\ L = 12 + 84 = 96`}</MathBlock>
        <Paragraph>Jadi, luas permukaan prisma tersebut adalah <MathInline>{`96 \\text{ cm}^2`}</MathInline>.</Paragraph>
      </div>

      <Heading3>Latihan Soal</Heading3>
      <Paragraph>Kerjakan soal-soal di bawah ini untuk menguji pemahamanmu! Soal disusun dari tingkat yang paling mudah hingga HOTS.</Paragraph>

      <div className="space-y-6">
        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-bold mb-2">Level 1: Mudah</span><br/>
            <b>Soal 1:</b> Sebuah prisma memiliki alas berbentuk segitiga siku-siku dengan panjang sisi penyiku <MathInline>{`3 \\text{ cm}`}</MathInline> dan <MathInline>{`4 \\text{ cm}`}</MathInline>, serta sisi miring <MathInline>{`5 \\text{ cm}`}</MathInline>. Jika tinggi prisma tersebut <MathInline>{`10 \\text{ cm}`}</MathInline>, berapakah luas permukaannya?
          </Paragraph>
          <InputAnswer answerKey="132" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 2: Sedang</span><br/>
            <b>Soal 2:</b> Sebuah prisma alasnya berbentuk belah ketupat dengan panjang diagonal masing-masing <MathInline>{`12 \\text{ cm}`}</MathInline> dan <MathInline>{`16 \\text{ cm}`}</MathInline>. Panjang sisi belah ketupat tersebut adalah <MathInline>{`10 \\text{ cm}`}</MathInline>. Jika tinggi prisma adalah <MathInline>{`10 \\text{ cm}`}</MathInline>, berapakah luas permukaannya?
          </Paragraph>
          <InputAnswer answerKey="592" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 3: Sedang</span><br/>
            <b>Soal 3:</b> Alas sebuah prisma berbentuk persegi (balok) dengan panjang sisi alas <MathInline>{`5 \\text{ cm}`}</MathInline>. Jika tinggi prisma tersebut adalah <MathInline>{`8 \\text{ cm}`}</MathInline>, berapakah luas permukaannya?
          </Paragraph>
          <InputAnswer answerKey="210" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold mb-2">Level 4: Sulit</span><br/>
            <b>Soal 4:</b> Pak Budi membuat sebuah papan nama meja yang berbentuk prisma segitiga siku-siku dari karton utuh (tertutup di semua sisi). Sisi siku-siku alasnya <MathInline>{`6 \\text{ cm}`}</MathInline> dan <MathInline>{`8 \\text{ cm}`}</MathInline> (sisi miringnya <MathInline>{`10 \\text{ cm}`}</MathInline>). Panjang papan nama tersebut (<MathInline>{`tinggi prisma`}</MathInline>) adalah <MathInline>{`20 \\text{ cm}`}</MathInline>. Berapakah luas minimal karton yang dibutuhkan Pak Budi?
          </Paragraph>
          <InputAnswer answerKey="528" placeholder="Luas karton = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold mb-2">Level 5: HOTS</span><br/>
            <b>Soal 5:</b> Sebuah tenda pramuka berbentuk prisma segitiga memiliki pintu masuk berupa segitiga sama kaki. Lebar pintu tenda di bagian bawah adalah <MathInline>{`3 \\text{ meter}`}</MathInline>, tinggi pintu <MathInline>{`2 \\text{ meter}`}</MathInline>, dan panjang kain atap miringnya (sisi miring segitiga) adalah <MathInline>{`2,5 \\text{ meter}`}</MathInline>. Panjang tenda ke belakang adalah <MathInline>{`4 \\text{ meter}`}</MathInline>. Jika alas tenda yang menyentuh tanah tidak menggunakan kain, berapakah luas total kain yang digunakan untuk membuat tenda tersebut? (petunjuk: hanya terdiri dari 2 segitiga depan-belakang dan 2 persegi panjang atap miring)
          </Paragraph>
          <InputAnswer answerKey="26" placeholder="Luas kain = ..." satuan="m²" />
        </div>
      </div>

      <div className="pt-6">
        <NavFooter prev="/luas-permukaan/balok" next="/luas-permukaan/limas" />
      </div>
    </div>
  );
};

export default LuasPrismaPage;
