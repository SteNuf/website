import "./App.css";
import AboutUs from "./sections/components/section_aboutus/AboutUs";
import Contact from "./sections/components/section_contact/Contact";
import Footer from "./sections/components/section_footer/Footer";
import Hero from "./sections/components/section_hero/Hero";
import Navbar from "./sections/components/section_navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
