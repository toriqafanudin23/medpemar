import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import Layout from '@/components/layout/Layout';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { Toaster } from '@/components/ui/sonner';
import '@/App.css';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const HomePage = lazy(() => import('@/pages/HomePage'));
const VolumePage = lazy(() => import('@/pages/VolumePage'));
const VolumeKubusPage = lazy(() => import('@/pages/VolumeKubusPage'));
const VolumeBalokPage = lazy(() => import('@/pages/VolumeBalokPage'));
const VolumePrismaPage = lazy(() => import('@/pages/VolumePrismaPage'));
const VolumeLimasPage = lazy(() => import('@/pages/VolumeLimasPage'));
const LuasPermukaanPage = lazy(() => import('@/pages/LuasPermukaanPage'));
const LuasKubusPage = lazy(() => import('@/pages/LuasKubusPage'));
const LuasBalokPage = lazy(() => import('@/pages/LuasBalokPage'));
const LuasPrismaPage = lazy(() => import('@/pages/LuasPrismaPage'));
const LuasLimasPage = lazy(() => import('@/pages/LuasLimasPage'));
const QuizPage = lazy(() => import('@/pages/QuizPage'));
const GuidePage = lazy(() => import('@/pages/GuidePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/petunjuk" element={<GuidePage />} />
              <Route path="/volume" element={<VolumePage />} />
              <Route path="/volume/kubus" element={<VolumeKubusPage />} />
              <Route path="/volume/balok" element={<VolumeBalokPage />} />
              <Route path="/volume/prisma" element={<VolumePrismaPage />} />
              <Route path="/volume/limas" element={<VolumeLimasPage />} />
              <Route path="/luas-permukaan" element={<LuasPermukaanPage />} />
              <Route path="/luas-permukaan/kubus" element={<LuasKubusPage />} />
              <Route path="/luas-permukaan/balok" element={<LuasBalokPage />} />
              <Route path="/luas-permukaan/prisma" element={<LuasPrismaPage />} />
              <Route path="/luas-permukaan/limas" element={<LuasLimasPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/quiz/:type" element={<QuizPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
