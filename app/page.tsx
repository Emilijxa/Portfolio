import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { LogoAnimation } from "./components/LogoAnimation"
import { Portfolio } from "./components/Portfolio"

export default function Home() {
  return (
    <> 
      <Hero/>
      <LogoAnimation/>
      <About/>
      <Portfolio/>
    </>
  );
}
