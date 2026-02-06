import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";
import Sla from "./components/sla";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Sla />
    </div>
  );
}
