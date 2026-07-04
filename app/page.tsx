import AboutSection from "./components/AboutSection";
import Carousel from "./components/Carousel";
import ExperiencesSection from "./components/ExperiencesSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    // <main className="min-h-screen flex flex-col items-center bg-black">
    <main>
      <HeroSection/>
      <Carousel/>
      <AboutSection/>
      <ExperiencesSection/>
    </main>
  );
}