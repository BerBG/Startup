import React, { useState, useRef, useContext } from "react";
import "./DropDownProfile.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { UserContext } from "../../../context/userContext";
import userpic from "../../assets/user.png";
import edit from "../../assets/edit.png";
import inbox from "../../assets/envelope.png";
import settings from "../../assets/settings.png";
import help from "../../assets/help.png";
import logout from "../../assets/logout.png";
import register from "../../assets/register.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function DropDownProfile() {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    axios.get('http://localhost:8000/logout')
    .then(res => {
      if(res.data.Status === "Success") {
        setUser(null);
        navigate('/')
      } else {
        alert("error")
      }
    }).catch(err => console.log(err))
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div
      className="DropDownProfile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger">
          <IoPersonCircleOutline className="icon-profile" />
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            {!user ? (
              <>
                <DropdownItem
                  img={userpic}
                  text={"Login"}
                  onClick={handleLoginClick}
                />
                <DropdownItem
                  img={register}
                  text={"Register"}
                  onClick={handleRegisterClick}
                />
              </>
            ) : (
              <>
                <DropdownItem img={userpic} text={"Profile"} />
                <DropdownItem img={edit} text={"Edit"} />
                <DropdownItem img={inbox} text={"Inbox"} />
                <DropdownItem img={settings} text={"Settings"} />
                <DropdownItem img={help} text={"Helps"} />
                <DropdownItem
                  img={logout}
                  text={"Logout"}
                  onClick={handleLogoutClick}
                />
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem" onClick={props.onClick}>
      <img src={props.img} alt="" />
      <a>{props.text}</a>
    </li>
  );
}

export default DropDownProfile;
