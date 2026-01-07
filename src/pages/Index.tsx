import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { lang } = useLanguage();
  const title =
    lang === "de"
      ? "BIRCHLER rahmen & Kunst - Einsiedeln"
      : "BIRCHLER Framing & Art - Einsiedeln";
  const description =
    lang === "de"
      ? "Professionelle Einrahmung, Aufziehen und Kunsthandel in Einsiedeln. Custom Rahmen, Passepartouts und Kunstverkauf."
      : "Professional picture framing, mounting, and art sales in Einsiedeln. Custom frames, mats, and artwork.";

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="/images/hero-bg.jpg" />
        <meta name="theme-color" content="#6B4B2C" />
        <link rel="icon" href="/images/logo.jpg" />
      </Helmet>

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
    </>
  );
};

export default Index;
