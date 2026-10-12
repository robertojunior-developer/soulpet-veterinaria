import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFloatingButton } from "./components/ui/WhatsAppButton";
import { ScrollProgress } from "./components/animations/ScrollProgress";
import { BackToTop } from "./components/animations/BackToTop";
import { Hero } from "./components/sections/Hero";
import { Introduction } from "./components/sections/Introduction";
import { Banner } from "./components/sections/Banner";
import { Services } from "./components/sections/Services";
import { IntegrativeCare } from "./components/sections/IntegrativeCare";
import { About } from "./components/sections/About";
import { Differentials } from "./components/sections/Differentials";
import { Gallery } from "./components/sections/Gallery";
import { Testimonials } from "./components/sections/Testimonials";
import { InstagramSection } from "./components/sections/Instagram";
import { CTA } from "./components/sections/CTA";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Banner />
        <Services />
        <IntegrativeCare />
        <Differentials />
        <Gallery />
        <About />
        <Testimonials />
        <InstagramSection />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <BackToTop />
    </div>
  );
}

export default App;
