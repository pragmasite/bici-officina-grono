import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { lang } = useLanguage();

  return (
    <div className={lang}>
      <DisclaimerModal />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
