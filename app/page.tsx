import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { LogoAnimation } from "./components/LogoAnimation";
import { Portfolio } from "./components/Portfolio";
import { Stack } from "./components/Stack";
import { KeyMetrics } from "./components/KeyMetrics";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoAnimation/>
      <About/>
      <Portfolio/>
      <Stack/>
      <KeyMetrics/>
      <Services/>
      <Contact/>
      <Footer/>
      <Analytics/>
    </>
  );
}
