import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
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
    <div className="max-w-3xl mx-auto animate-fade-in space-y-6 pb-8">
      <div>
        <Heading1>Luas Permukaan Bangun Ruang</Heading1>
        <Heading2>B. Luas Permukaan Balok</Heading2>
      </div>

      <Heading3>Jaring-jaring Balok</Heading3>
      <Paragraph>Terdapat sedikit perbedaan antara jaring-jaring balok dengan jaring-jaring kubus. Pada jaring-jaring kubus sisi-sisinya selalu berbentuk persegi, sedangkan
       pada jaring-jaring balok sisi-sisinya dapat berupa persegi panjang (meski beberapa di antaranya bisa saja berbentuk persegi). Perhatikan beberapa
      variasi jaring-jaring balok pada simulasi berikut!</Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.JARING_BALOK}
        urlAR={AR_URLS.BALOK_JARING}
        scale={0.6}
        title="Objek 7. Jaring-jaring Balok"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageDisplay src="jaringjaringbalok1.png" scale={1} />
        <ImageDisplay src="jaringjaringbalok2.png" scale={1} />
      </div>
      <p className="text-center text-sm text-muted-foreground mt-2">Gambar 21. Contoh Jaring-jaring Balok</p>

      <Paragraph>Tentu masih banyak lagi contoh jaring-jaring balok lainnya, mengingat perbandingan panjang, lebar, dan tinggi balok bisa sangat bervariasi. Nah, sekarang coba kamu buat sketsa jaring-jaring balok 
        dengan ukuran panjang 4 cm, lebar 3 cm, dan tinggi 2 cm di atas kertas!</Paragraph>

      <Heading3>Menghitung Luas Permukaan Balok</Heading3>
      <Paragraph>Untuk memahami cara mencari luas permukaan balok, coba kamu perhatikan ilustrasi pada <MathInline>{`\\text{Gambar 22}`}</MathInline> berikut.</Paragraph>
      <ImageDisplay src="ilustrasiluasbalok.png" nama="Gambar 22. Ilustrasi Luas Permukaan Balok" />
      
      <Paragraph>Dari <MathInline>{`\\text{Gambar 22}`}</MathInline> terlihat bahwa sebuah balok memiliki 3 pasang sisi yang masing-masing berukuran kongruen (sama dan sebangun). Pertama, ada pasangan sisi bawah dan atas dengan luas <MathInline>{`p \\times l`}</MathInline>. Kedua, ada pasangan sisi depan dan belakang dengan luas <MathInline>{`p \\times t`}</MathInline>. Ketiga, ada pasangan sisi samping kiri dan kanan dengan luas <MathInline>{`l \\times t`}</MathInline>. Karena masing-masing pasangan terdiri dari 2 sisi, maka luas permukaan balok dapat dituliskan sebagai:</Paragraph>
       
       <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Balok:</p>
        <MathBlock>{`L = 2(p \\times l) + 2(p \\times t) + 2(l \\times t) \\\\ L = 2 \\times (pl + pt + lt)`}</MathBlock>
      </HighlightBox>

       <Heading3>Contoh Soal</Heading3>
       <div className="space-y-6">
         <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
           <Paragraph>Diketahui sebuah balok memiliki ukuran panjang 4 cm, lebar 3 cm, dan tinggi 2 cm. Berapakah luas permukaan balok tersebut?</Paragraph>
           <p className="font-semibold text-primary mt-4 mb-2">Penyelesaian:</p>
           <MathBlock>{`L = 2(pl + pt + lt) \\\\ L = 2(4 \\times 3 + 4 \\times 2 + 3 \\times 2) \\\\ L = 2(12 + 8 + 6) \\\\ L = 2(26) = 52`}</MathBlock>
           <Paragraph>Jadi, luas permukaan balok tersebut adalah <MathInline>{`52 \\text{ cm}^2`}</MathInline>.</Paragraph>
         </div>

         <div className="bg-warning/5 p-5 rounded-xl border border-warning/20">
           <div className="flex items-center gap-2 mb-2">
             <span className="bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold">Level 4: Sulit</span>
           </div>
           <Paragraph>Sebuah kotak balok memiliki perbandingan panjang : lebar : tinggi = 4 : 3 : 2. Jika luas permukaan balok tersebut adalah <MathInline>{`468 \\text{ cm}^2`}</MathInline>, berapakah volumenya?</Paragraph>
           <p className="font-semibold text-warning mt-4 mb-2">Penyelesaian:</p>
           <Paragraph className="mb-2">Misalkan <MathInline>{`p = 4x`}</MathInline>, <MathInline>{`l = 3x`}</MathInline>, dan <MathInline>{`t = 2x`}</MathInline>. Masukkan ke rumus luas permukaan:</Paragraph>
           <MathBlock>{`L = 2(pl + pt + lt) \\\\ 468 = 2((4x)(3x) + (4x)(2x) + (3x)(2x)) \\\\ 468 = 2(12x^2 + 8x^2 + 6x^2) \\\\ 468 = 2(26x^2) = 52x^2`}</MathBlock>
           <Paragraph className="mb-2">Selesaikan persamaan tersebut untuk mencari nilai <MathInline>{`x`}</MathInline>:</Paragraph>
           <MathBlock>{`x^2 = \\frac{468}{52} = 9 \\implies x = 3`}</MathBlock>
           <Paragraph className="mb-2">Maka ukuran aslinya adalah <MathInline>{`p = 12`}</MathInline>, <MathInline>{`l = 9`}</MathInline>, dan <MathInline>{`t = 6`}</MathInline>. Volumenya adalah:</Paragraph>
           <MathBlock>{`V = p \\times l \\times t = 12 \\times 9 \\times 6 = 648 \\text{ cm}^3`}</MathBlock>
           <Paragraph>Jadi, volume balok tersebut adalah <MathInline>{`648 \\text{ cm}^3`}</MathInline>.</Paragraph>
         </div>

         <div className="bg-destructive/5 p-5 rounded-xl border border-destructive/20">
           <div className="flex items-center gap-2 mb-2">
             <span className="bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold">Level 5: HOTS</span>
           </div>
           <Paragraph>Ruang kelas 8 berukuran panjang 10 m, lebar 8 m, dan tinggi tembok 4 m. Dinding bagian dalam kelas tersebut akan dicat, kecuali bagian pintu dan jendela yang total luas permukaannya <MathInline>{`14 \\text{ m}^2`}</MathInline>. Jika biaya pengecatan adalah Rp25.000,00 per meter persegi, berapa total dana yang harus disiapkan sekolah?</Paragraph>
           <p className="font-semibold text-destructive mt-4 mb-2">Penyelesaian:</p>
           <Paragraph className="mb-2">Dinding kelas adalah bagian sisi depan-belakang dan kanan-kiri (tanpa lantai dan atap). Hitung luas keempat sisi dinding:</Paragraph>
           <MathBlock>{`\\text{Luas Dinding} = 2(pt) + 2(lt) \\\\ = 2(10 \\times 4) + 2(8 \\times 4) \\\\ = 80 + 64 = 144 \\text{ m}^2`}</MathBlock>
           <Paragraph className="mb-2">Kurangi dengan luas pintu dan jendela, lalu kalikan dengan harga per meter persegi:</Paragraph>
           <MathBlock>{`\\text{Luas yang dicat} = 144 - 14 = 130 \\text{ m}^2 \\\\ \\text{Total Biaya} = 130 \\times 25.000 = 3.250.000`}</MathBlock>
           <Paragraph>Jadi, total dana pengecatan yang dibutuhkan adalah <MathInline>{`\\text{Rp } 3.250.000,00`}</MathInline>.</Paragraph>
         </div>
       </div>

       <Heading3>Latihan Soal</Heading3>
       <Paragraph>Kerjakan soal-soal di bawah ini untuk menguji pemahamanmu! Soal disusun dari tingkat yang paling mudah hingga HOTS.</Paragraph>

      <div className="space-y-6">
        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-bold mb-2">Level 1: Mudah</span><br/>
            <b>Soal 1:</b> Sebuah balok memiliki panjang <MathInline>{`5 \\text{ cm}`}</MathInline>, lebar <MathInline>{`4 \\text{ cm}`}</MathInline>, dan tinggi <MathInline>{`3 \\text{ cm}`}</MathInline>. Berapakah luas permukaannya?
          </Paragraph>
          <InputAnswer answerKey="94" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 2: Sedang</span><br/>
            <b>Soal 2:</b> Diketahui sebuah balok memiliki luas permukaan <MathInline>{`122 \\text{ cm}^2`}</MathInline>. Jika lebar balok <MathInline>{`4 \\text{ cm}`}</MathInline> dan tinggi balok <MathInline>{`3 \\text{ cm}`}</MathInline>, berapakah ukuran panjang balok tersebut?
          </Paragraph>
          <InputAnswer answerKey="7" placeholder="Panjang = ..." satuan="cm" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 3: Sedang</span><br/>
            <b>Soal 3:</b> Hitunglah luas permukaan sebuah balok <b>tanpa tutup</b> yang memiliki panjang <MathInline>{`10 \\text{ cm}`}</MathInline>, lebar <MathInline>{`5 \\text{ cm}`}</MathInline>, dan tinggi <MathInline>{`4 \\text{ cm}`}</MathInline>!
          </Paragraph>
          <InputAnswer answerKey="170" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold mb-2">Level 4: Sulit</span><br/>
            <b>Soal 4:</b> Pak Anton ingin membuat sebuah akuarium berbentuk balok tanpa tutup dari kaca. Akuarium tersebut direncanakan memiliki panjang <MathInline>{`60 \\text{ cm}`}</MathInline>, lebar <MathInline>{`40 \\text{ cm}`}</MathInline>, dan tinggi <MathInline>{`50 \\text{ cm}`}</MathInline>. Berapa sentimeter persegi (<MathInline>{`\\text{cm}^2`}</MathInline>) luas kaca yang dibutuhkan Pak Anton?
          </Paragraph>
          <InputAnswer answerKey="12400" placeholder="Luas kaca = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold mb-2">Level 5: HOTS</span><br/>
            <b>Soal 5:</b> Sebuah ruangan berbentuk balok memiliki ukuran panjang <MathInline>{`6 \\text{ m}`}</MathInline>, lebar <MathInline>{`5 \\text{ m}`}</MathInline>, dan tinggi <MathInline>{`4 \\text{ m}`}</MathInline>. Dinding ruangan tersebut akan dicat. Di ruangan tersebut terdapat satu pintu seluas <MathInline>{`2 \\text{ m}^2`}</MathInline> dan satu jendela seluas <MathInline>{`1 \\text{ m}^2`}</MathInline> yang tidak akan ikut dicat. Jika atap (plafon) dan lantai juga tidak dicat, berapakah luas dinding yang akan dicat?
          </Paragraph>
          <InputAnswer answerKey="85" placeholder="Luas dicat = ..." satuan="m²" />
        </div>
      </div>

      <div className="pt-6">
        <NavFooter prev="/luas-permukaan/kubus" next="/luas-permukaan/prisma" />
      </div>
    </div>
  );
};

export default LuasBalokPage;
