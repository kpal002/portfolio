// Home page — composes all sections.
// Order matches the navbar: Home (Hero) → Projects → Blog → Experience → About → Contact.

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Blog />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
