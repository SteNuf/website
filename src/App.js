import "./App.css";
import AboutUs from "./sections/components/section_aboutus/AboutUs";
import Contact from "./sections/components/section_contact/Contact";
import Footer from "./sections/components/section_footer/Footer";
import Hero from "./sections/components/section_hero/Hero";
import Header from "./sections/components/section_header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
