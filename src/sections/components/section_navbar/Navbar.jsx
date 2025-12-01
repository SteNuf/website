import Links from "../../../components/links/Links";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="section_navbar">
      <Links linksText={"Über uns"} className="nav_item" />
      <Links linksText={"Öffnungszeiten"} className="nav_item" />
      <Links linksText={"Kontakt"} className="nav_item" />
    </div>
  );
}
export default Navbar;
