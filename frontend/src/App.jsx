import Navbar from "./Components/Navbar";
import Hero from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToHash from "./Components/ScrollToHash";

const App = () => {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
