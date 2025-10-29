import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);  //0 matlab abhi hum dashboard par hai ,1 ka matlab order par jyenge, 2 ka matlab holdings par jayenge and so on...

  const [isHovered, setIsHovered] = useState(false);
   // ✅ access both token and username from cookies
  const [cookies, setCookie, removeCookie] = useCookies(["token", "username"]);

  const username = cookies.username || "User";
  const isLoggedIn = !!cookies.token;

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    removeCookie("username", { path: "/" }); // ✅ clear username on logout
    window.open("http://localhost:3001/", "_blank");
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };


  const menuClass = "menu";  //similar to class="menu" means we are giving css class to menuClass so we can apply css property on it
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.webp" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
            
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)} >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}> Orders </p>
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings"  onClick={() => handleMenuClick(2)} >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}> Holdings </p>
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/positions"  onClick={() => handleMenuClick(3)} >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}> Positions </p>
            </Link>
          </li>

          <li>
            <Link style={{ textDecoration: "none" }} to="/funds"  onClick={() => handleMenuClick(4)} >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}> Funds </p>
            </Link>
          </li>

          <li>
            <Link  style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)} >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}> Apps  </p>
            </Link>
          </li>
        </ul>

        <hr />
        <div
            className="profile-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: "pointer", position: "relative" }}>
            {/* Show only ZU when not hovered */}
            {!isHovered && <div className="avatar">ZU</div>}

           {/* When hovered → show username + logout */}
           {isHovered && (
              <div className="profile-dropdown">
                <p className="username">{username}</p>
                <button
                  type="button"
                  onClick={handleLogout}
                >Logout</button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Menu;