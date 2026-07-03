import AboutSection from "./components/AboutSection";
import ExperiencesSection from "./components/ExperiencesSection";
import Header from "./components/Header";

export default function Home() {
  return (
    // <main className="min-h-screen flex flex-col items-center bg-black">
    <main>
      <AboutSection/>
      <ExperiencesSection/>
    </main>
  );
}