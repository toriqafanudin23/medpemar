import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { TbCube, TbCube3dSphere, TbAugmentedReality, TbBook } from 'react-icons/tb';
import { FiArrowRight, FiPlay, FiBookOpen } from 'react-icons/fi';

const LandingPage = () => {
  const features = [
    {
      icon: <TbCube className="w-8 h-8" />,
      title: 'Model 3D Interaktif',
      description: 'Pelajari bangun ruang dengan model 3D yang dapat diputar dan diperbesar'
    },
    {
      icon: <TbAugmentedReality className="w-8 h-8" />,
      title: 'Augmented Reality',
      description: 'Lihat bangun ruang di dunia nyata melalui kamera smartphone'
    },
    {
      icon: <TbCube3dSphere className="w-8 h-8" />,
      title: 'Animasi Edukatif',
      description: 'Pahami konsep volume dan luas permukaan dengan animasi step-by-step'
    },
    {
      icon: <TbBook className="w-8 h-8" />,
      title: 'Quiz Interaktif',
      description: 'Uji pemahamanmu dengan soal-soal latihan yang menarik'
    },
  ];

  const shapes = [
    { name: 'Kubus', color: 'bg-primary' },
    { name: 'Balok', color: 'bg-accent' },
    { name: 'Prisma', color: 'bg-primary' },
    { name: 'Limas', color: 'bg-accent' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <TbCube className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground font-display">Bangun Ruang AR</span>
            </div>
            <Button asChild>
              <Link to="/home" className="gap-2">
                Mulai Belajar <FiArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  <TbAugmentedReality className="w-4 h-4" />
                  Media Pembelajaran Interaktif
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-display">
                  Bangun Ruang
                  <span className="block text-primary">Sisi Datar</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Pelajari konsep volume dan luas permukaan bangun ruang dengan teknologi
                  Augmented Reality dan visualisasi 3D yang interaktif.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/home">
                    <FiPlay className="w-5 h-5" />
                    Mulai Belajar
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to="/petunjuk">
                    <FiBookOpen className="w-5 h-5" />
                    Petunjuk
                  </Link>
                </Button>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Materi yang dipelajari:</p>
                <div className="flex flex-wrap gap-2">
                  {shapes.map((shape, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground"
                    >
                      {shape.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right content - 3D illustration placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-lg mx-auto">
                {/* Decorative shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Main cube illustration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64">
                      <div className="w-full h-full bg-primary/10 border-2 border-primary/30 rounded-3xl rotate-12 animate-float" />
                    </div>
                    <div className="absolute top-1/3 left-1/3 w-32 h-32 sm:w-40 sm:h-40">
                      <div className="w-full h-full bg-accent/10 border-2 border-accent/30 rounded-2xl -rotate-6" style={{ animationDelay: '0.5s' }} />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32">
                      <div className="w-full h-full bg-primary/10 border-2 border-primary/30 rounded-xl rotate-3" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Center icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary rounded-3xl flex items-center justify-center shadow-xl">
                        <TbCube3dSphere className="w-12 h-12 sm:w-16 sm:h-16 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
              Fitur Pembelajaran
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Media pembelajaran ini dilengkapi dengan berbagai fitur interaktif untuk memudahkan pemahaman konsep matematika.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-base h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
                  Tentang Media Pembelajaran
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Media pembelajaran ini dirancang khusus untuk siswa SMP Kelas VIII dalam mempelajari
                    materi Bangun Ruang Sisi Datar yang meliputi Kubus, Balok, Prisma, dan Limas.
                  </p>
                  <p>
                    Dengan memanfaatkan teknologi Augmented Reality (AR) dan visualisasi 3D,
                    siswa dapat memahami konsep matematika dengan cara yang lebih menyenangkan dan interaktif.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-muted rounded-xl">
                    <div className="text-3xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">Jenis Bangun Ruang</div>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <div className="text-3xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Topik Utama</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Card className="card-base">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TbCube className="w-5 h-5 text-primary" />
                    Volume Bangun Ruang
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pelajari cara menghitung volume kubus, balok, prisma, dan limas
                    dengan bantuan visualisasi 3D dan animasi interaktif.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-base">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TbCube3dSphere className="w-5 h-5 text-primary" />
                    Luas Permukaan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pahami konsep jaring-jaring dan luas permukaan bangun ruang
                    dengan animasi pembukaan jaring-jaring.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground font-display">
              Siap Mulai Belajar?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Jelajahi dunia bangun ruang dengan cara yang menyenangkan dan interaktif.
              Mulai perjalanan belajarmu sekarang!
            </p>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/home">
                Mulai Sekarang <FiArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Media Pembelajaran AR - Bangun Ruang Sisi Datar.
            Dibuat untuk Pendidikan Indonesia oleh <Link to="/developer-bio" className="text-primary hover:underline">Toriq Afanudin</Link>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
