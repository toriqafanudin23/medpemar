import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
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
    <div className="max-w-3xl mx-auto animate-fade-in space-y-6 pb-8">
      <div>
        <Heading1>Volume Bangun Ruang Sisi Datar</Heading1>
        <Heading2>B. Volume Balok</Heading2>
      </div>

      <Heading3>Menghitung Volume Balok</Heading3>
      <Paragraph>Secara umum, balok dengan panjang <MathInline>{`(p)`}</MathInline>, lebar <MathInline>{`(l)`}</MathInline>, dan tinggi <MathInline>{`(t)`}</MathInline> memiliki volume yang dapat dihitung dengan rumus berikut:</Paragraph>
      
      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Balok:</p>
        <MathBlock>{`V = p \\times l \\times t`}</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          dengan <i>p</i> = panjang, <i>l</i> = lebar, <i>t</i> = tinggi
        </p>
      </HighlightBox>

      <ImageDisplay src="balokplt.png" nama="Gambar 7. Balok" scale={1} />
      
      <Heading3>Contoh Soal</Heading3>
      <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
        <Paragraph>Sebuah balok memiliki panjang 5 cm, lebar 3 cm, dan tinggi 2 cm. Hitunglah volume balok tersebut!</Paragraph>
        <ImageDisplay src="balok532.png" nama="Gambar 8. Balok" scale={1} />
        <p className="font-semibold text-primary mt-4 mb-2">Penyelesaian:</p>
        <MathBlock>{`V = p \\times l \\times t \\\\ V = 5 \\times 3 \\times 2 \\\\ V = 30`}</MathBlock>
        <Paragraph>Jadi, volume balok tersebut adalah <MathInline>{`30 \\text{ cm}^3`}</MathInline>.</Paragraph>
      </div>

      <Heading3>Latihan Soal</Heading3>
      <Paragraph>Kerjakan soal-soal di bawah ini untuk menguji pemahamanmu! Soal disusun dari tingkat yang paling mudah hingga HOTS (Higher Order Thinking Skills).</Paragraph>

      <div className="space-y-6">
        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-bold mb-2">Level 1: Mudah</span><br/>
            <b>Soal 1:</b> Hitunglah volume balok yang memiliki panjang <MathInline>{`4 \\text{ cm}`}</MathInline>, lebar <MathInline>{`3 \\text{ cm}`}</MathInline>, dan tinggi <MathInline>{`6 \\text{ cm}`}</MathInline>!
          </Paragraph>
          <ImageDisplay src="balok436.png" scale={1} />
          <InputAnswer answerKey="72" placeholder="Volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 2: Sedang</span><br/>
            <b>Soal 2:</b> Sebuah kotak pensil berbentuk balok memiliki volume <MathInline>{`120 \\text{ cm}^3`}</MathInline>. Jika panjangnya <MathInline>{`10 \\text{ cm}`}</MathInline> dan lebarnya <MathInline>{`4 \\text{ cm}`}</MathInline>, berapakah tinggi kotak pensil tersebut?
          </Paragraph>
          <InputAnswer answerKey="3" placeholder="Tinggi = ..." satuan="cm" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 3: Sedang</span><br/>
            <b>Soal 3:</b> Diketahui sebuah balok memiliki luas alas <MathInline>{`45 \\text{ cm}^2`}</MathInline>. Jika tinggi balok tersebut adalah <MathInline>{`8 \\text{ cm}`}</MathInline>, berapakah volume balok tersebut?
          </Paragraph>
          <InputAnswer answerKey="360" placeholder="Volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold mb-2">Level 4: Sulit</span><br/>
            <b>Soal 4:</b> Sebuah kemasan susu kotak berbentuk balok berukuran <MathInline>{`8 \\text{ cm} \\times 5 \\text{ cm} \\times 12 \\text{ cm}`}</MathInline> berisi penuh susu. Susu tersebut akan dituang ke dalam gelas-gelas kecil yang masing-masing berkapasitas <MathInline>{`120 \\text{ cm}^3`}</MathInline>. Berapa banyak gelas yang dibutuhkan untuk menampung seluruh susu tersebut?
          </Paragraph>
          <InputAnswer answerKey="4" placeholder="Banyak gelas = ..." satuan="gelas" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold mb-2">Level 5: HOTS</span><br/>
            <b>Soal 5:</b> Sebuah wadah besar berbentuk balok dengan ukuran bagian dalam <MathInline>{`24 \\text{ cm} \\times 18 \\text{ cm} \\times 12 \\text{ cm}`}</MathInline> akan diisi penuh dengan sabun batang. Jika masing-masing sabun batang juga berbentuk balok dengan ukuran <MathInline>{`6 \\text{ cm} \\times 3 \\text{ cm} \\times 2 \\text{ cm}`}</MathInline>, berapa maksimal banyak sabun batang yang dapat masuk ke dalam wadah besar tersebut?
          </Paragraph>
          <ImageDisplay src="wadahsabun.png" scale={1} />
          <InputAnswer answerKey="144" placeholder="Banyak sabun = ..." satuan="buah" />
        </div>
      </div>

      <div className="pt-6">
        <NavFooter prev="/volume/kubus" next="/volume/prisma" />
      </div>
    </div>
  );
};

export default VolumeBalokPage;

