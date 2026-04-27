import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Heading3, Paragraph, HighlightBox, MathBlock, MathInline } from '@/components/ui/Typography';
import StaticViewer from '@/components/features/StaticViewer';
import ImageDisplay from '@/components/ui/ImageDisplay';
import InputAnswer from '@/components/ui/InputAnswer';
import NavFooter from '@/components/layout/NavFooter';
import { AR_URLS, MODEL_ARRAYS } from '@/constants/urls';

const VolumePrismaPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(3);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in space-y-6 pb-8">
      <div>
        <Heading1>Volume Bangun Ruang Sisi Datar</Heading1>
        <Heading2>C. Volume Prisma</Heading2>
      </div>

      <Heading3>Prisma dan Jenis-jenisnya</Heading3>
      <Paragraph>Prisma adalah bangun ruang yang memiliki dua sisi yang kongruen dan sejajar (sebagai alas dan tutup), serta sisi-sisi tegak yang berbentuk persegi panjang. Kamu dapat melihat beberapa contoh prisma pada simulasi <MathInline>{`\\text{Objek 3}`}</MathInline> berikut.</Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.PRISMA_TYPES}
        urlAR={AR_URLS.PRISMA_JENIS}
        scale={2}
        title="Objek 3. Jenis-jenis Prisma"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ImageDisplay src="prismasegitiga3.png" scale={1} nama="Gambar 9. Prisma Segitiga" />
        <ImageDisplay src="prismasegilima.png" scale={1} nama="Gambar 10. Prisma Segilima" />
        <ImageDisplay src="prismasegi8.png" scale={1} nama="Gambar 11. Prisma Segidelapan" />
      </div>

      <Paragraph>Tentu masih banyak jenis prisma lainnya. Bayangkan setiap bangun yang memiliki alas dan tutup yang sama bentuknya, kemudian dihubungkan oleh sisi-sisi tegak berbentuk persegi panjang, maka bangun tersebut bisa kita sebut sebagai prisma. Nah, sekarang coba kamu perhatikan bangun pada <MathInline>{`\\text{Gambar 12}`}</MathInline>, apakah tabung bisa disebut sebagai prisma?</Paragraph>
      <ImageDisplay src="tabung.png" scale={1} nama="Gambar 12. Tabung" />

      <Heading3>Menghitung Volume Prisma</Heading3>
      <Paragraph>Sebelum menghitung volume prisma, mari kita ingat kembali cara mencari volume kubus dan balok. Volume kubus dihitung dengan <MathInline>{`V = r \\times r \\times r`}</MathInline>, sedangkan volume balok dihitung dengan <MathInline>{`V = p \\times l \\times t`}</MathInline>.</Paragraph>
      
      <Paragraph>Jika diamati lebih cermat, keduanya memiliki kesamaan pola, yaitu mengalikan <b>luas alas</b> dengan <b>tinggi</b>. Pada kubus, luas alasnya adalah <MathInline>{`r \\times r`}</MathInline>, sedangkan pada balok luas alasnya adalah <MathInline>{`p \\times l`}</MathInline>. Oleh karena itu, kubus dan balok sebenarnya termasuk ke dalam keluarga prisma (prisma segiempat).</Paragraph>

      <Paragraph>Secara umum, volume prisma apa pun (baik alasnya segitiga, segilima, segidelapan, dll) dapat dihitung dengan rumus berikut:</Paragraph>
      
      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Prisma:</p>
        <MathBlock>{`V = \\text{Luas Alas} \\times \\text{Tinggi}`}</MathBlock>
      </HighlightBox>

      <Heading3>Contoh Soal</Heading3>
      <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
        <Paragraph>Diketahui sebuah prisma segitiga sama sisi memiliki panjang sisi alas 6 cm dan tinggi prisma 5 cm. Jika tinggi segitiga alas tersebut adalah <MathInline>{`3\\sqrt{3} \\text{ cm},`}</MathInline> berapakah volume prisma tersebut?</Paragraph>
        <ImageDisplay src="soalprismasegitiga2.png" scale={1} />
        <p className="font-semibold text-primary mt-4 mb-2">Penyelesaian:</p>
        <MathBlock>{`V = \\text{Luas Alas} \\times \\text{Tinggi} \\\\ V = \\left(\\frac{1}{2} \\times \\text{alas segitiga} \\times \\text{tinggi segitiga}\\right) \\times \\text{tinggi prisma} \\\\ V = \\left(\\frac{1}{2} \\times 6 \\times 3\\sqrt{3}\\right) \\times 5 \\\\ V = 9\\sqrt{3} \\times 5 = 45\\sqrt{3}`}</MathBlock>
        <Paragraph>Jadi, volume prisma segitiga tersebut adalah <MathInline>{`45\\sqrt{3} \\text{ cm}^3`}</MathInline>.</Paragraph>
      </div>

      <Heading3>Latihan Soal</Heading3>
      <Paragraph>Kerjakan soal-soal di bawah ini untuk menguji pemahamanmu! Soal disusun dari tingkat yang paling mudah hingga HOTS.</Paragraph>

      <div className="space-y-6">
        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-bold mb-2">Level 1: Mudah</span><br/>
            <b>Soal 1:</b> Sebuah prisma memiliki alas berbentuk segitiga siku-siku dengan panjang alas <MathInline>{`3 \\text{ cm}`}</MathInline> dan tinggi segitiga <MathInline>{`4 \\text{ cm}`}</MathInline>. Jika tinggi prisma adalah <MathInline>{`10 \\text{ cm}`}</MathInline>, berapakah volume prisma tersebut?
          </Paragraph>
          <InputAnswer answerKey="60" placeholder="Volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 2: Sedang</span><br/>
            <b>Soal 2:</b> Sebuah prisma segiempat (balok) memiliki volume <MathInline>{`200 \\text{ cm}^3`}</MathInline>. Jika ukuran alas prisma tersebut adalah <MathInline>{`5 \\text{ cm} \\times 4 \\text{ cm}`}</MathInline>, berapakah tinggi prisma tersebut?
          </Paragraph>
          <InputAnswer answerKey="10" placeholder="Tinggi = ..." satuan="cm" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold mb-2">Level 3: Sedang</span><br/>
            <b>Soal 3:</b> Alas sebuah prisma berbentuk trapesium siku-siku dengan panjang sisi sejajar <MathInline>{`10 \\text{ cm}`}</MathInline> dan <MathInline>{`6 \\text{ cm}`}</MathInline>, serta tinggi trapesium <MathInline>{`4 \\text{ cm}`}</MathInline>. Jika tinggi prisma adalah <MathInline>{`15 \\text{ cm}`}</MathInline>, berapakah volume prisma tersebut?
          </Paragraph>
          <InputAnswer answerKey="480" placeholder="Volume = ..." satuan="cm³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-bold mb-2">Level 4: Sulit</span><br/>
            <b>Soal 4:</b> Sebuah tenda pramuka berbentuk prisma segitiga memiliki pintu masuk berupa segitiga dengan panjang alas <MathInline>{`2 \\text{ meter}`}</MathInline> dan tinggi <MathInline>{`1,5 \\text{ meter}`}</MathInline>. Jika panjang ke belakang tenda tersebut adalah <MathInline>{`3 \\text{ meter}`}</MathInline>, berapakah kapasitas ruang (volume) udara maksimal di dalam tenda tersebut?
          </Paragraph>
          <InputAnswer answerKey="4.5" placeholder="Volume udara = ..." satuan="m³" />
        </div>

        <div className="bg-muted/30 p-5 rounded-xl border border-border shadow-sm">
          <Paragraph className="mb-3">
            <span className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-xs font-bold mb-2">Level 5: HOTS</span><br/>
            <b>Soal 5:</b> Sebuah wadah cantik berbentuk prisma segienam beraturan memiliki luas alas <MathInline>{`120 \\text{ cm}^2`}</MathInline>. Saat ini, wadah tersebut hanya berisi air sepertiga <MathInline>{`(1/3)`}</MathInline> bagian dari kapasitas totalnya. Jika volume air di dalam wadah saat ini terukur sebanyak <MathInline>{`400 \\text{ cm}^3`}</MathInline>, berapakah tinggi wadah tersebut?
          </Paragraph>
          <InputAnswer answerKey="10" placeholder="Tinggi wadah = ..." satuan="cm" />
        </div>
      </div>

      <div className="pt-6">
        <NavFooter prev="/volume/balok" next="/volume/limas" />
      </div>
    </div>
  );
};

export default VolumePrismaPage;
