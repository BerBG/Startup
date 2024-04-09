import React, { useState } from "react";
import "./Sidebar.css";
import tutor from "../../assets/tutor_10.png";
import { RiHomeLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { TiUserOutline } from "react-icons/ti";
import { LuFileText } from "react-icons/lu";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
import { GoGear } from "react-icons/go";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenuVisible, setSubMenuVisible] = useState({});

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
    setSubMenuVisible((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="head">
          <div className="user-img">
            <img src={tutor} alt="" />
          </div>
          <div className="user-details">
            <p className="title">web developer</p>
            <p className="name">John Doe</p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul>
              <li className={activeMenu === "dashboard" ? "active" : ""}>
                <a href="#" onClick={() => toggleMenu("dashboard")}>
                  <i><RiHomeLine className="icon" /></i>
                  <span className="text">Dashboard</span>
                </a>
              </li>
              <li className={activeMenu === "audience" ? "active" : ""}>
                <a href="#" onClick={() => toggleMenu("audience")}>
                  <i><TiUserOutline className="icon" /></i>
                  <span className="text">Audience</span>
                  <i>
                    <IoIosArrowDown className="icon-arrow" />
                  </i>
                </a>
                <ul className="sub-menu" style={{ display: subMenuVisible['audience'] ? 'block' : 'none' }}>
                  <li>
                    <a href="#">
                      <span className="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Subscribers</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={activeMenu === "posts" ? "active" : ""}>
                <a href="#" onClick={() => toggleMenu("posts")}>
                  <i><LuFileText className="icon" /></i>
                  <span className="text">Posts</span>
                </a>
              </li>
              <li className={activeMenu === "schedules" ? "active" : ""}>
                <a href="#" onClick={() => toggleMenu("schedules")}>
                  <i><IoCalendarClearOutline className="icon" /></i>
                  <span className="text">Schedules</span>
                </a>
              </li>
              <li className={activeMenu === "income" ? "active" : ""}>
                <a href="#" onClick={() => toggleMenu("income")}>
                  <i><BsBarChartLine className="icon" /></i>
                  <span className="text">Income</span>
                  <i>
                    <IoIosArrowDown className="icon-arrow" />
                  </i>
                </a>
                <ul className="sub-menu" style={{ display: subMenuVisible['income'] ? 'block' : 'none' }}>
                  <li>
                    <a href="#">
                      <span className="text">Earnings</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Funds</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Declines</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Payouts</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="title">Setings</p>
            <ul>
              <li className={activeMenu === "dashboard" ? "active" : ""}>
                <a href="#" onClick={() => toggleMenu("dashboard")}>
                  <i><GoGear  className="icon" /></i>
                  <span className="text">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
