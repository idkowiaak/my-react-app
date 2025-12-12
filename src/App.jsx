import Navbar from "./common/Navbar";
import Hero from "./sections/HeroSection";
import About from "./sections/AboutSection";
import Contact from "./sections/ContactFormSection";
import Footer from "./common/Footer";
import Services from "./sections/ServicesSection";

function App() {
  const sectionStyle = { scrollMarginTop: "100px" };
  const aboutSectionStyle = { scrollMarginTop: "170px" };
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about" style={aboutSectionStyle}>
        <About />
      </div>

      <div id="services" style={sectionStyle}>
        <Services />
      </div>

      <div id="ContactFormSection" style={sectionStyle}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
