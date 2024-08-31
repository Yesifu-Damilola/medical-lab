import { Btn } from "../UI/Button/Btn";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";
import { useState } from "react";
import { ListItem } from "./ListItem";
import { MobileNav } from "./MobileNav";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <a className="" href="/">
          <span className="medic-span">Medic</span>Lab
        </a>
        <div>
          <div className="menu-icon" onClick={toggle}>
            <IoMdMenu fontSize={20} />
          </div>
          {showNav && <MobileNav toggle={toggle} />}
        </div>

        <div className="menu-large">
          <ListItem />
        </div>
      </nav>
      <div className="showcase">
        <p>We Provide</p>
        <h1>Full Medical Care!</h1>
        <p className="para1">Highest standard of medical service</p>
        <Btn>know more</Btn>
      </div>
    </header>
  );
};

export default Navbar;
