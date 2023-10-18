import React from "react";
import logo from "../../Images/GitHubLogo.jpg"
function Footer() {
  return (
    <footer >
      <div className="footer-container">
        <h5> Copyright © 2023 All Rights Reserved by: Slyvka Marko</h5>
        <div className="partners">
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
        </div>
      </div>
    </footer>
  );
}

export { Footer };
