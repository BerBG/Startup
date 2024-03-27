import React, { useContext, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import { UserContext } from "../../../context/userContext";
import DropDownProfile from "../../pages/DropDownProfile/DropDownProfile";

const Navbar = () => {
  const { setUser } = useContext(UserContext);
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMobileAuth, setShowMobileAuth] = useState(false);

  const handleScroll = () => {
    window.scrollY > 750 ? setSticky(true) : setSticky(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenuAndAuth = () => {
    setMobileMenu(!mobileMenu);
    setShowMobileAuth(!showMobileAuth);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="/" className="logo">
        Skill Mentor
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        {showMobileAuth && (
          <>
            <li>
              <Link to="/login" className="login-register">Login</Link>
            </li>
            <li>
              <Link to="/register" className="login-register">Register</Link>
            </li>
          </>
        )}
        <li>
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="programs"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Program
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="tutors"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Tutors
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            Contact us
          </ScrollLink>
        </li>
        <li>
          <DropDownProfile setUser={setUser} />
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        className="menu-icon"
        onClick={toggleMenuAndAuth}
      />
    </nav>
  );
};

export default Navbar;
