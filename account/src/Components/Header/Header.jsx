import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/GitHubLogo.jpg";
import EditProfile from "../../Images/edit-profile.png";
import Profile from "../../Images/profile.png";
import Premium from "../../Images/premium.png";
import Logout from "../../Images/logout.png";
import CheckMark from "../../Images/check-mark.png";

function Header() {
  const [activePanel, setActivePanel] = useState(false);
  return (
    <header className="header">
      <div className="top-bar-container">
        <div className="logo-section">
          <img src={logo} alt="" />
          <h2>Chekai1974</h2>
        </div>
        <div className="profile-links">
          <NavLink to="/myProfile">Slyvka Marko</NavLink>
          <img
            src={logo}
            alt=""
            id="img-profile"
            onClick={() => setActivePanel(!activePanel)}
          />
          <div className={`panel ${activePanel && "active"}`}>
            <div className="panel-links">
              <NavLink to="/myProfile">
                <img src={Profile} alt="" />
                Go to Profile
              </NavLink>
              <NavLink to="/editProfile">
                <img src={EditProfile} alt="" />
                Edit Profile
              </NavLink>
              <NavLink to="/getPremium">
                <img src={Premium} alt="" />
                Go Premium
              </NavLink>
              <NavLink>
                <img src={Logout} alt="" />
                Logout
              </NavLink>
            </div>
            <p style={{ textDecoration: "line-through" }}>
              Premium <img src={CheckMark} alt="" />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
