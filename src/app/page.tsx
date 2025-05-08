import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ClientBootstrap from '@/components/ClientBootstrap';
import NavigationController from '@/components/NavigationController';

export default function Home() {
  return (
    <>
      <ClientBootstrap />
      <Navbar />
      <main className="snap-container overflow-y-auto">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <NavigationController />
    </>
  );
}
