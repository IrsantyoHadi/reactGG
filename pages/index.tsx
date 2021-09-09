import { useEffect } from 'react';
import AOS from 'aos';
import NavBar from '../components/organisms/Navbar';
import MainBaner from '../components/organisms/MainBaner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <NavBar />
      <MainBaner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </div>
  );
}
