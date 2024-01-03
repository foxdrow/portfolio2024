import logo from "../assets/img/Logo foxdrow2.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" />
      <a href="https://github.com/foxdrow" target="_blank">GITHUB / ></a>
      <a href="https://www.linkedin.com/in/raphael-saverys-668392216/" target="_blank">LINKEDIN / ></a>
    </div>
  );
}
