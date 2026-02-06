import HabilitiesSection from "./components/habilities-section";
import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";
import ProjectsSection from "./components/projects";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HabilitiesSection />
      <ProjectsSection />
    </div>
  );
}
