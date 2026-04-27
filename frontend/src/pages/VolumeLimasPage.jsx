import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import Viewer3D from '@/components/features/Viewer3D';
import StaticViewer from '@/components/features/StaticViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODELS, MODEL_ARRAYS } from '@/constants/urls';

const VolumeLimasPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(4);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in space-y-6 pb-8">
      <div>
        <Heading1>Volume Bangun Ruang Sisi Datar</Heading1>
        <Heading2>D. Volume Limas</Heading2>
      </div>

      <ImageDisplay src="bangunanlimas.webp" scale={1} nama="Gambar 13. Bangunan Berbentuk Limas" />
      
      <Heading3>Jenis-jenis Limas</Heading3>
      <Paragraph>Limas adalah bangun ruang yang dibatasi oleh alas berbentuk segi-n (segitiga, segiempat, segilima, dll) dan sisi-sisi tegak berbentuk segitiga yang semuanya bertemu pada satu titik puncak. Coba perhatikan beberapa jenis limas pada <MathInline>{`\\text{Objek 4}`}</MathInline> berikut ini.</Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.LIMAS_TYPES}
        scale={0.6}
        title="Objek 4. Jenis-jenis Limas"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ImageDisplay src="limassegiempat.png" scale={1} nama="Gambar 14. Limas Segiempat" />
        <ImageDisplay src="limassegitiga.png" scale={1} nama="Gambar 15. Limas Segitiga" />
        <ImageDisplay src="limassegilima.png" scale={1} nama="Gambar 16. Limas Segilima" />
      </div>

      <Paragraph>Dari jenis-jenis limas di atas, semuanya memiliki kesamaan yaitu titik puncaknya berada di tengah tepat di atas pusat alas. Namun, apakah titik puncak limas selalu berada di tengah? Bagaimana dengan bangun pada <MathInline>{`\\text{Gambar 17}`}</MathInline>, apakah tetap bisa disebut sebagai limas? Pada bangun tersebut diketahui <MathInline>{`\\angle BAT = \\angle DAT = 90^{\\circ}`}</MathInline>.</Paragraph>
      <ImageDisplay src="limasaneh.png" scale={1} nama="Gambar 17. Limas dengan Puncak di Sudut" />

      <Heading3>Simulasi Volume Limas</Heading3>
      <Paragraph>Volume limas tentu berbeda dengan volume prisma atau balok yang telah kamu pelajari sebelumnya, karena limas tidak memiliki tutup yang kongruen dengan alasnya. Limas meruncing ke satu titik puncak. Untuk memahami darimana rumus volume limas berasal, perhatikanlah simulasi pada <MathInline>{`\\text{Objek 5}`}</MathInline> berikut.</Paragraph>

      <Viewer3D
        modelPath={MODELS.LIMAS_VOLUME_SCENE}
        urlAR={AR_URLS.LIMAS_VOLUME}
        scale={1.5}
        title="Objek 5. Volume Limas"
      />

      <Paragraph>Pada simulasi di atas, terlihat jelas bahwa sebuah kubus ternyata dapat dibagi secara tepat menjadi tiga buah limas segiempat yang ukurannya identik. Oleh karena itu, dapat disimpulkan bahwa volume satu buah limas yang alas dan tingginya sama dengan kubus, adalah sepertiga <MathInline>{`(1/3)`}</MathInline> dari volume kubus tersebut.</Paragraph>
      
      <MathBlock>{`V = \\frac{1}{3} \\times \\text{Volume Kubus (Prisma)}`}</MathBlock>
      
      <Paragraph>Sehingga volume limas secara umum, apapun bentuk alasnya, dapat dirumuskan sebagai:</Paragraph>
      
      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Limas:</p>
        <MathBlock>{`V = \\frac{1}{3} \\times \\text{Luas Alas} \\times \\text{Tinggi}`}</MathBlock>
      </HighlightBox>

      <Heading3>Contoh Soal</Heading3>
      <div className="space-y-6">
        <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
          <Paragraph>Diketahui sebuah limas <MathInline>{`\\text{T.ABCD}`}</MathInline> dengan alas berbentuk persegi. Panjang <MathInline>{`\\text{AB}=\\text{BC}= 5 \\text{ cm}`}</MathInline>. Titik <MathInline>{`\\text{O}`}</MathInline> adalah perpotongan diagonal alas. Jika jarak titik <MathInline>{`\\text{O}`}</MathInline> ke titik puncak <MathInline>{`\\text{T}`}</MathInline> (tinggi limas) adalah 6 cm, berapakah volume limas tersebut?</Paragraph>
          <ImageDisplay src="limasabcdt.png" scale={1} />
          <p className="font-semibold text-primary mt-4 mb-2">Penyelesaian:</p>
          <MathBlock>{`V = \\frac{1}{3} \\times \\text{Luas Alas} \\times \\text{Tinggi} \\\\ V = \\frac{1}{3} \\times (5 \\times 5) \\times 6 \\\\ V = \\frac{1}{3} \\times 25 \\times 6 \\\\ V = 25 \\times 2 \\\\ V = 50`}</MathBlock>
          <Paragraph>Jadi, volume limas tersebut adalah <MathInline>{`50 \\text{ cm}^3`}</MathInline>.</Paragraph>
        </div>

        <div className="bg-warning/5 p-5 rounded-xl border border-warning/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold">Level 4: Sulit</span>
          </div>
          <Paragraph>Sebuah limas memiliki alas berbentuk persegi dengan panjang sisi 10 cm. Jika tinggi sisi tegak (tinggi segitiga pada selimutnya) adalah 13 cm, berapakah volume limas tersebut?</Paragraph>
          <p className="font-semibold text-warning mt-4 mb-2">Penyelesaian:</p>
          <Paragraph className="mb-2">Untuk mencari volume, kita membutuhkan tinggi limas (jarak puncak ke pusat alas). Kita dapat mencarinya menggunakan Teorema Pythagoras. Setengah dari panjang sisi alas adalah 5 cm.</Paragraph>
          <MathBlock>{`\\text{Tinggi Limas} = \\sqrt{13^2 - 5^2} \\\\ = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\text{ cm}`}</MathBlock>
          <Paragraph className="mb-2">Setelah tinggi limas diketahui, hitung volumenya:</Paragraph>
          <MathBlock>{`V = \\frac{1}{3} \\times \\text{Luas Alas} \\times \\text{Tinggi} \\\\ = \\frac{1}{3} \\times (10 \\times 10) \\times 12 \\\\ = \\frac{1}{3} \\times 100 \\times 12 = 400 \\text{ cm}^3`}</MathBlock>
          <Paragraph>Jadi, volume limas tersebut adalah <MathInline>{`400 \\text{ cm}^3`}</MathInline>.</Paragraph>
        </div>

        <div className="bg-destructive/5 p-5 rounded-xl border border-destructive/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold">Level 5: HOTS</span>
          </div>
          <Paragraph>Sebuah pabrik cokelat ingin memproduksi cokelat berbentuk miniatur piramida pejal (limas persegi). Alas piramida memiliki sisi 5 cm dan tinggi 6 cm. Pabrik tersebut memiliki adonan cokelat cair sebanyak <MathInline>{`2.500 \\text{ cm}^3`}</MathInline>. Berapa buah miniatur cokelat maksimal yang dapat dicetak secara utuh?</Paragraph>
          <p className="font-semibold text-destructive mt-4 mb-2">Penyelesaian:</p>
          <Paragraph className="mb-2">Pertama, hitung volume yang dibutuhkan untuk membuat 1 buah miniatur piramida:</Paragraph>
          <MathBlock>{`V_{1 \\text{ cokelat}} = \\frac{1}{3} \\times \\text{Luas Alas} \\times \\text{Tinggi} \\\\ = \\frac{1}{3} \\times (5 \\times 5) \\times 6 \\\\ = \\frac{1}{3} \\times 25 \\times 6 = 50 \\text{ cm}^3`}</MathBlock>
          <Paragraph className="mb-2">Kemudian, hitung berapa banyak cokelat yang dapat dicetak dari total adonan:</Paragraph>
          <MathBlock>{`\\text{Jumlah Cokelat} = \\frac{\\text{Total Adonan}}{V_{1 \\text{ cokelat}}} \\\\ = \\frac{2.500}{50} = 50 \\text{ buah}`}</MathBlock>
          <Paragraph>Jadi, pabrik tersebut dapat mencetak maksimal sebanyak <MathInline>{`50 \\text{ buah}`}</MathInline> miniatur cokelat utuh.</Paragraph>
        </div>
      </div>

      <Heading3>Latihan Soal</Heading3>
      <Paragraph>Kerjakan soal-soal di bawah ini untuk menguji pemahamanmu! Soal disusun dari tingkat yang paling mudah hingga HOTS.</Paragraph>

      <div className="space-y-6">
        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-bold mb-2">Level 1: Mudah</span><br/>
            <b>Soal 1:</b> Sebuah limas memiliki alas berbentuk segiempat dengan luas <MathInline>{`100 \\text{ cm}^2`}</MathInline>. Jika tinggi limas tersebut adalah <MathInline>{`12 \\text{ cm}`}</MathInline>, berapakah volumenya?
          </Paragraph>
          <InputAnswer answerKey="400" placeholder="Volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 2: Sedang</span><br/>
            <b>Soal 2:</b> Sebuah limas dengan alas berbentuk persegi memiliki volume <MathInline>{`400 \\text{ cm}^3`}</MathInline>. Jika panjang sisi alasnya adalah <MathInline>{`10 \\text{ cm}`}</MathInline>, berapakah tinggi limas tersebut?
          </Paragraph>
          <InputAnswer answerKey="12" placeholder="Tinggi = ..." satuan="cm" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 3: Sedang</span><br/>
            <b>Soal 3:</b> Alas sebuah limas berbentuk segitiga siku-siku dengan panjang sisi penyikunya <MathInline>{`6 \\text{ cm}`}</MathInline> dan <MathInline>{`8 \\text{ cm}`}</MathInline>. Jika tinggi limas tersebut adalah <MathInline>{`15 \\text{ cm}`}</MathInline>, berapakah volumenya?
          </Paragraph>
          <InputAnswer answerKey="120" placeholder="Volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold mb-2">Level 4: Sulit</span><br/>
            <b>Soal 4:</b> Budi membuat miniatur piramida untuk tugas sekolah. Miniatur tersebut memiliki alas berbentuk persegi dengan panjang sisi <MathInline>{`15 \\text{ cm}`}</MathInline>. Jika miniatur piramida tersebut memiliki tinggi <MathInline>{`20 \\text{ cm}`}</MathInline>, berapakah taksiran volume ruang di dalam miniatur tersebut?
          </Paragraph>
          <InputAnswer answerKey="1500" placeholder="Volume miniatur = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold mb-2">Level 5: HOTS</span><br/>
            <b>Soal 5:</b> Ibu memiliki sebuah cetakan kue berbentuk limas segiempat dengan alas persegi (panjang sisi <MathInline>{`6 \\text{ cm}`}</MathInline>) dan tinggi cetakan <MathInline>{`10 \\text{ cm}`}</MathInline>. Jika ibu membuat adonan kue sebanyak <MathInline>{`1.200 \\text{ cm}^3`}</MathInline> dan seluruh adonan digunakan hingga habis tanpa sisa, berapa maksimal kue yang dapat dicetak oleh ibu?
          </Paragraph>
          <InputAnswer answerKey="10" placeholder="Banyak kue = ..." satuan="buah" />
        </div>
      </div>

      <div className="pt-6">
        <NavFooter prev="/volume/prisma" next="/quiz/volume" nextLabel="Quiz Volume" />
      </div>
    </div>
  );
};

export default VolumeLimasPage;
