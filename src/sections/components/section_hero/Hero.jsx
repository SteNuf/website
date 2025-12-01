import Button from "../../../components/button/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="section-hero">
      <h1 className="section-hero__title">
        Restaurant
        <br /> Bangkok
      </h1>
      <p className="section-hero__subtitle">
        Originale thailändische Spetialitäten
      </p>
      <Button
        className="section-hero__button"
        buttonText={"Öffnungszeiten ansehen"}
      />
    </section>
  );
}

export default Hero;
