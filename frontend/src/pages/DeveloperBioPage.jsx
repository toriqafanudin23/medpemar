import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TbArrowLeft, TbBrandGithub, TbBrandLinkedin, TbMail } from 'react-icons/tb';

const DeveloperBioPage = () => {
    return (
        <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Helper Navigation */}
                <Button asChild variant="ghost" className="gap-2 -ml-4">
                    <Link to="/">
                        <TbArrowLeft className="w-5 h-5" />
                        Kembali ke Beranda
                    </Link>
                </Button>

                {/* Profile Header */}
                <div className="text-center space-y-6 animate-fade-in">
                    <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-4xl border-4 border-background shadow-xl">
                        👨‍💻
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
                            Toriq Afanudin
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Pengembang Media Pembelajaran AR
                        </p>
                    </div>
                </div>

                {/* Bio Content */}
                <Card className="animate-slide-up">
                    <CardContent className="p-6 sm:p-8 space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">Tentang Pengembang</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Halo! Saya adalah pengembang dibalik media pembelajaran berbasis Augmented Reality ini.
                                Fokus utama saya adalah menciptakan pengalaman belajar yang interaktif dan menyenangkan melalui teknologi web modern.
                                Aplikasi ini dikembangkan sebagai bagian dari skripsi untuk membantu siswa SMP memahami konsep Bangun Ruang Sisi Datar.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">Teknologi yang Digunakan</h2>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'React JS', 'Three.js', 'React Three Fiber',
                                    'Tailwind CSS', 'Framer Motion', 'Vite'
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Kontak & Sosial Media</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <a
                                    href="https://github.com/toriqafanudin23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                                        <TbBrandGithub className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-foreground">GitHub</div>
                                        <div className="text-xs text-muted-foreground">@toriqafanudin23</div>
                                    </div>
                                </a>

                                {/* Placeholder for Email */}
                                <a
                                    href="mailto:toriqafanudin23@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                                        <TbMail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-foreground">Email</div>
                                        <div className="text-xs text-muted-foreground">toriqafanudin23@gmail.com</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DeveloperBioPage;
