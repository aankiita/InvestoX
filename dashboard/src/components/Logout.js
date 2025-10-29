// import React, { useState } from "react";
// import { useCookies } from "react-cookie";
// import { Link } from "react-router-dom";
// import "./menu.css";

// const Logout = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [cookies, setCookie, removeCookie] = useCookies(["token", "username"]);

//   const username = cookies.username || "User";
//   const isLoggedIn = !!cookies.token;

//   const handleLogout = () => {
//     removeCookie("token", { path: "/" });
//     removeCookie("username", { path: "/" }); 
//     window.open("http://localhost:3001/", "_blank");
//   };

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };


//   const menuClass = "menu";  //similar to class="menu" means we are giving css class to menuClass so we can apply css property on it
//   const activeMenuClass = "menu selected";
  
//     return (
//         <>
//        <div
//             className="profile-section"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             style={{ cursor: "pointer", position: "relative" }}>
//             {/* Show only ZU when not hovered */}
//             {!isHovered && <div className="avatar">ZU</div>}

//            {/* When hovered → show username + logout */}
//            {isHovered && (
//               <div className="profile-dropdown">
//                 <p className="username">{username}</p>
//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                 >Logout</button>
//               </div>
//             )}
//         </div>
//     </>
// )};
// export default Logout;
