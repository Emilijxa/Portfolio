import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { LogoAnimation } from "./components/LogoAnimation";
import { Portfolio } from "./components/Portfolio";
import { Stack } from "./components/Stack";
import { KeyMetrics } from "./components/KeyMetrics";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <> 
      <Hero/>
      <LogoAnimation/>
      <About/>
      <Portfolio/>
      <Stack/>
      <KeyMetrics/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}
