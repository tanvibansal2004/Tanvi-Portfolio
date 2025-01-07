import Skills from "./components/Skills";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Coding from "./components/Coding";
import Email from "./components/Email";
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Communities from "./components/Communities"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#181818]">
      <Navbar />
        <div className="mx-auto px-5 lg:px-12 py-4 mt-24 w-full">
            <HeroSection />
            <Skills />
            <Projects />
            <Coding />
            <Experience />
            <Communities />
            <Email />
        </div>
        <Footer />
    </main>
  );
}

