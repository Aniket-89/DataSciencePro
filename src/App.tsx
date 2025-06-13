import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
