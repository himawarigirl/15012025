import Header from './components/hoc/Header';
import Footer from './components/hoc/Footer';
import Hero from './components/hoc/Hero';
import Hero_Grid from './components/hoc/Hero_Grid';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero_Grid />
      <Footer />
    </div>
  );
}
