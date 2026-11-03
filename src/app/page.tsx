import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import ExpertiseSection from "./components/expertise-section";
import Footer from "./components/footer-section";
import HeroSection from "./components/hero-section";
import NavBar from "./components/navbar/nav-bar";
import ProjectsSection from "./components/projects";
import SkipLink from "./components/shared/skip-link";

export default function Home() {
  return (
    <>
      <SkipLink />
      <NavBar />
      <main id="content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
