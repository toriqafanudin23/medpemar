import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
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
    <div className="max-w-3xl mx-auto animate-fade-in space-y-6 pb-8">
      <div>
        <Heading1>Luas Permukaan Bangun Ruang</Heading1>
        <Heading2>A. Luas Permukaan Kubus</Heading2>
      </div>
      
      <ImageDisplay src="kardus-img.png" nama="Gambar 18. Kardus" />
      
      <Heading3>Jaring-jaring Kubus</Heading3>
      <Paragraph>Jaring-jaring adalah gabungan bangun datar (seperti persegi, persegi panjang, segitiga) yang menyusun
        sebuah bangun ruang. Jika sisi-sisi bangun ruang direntangkan atau "dibuka" pada rusuk-rusuknya, akan terlihat rangkaian
        bidang datar yang membentuk jaring-jaring tersebut. Misalnya pada kubus, enam buah persegi yang disusun
        secara tepat akan membentuk sebuah jaring-jaring kubus. Perhatikan beberapa variasi jaring-jaring kubus pada simulasi <MathInline>{`\\text{Objek 6}`}</MathInline> berikut.</Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.JARING_KUBUS}
        urlAR={AR_URLS.KUBUS_JARING}
        scale={0.8}
        title="Objek 6. Jaring-jaring Kubus"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <ImageDisplay src="jaring-kubus-1.png" scale={1} />
        <ImageDisplay src="jaring-kubus-2.png" scale={1} />
        <ImageDisplay src="jaring-kubus-3.png" scale={1} />
        <ImageDisplay src="jaring-kubus-4.png" scale={1} />
      </div>
      <p className="text-center text-sm text-muted-foreground mt-2">Gambar 19. Macam jaring-jaring kubus</p>

      <Paragraph>Sebenarnya ada 11 macam jaring-jaring kubus yang valid. Cobalah ambil secarik kertas dan eksplorasi bentuk jaring-jaring kubus lainnya!</Paragraph>

      <Heading3>Menghitung Luas Permukaan Kubus</Heading3>
      <Paragraph>Konsep jaring-jaring sangat penting untuk memahami struktur tiga dimensi secara dua dimensi, khususnya saat kita ingin mencari <b>luas permukaan</b> suatu bangun ruang. Luas permukaan adalah total luas seluruh sisi luar yang menutupi bangun ruang tersebut (alas, sisi tegak, dan tutup).</Paragraph>
      <ImageDisplay src="jaringkubusrr.png" nama="Gambar 20. Jaring-jaring kubus" />
      <Paragraph>Mencari luas permukaan bangun ruang sama halnya dengan menjumlahkan luas semua bangun datar pada jaring-jaringnya. Pada kubus, jaring-jaringnya terbentuk dari 6 buah persegi yang identik, dengan masing-masing persegi memiliki luas <MathInline>{`r \\times r`}</MathInline>. Oleh karena itu, luas permukaannya adalah 6 kali luas satu perseginya:</Paragraph>
       
       <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Luas Permukaan Kubus:</p>
        <MathBlock>{`L = 6 \\times \\text{Luas Persegi} \\\\ L = 6 \\times r \\times r \\\\ L = 6 \\times r^2`}</MathBlock>
      </HighlightBox>

       <Heading3>Contoh Soal</Heading3>
       <div className="space-y-6">
         <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
           <Paragraph>Sebuah kubus memiliki panjang rusuk 7 cm. Tentukanlah luas permukaan kubus tersebut!</Paragraph>
           <p className="font-semibold text-primary mt-4 mb-2">Penyelesaian:</p>
           <MathBlock>{`L = 6 \\times r^2 \\\\ L = 6 \\times 7^2 \\\\ L = 6 \\times 49 = 294`}</MathBlock>
           <Paragraph>Jadi, luas permukaan kubus tersebut adalah <MathInline>{`294 \\text{ cm}^2`}</MathInline>.</Paragraph>
         </div>

         <div className="bg-warning/5 p-5 rounded-xl border border-warning/20">
           <div className="flex items-center gap-2 mb-2">
             <span className="bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold">Level 4: Sulit</span>
           </div>
           <Paragraph>Luas seluruh permukaan sebuah dadu raksasa berbentuk kubus adalah <MathInline>{`864 \\text{ cm}^2`}</MathInline>. Berapakah volume dari dadu tersebut?</Paragraph>
           <p className="font-semibold text-warning mt-4 mb-2">Penyelesaian:</p>
           <Paragraph className="mb-2">Pertama, kita harus mencari panjang rusuk (r) dari luas permukaannya:</Paragraph>
           <MathBlock>{`L = 6 \\times r^2 \\\\ 864 = 6 \\times r^2 \\\\ r^2 = \\frac{864}{6} = 144 \\\\ r = \\sqrt{144} = 12 \\text{ cm}`}</MathBlock>
           <Paragraph className="mb-2">Setelah panjang rusuk diketahui, kita bisa menghitung volumenya:</Paragraph>
           <MathBlock>{`V = r^3 = 12 \\times 12 \\times 12 = 1.728 \\text{ cm}^3`}</MathBlock>
           <Paragraph>Jadi, volume dadu raksasa tersebut adalah <MathInline>{`1.728 \\text{ cm}^3`}</MathInline>.</Paragraph>
         </div>

         <div className="bg-destructive/5 p-5 rounded-xl border border-destructive/20">
           <div className="flex items-center gap-2 mb-2">
             <span className="bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold">Level 5: HOTS</span>
           </div>
           <Paragraph>Budi memiliki 3 buah kubus besi yang rusuknya berturut-turut berukuran 10 cm, 15 cm, dan 20 cm. Budi ingin mengecat seluruh permukaan ketiga kubus besi tersebut. Jika satu kaleng cat semprot hanya cukup untuk menutupi area seluas <MathInline>{`0,2 \\text{ m}^2`}</MathInline> (atau <MathInline>{`2.000 \\text{ cm}^2`}</MathInline>), berapa kaleng cat minimal yang harus dibeli Budi?</Paragraph>
           <p className="font-semibold text-destructive mt-4 mb-2">Penyelesaian:</p>
           <Paragraph className="mb-2">Pertama, hitung total luas permukaan ketiga kubus tersebut:</Paragraph>
           <MathBlock>{`L_1 = 6 \\times 10^2 = 600 \\text{ cm}^2 \\\\ L_2 = 6 \\times 15^2 = 1.350 \\text{ cm}^2 \\\\ L_3 = 6 \\times 20^2 = 2.400 \\text{ cm}^2 \\\\ \\text{Total Luas} = 600 + 1.350 + 2.400 = 4.350 \\text{ cm}^2`}</MathBlock>
           <Paragraph className="mb-2">Hitung berapa kaleng cat yang dibutuhkan:</Paragraph>
           <MathBlock>{`\\text{Jumlah Kaleng} = \\frac{4.350}{2.000} = 2,175 \\text{ kaleng}`}</MathBlock>
           <Paragraph>Karena cat tidak bisa dibeli dalam bentuk pecahan kaleng, Budi harus membulatkan ke atas. Jadi, Budi harus membeli minimal <MathInline>{`3 \\text{ kaleng}`}</MathInline> cat semprot.</Paragraph>
         </div>
       </div>

       <Heading3>Latihan Soal</Heading3>
       <Paragraph>Kerjakan soal-soal di bawah ini untuk menguji pemahamanmu! Soal disusun dari tingkat yang paling mudah hingga HOTS.</Paragraph>

      <div className="space-y-6">
        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-bold mb-2">Level 1: Mudah</span><br/>
            <b>Soal 1:</b> Sebuah kubus memiliki panjang rusuk <MathInline>{`5 \\text{ cm}`}</MathInline>. Berapakah luas permukaan kubus tersebut?
          </Paragraph>
          <InputAnswer answerKey="150" placeholder="Luas permukaan = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 2: Sedang</span><br/>
            <b>Soal 2:</b> Diketahui sebuah kubus memiliki luas permukaan total sebesar <MathInline>{`600 \\text{ cm}^2`}</MathInline>. Berapakah panjang rusuk kubus tersebut?
          </Paragraph>
          <InputAnswer answerKey="10" placeholder="Panjang rusuk = ..." satuan="cm" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 3: Sedang</span><br/>
            <b>Soal 3:</b> Anton membuat sebuah kotak berbentuk kubus tanpa tutup (hanya terdiri dari 5 sisi). Jika panjang rusuk kotak tersebut adalah <MathInline>{`8 \\text{ cm}`}</MathInline>, berapakah luas permukaannya?
          </Paragraph>
          <InputAnswer answerKey="320" placeholder="Luas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold mb-2">Level 4: Sulit</span><br/>
            <b>Soal 4:</b> Budi ingin membungkus kado berbentuk kubus sempurna yang memiliki panjang rusuk <MathInline>{`20 \\text{ cm}`}</MathInline>. Berapakah luas kertas kado minimal yang dibutuhkan Budi untuk menutupi seluruh permukaan kado tersebut tanpa tumpang tindih?
          </Paragraph>
          <InputAnswer answerKey="2400" placeholder="Luas kertas = ..." satuan="cm²" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold mb-2">Level 5: HOTS</span><br/>
            <b>Soal 5:</b> Ayah membangun sebuah bak air berbentuk kubus tanpa tutup. Panjang rusuk <b>bagian dalam</b> bak tersebut adalah <MathInline>{`100 \\text{ cm}`}</MathInline>. Jika ayah ingin mengecat seluruh dinding bagian dalam beserta dasar bak air tersebut dengan cat pelapis anti bocor, berapakah luas area yang harus dicat?
          </Paragraph>
          <InputAnswer answerKey="50000" placeholder="Luas area = ..." satuan="cm²" />
        </div>
      </div>

      <div className="pt-6">
        <NavFooter prev="/luas-permukaan" next="/luas-permukaan/balok" />
      </div>
    </div>
  );
};

export default LuasKubusPage;
