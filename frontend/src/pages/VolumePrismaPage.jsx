import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading2, Paragraph, HighlightBox, MathBlock } from '@/components/ui/Typography';
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
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Heading2>C. Volume Prisma</Heading2>

      <Paragraph>
        Sebelumnya kamu sudah belajar cara menghitung volume kubus dan balok. 
        Volume kubus dan balok dapat diartikan sebagai banyaknya kubus satuan yang menyusunnya.
        Nah, sekarang bagaimana jika bentuk bangun yang ingin kamu hitung volumenya seperti berikut ini?
      </Paragraph>

      <StaticViewer
        models={MODEL_ARRAYS.PRISMA_TYPES}
        urlAR={AR_URLS.PRISMA_JENIS}
        scale={2.8}
        title="Objek 3. Jenis-jenis Prisma"
      />

      <ImageDisplay src="prisma-sikusiku.png" scale={1.5} />
      <ImageDisplay src="prisma-segilima-2.png" scale={1.5} nama="Gambar 9. Contoh prisma" />

      <Paragraph>
        Bangun di atas disebut prisma. Prisma memiliki alas yang bentuknya beragam, 
        misalnya segitiga, segiempat, segilima, atau bentuk lainnya. 
        Pada prisma, kita tidak bisa lagi menggunakan definisi volume seperti saat 
        menghitung volume kubus satuan, karena prisma tidak dapat sepenuhnya diisi 
        oleh kubus satuan secara sempurna.
      </Paragraph>

      <HighlightBox variant="info">
        <p className="text-foreground font-medium mb-2">Sifat Prisma:</p>
        <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
          <li>Memiliki alas dan tutup yang kongruen (bentuk sama)</li>
          <li>Sisi tegak berbentuk persegi panjang</li>
          <li>Prisma dinamai sesuai bentuk alasnya (segitiga, segiempat, dst)</li>
        </ul>
      </HighlightBox>

      <Paragraph>
        Volume kubus dan balok dapat dihitung dengan luas alas dikalikan tinggi. 
        Dengan pola yang sama, volume prisma juga dapat dihitung dengan:
      </Paragraph>

      <HighlightBox variant="formula">
        <p className="text-foreground font-medium mb-2">Rumus Volume Prisma:</p>
        <MathBlock>V = Luas alas × tinggi</MathBlock>
        <p className="text-sm text-muted-foreground mt-2">
          Untuk prisma segitiga: Luas alas = ½ × alas × tinggi segitiga
        </p>
      </HighlightBox>

      <Paragraph>
        <strong>Contoh:</strong> Sebuah prisma ABC.DEF dengan alas berbentuk segitiga siku-siku. 
        Panjang sisi-sisi alasnya adalah AB = 4 cm, BC = 3 cm, dan AC = 5 cm. 
        Jika tinggi prisma adalah 6 cm, maka berapakah volume prisma tersebut?
      </Paragraph>

      <ImageDisplay src="prisma-segitiga-siku-2.png" nama="Gambar 10. Prisma segitiga siku-siku" width="350px" />

      <div className="p-4 bg-muted/50 rounded-xl my-4">
        <p className="text-sm font-medium text-foreground mb-2">Pembahasan:</p>
        <p className="text-sm text-foreground font-mono">
          Luas alas = ½ × AB × BC = ½ × 4 × 3 = 6 cm²<br/>
          Volume = Luas alas × tinggi<br/>
          Volume = 6 × 6 = 36 cm³
        </p>
      </div>

      <Paragraph>
        <strong>Latihan:</strong> Hitunglah volume prisma dengan alas berbentuk trapesium berikut! 
        Tinggi trapesium adalah 2 cm.
      </Paragraph>
      <ImageDisplay src="prisma-trapesium-3.png" nama="Gambar 11. Prisma trapesium" width="330px" />
      <InputAnswer answerKey="42" placeholder="Volume prisma = ..." />

      <NavFooter prev="/volume/balok" next="/volume/limas" />
    </div>
  );
};

export default VolumePrismaPage;
