import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Heading1, Heading2, Paragraph } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PendahuluanPage = () => {
  const { setPageNumber } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(null);
  }, [setPageNumber]);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in space-y-8 pb-8">
      <Heading1>Pendahuluan Pembelajaran</Heading1>

      <Paragraph>
        Halaman ini memberikan gambaran umum tentang tujuan, capaian pembelajaran, dan indikator yang akan dicapai selama mempelajari Bangun Ruang Sisi Datar.
      </Paragraph>

      <div className="space-y-6">
        <div className="rounded-3xl border border-border bg-muted/50 p-6">
          <Heading2>Tujuan Pembelajaran</Heading2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Unsur &amp; Jaring-jaring: Siswa dapat mengidentifikasi unsur-unsur dan membuat jaring-jaring kubus, balok, prisma, dan limas.</li>
            <li>Luas Permukaan: Siswa dapat menemukan rumus dan menghitung luas permukaan bangun ruang sisi datar.</li>
            <li>Volume: Siswa dapat menemukan rumus dan menghitung volume bangun ruang sisi datar.</li>
            <li>Aplikasi Kontekstual: Siswa dapat menyelesaikan masalah sehari-hari yang berkaitan dengan volume dan luas permukaan BRSD.</li>
            <li>Pemodelan: Siswa dapat membuat model bangun ruang sisi datar dari bahan karton/kertas.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-muted/50 p-6">
          <Heading2>Capaian Pembelajaran (CP) - Fase D (Kurikulum Merdeka)</Heading2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Geometri: Peserta didik dapat membuat jaring-jaring bangun ruang (prisma dan limas) dan membuat bangun ruang tersebut dari jaring-jaringnya.</li>
            <li>Pengukuran: Peserta didik dapat menentukan luas permukaan dan volume bangun ruang sisi datar (prisma dan limas) untuk menyelesaikan masalah.</li>
            <li>Perubahan Ukuran: Peserta didik dapat menjelaskan pengaruh perubahan secara proporsional dari bangun ruang sisi datar terhadap ukuran panjang, luas, dan/atau volume.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-muted/50 p-6">
          <Heading2>Indikator Pencapaian Kompetensi</Heading2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Mengidentifikasi unsur-unsur bangun ruang sisi datar (rusuk, titik sudut, sisi, diagonal bidang, diagonal ruang, bidang diagonal).</li>
            <li>Menemukan jaring-jaring kubus, balok, prisma, dan limas.</li>
            <li>Menghitung luas permukaan dan volume kubus dan balok.</li>
            <li>Menghitung luas permukaan dan volume prisma dan limas.</li>
            <li>Menyelesaikan masalah kontekstual yang berkaitan dengan luas permukaan dan volume bangun ruang sisi datar.</li>
          </ul>
        </div>
      </div>

      <div className="pt-6">
        <Link to="/home">
          <Button size="lg" className="gap-2">
            Lanjut ke Pilihan Topik
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PendahuluanPage;
