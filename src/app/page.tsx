import ContactSection from "./components/contact-section";
import Footer from "./components/footer-section";
import HabilitiesSection from "./components/habilities-section";
import HeroSection from "./components/hero-section";
import NavBar from "./components/navbar/nav-bar";
import ProjectsSection from "./components/projects";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HabilitiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
