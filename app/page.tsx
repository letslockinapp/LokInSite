import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ScareScreens from '@/components/ScareScreens';
import Screenshots from '@/components/Screenshots';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <ScareScreens />
        <Screenshots />
        <Download />
        <Footer />
      </main>
    </>
  );
}
