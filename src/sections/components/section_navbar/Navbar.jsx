import Links from "../../../components/links/Links";

function Navbar() {
  return (
    <div>
      Section Navbar <Links linksText={"Über uns"} />
      <Links linksText={"Öffnungszeiten"} />
      <Links linksText={"Kontakt"} />
    </div>
  );
}
export default Navbar;
