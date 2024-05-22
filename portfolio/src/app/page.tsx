


import Navbar from '@/component/layout/Navbar';
import Modal from '@/component/layout/Modal';
import BurgerMenu from '@/component/menu/BurgerMenu';
import Hero from '@/component/layout/Hero';
import About from '@/component/layout/About';
import Projects from '@/component/layout/Projects';
import Services from '@/component/layout/Services';
import Footer from '@/component/layout/Footer';
import { GlobalStateProvider } from '@/component/contexts/GlobalStateContext';
import './globals.css'

export default function Home() {
  return (
    <GlobalStateProvider >
      <Navbar />
      <Modal />
      <BurgerMenu />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </GlobalStateProvider>
  );
}
