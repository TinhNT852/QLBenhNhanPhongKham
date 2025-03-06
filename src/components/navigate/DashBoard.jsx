import "bootstrap/dist/css/bootstrap.min.css";
import { Bell, Home, Menu, Package, Settings, Shield, User } from "lucide-react";
import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import "./DashBoard.css";

export default function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Lịch hẹn khám", icon: <Home />, path: "/home" },
    { name: "Người dùng", icon: <Package />, path: "/users" },
    { name: "Thuốc", icon: <Shield />, path: "/products" },
    { name: "Bệnh nhân", icon: <User />, path: "/customers" },
    { name: "Cấu hình", icon: <Settings />, path: "/settings" },
  ];

  const footerMenu = [
    { name: "Thông báo", icon: <Bell />, path: "/notification" },
  ];

  const languages = [
    { name: "English", logo: "🇺🇸" },
    { name: "Vietnamese", logo: "🇻🇳" },
    { name: "French", logo: "🇫🇷" },
    { name: "German", logo: "🇬🇧" },
  ];

  const users = {
    name: "Nguyễn Thái Tình",
    email: "tinhnt@gmail.com",
    avatar: "",
    initials: "NT",
    isOnline: true,
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log("Selected language:", selectedLanguage);
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
        <div className="sidebar-header">
          <span className="logo">{!collapsed && "ERATEQ"}</span>
          <button
            className="menu-button"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Menu className="menu-icon" />
          </button>
        </div>
        <div className="sidebar-menu">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "activeLink sidebar-link" : "sidebar-link"
              }
            >
              <button className="sidebar-button">
                {item.icon}
                {!collapsed && item.name}
              </button>
            </NavLink>
          ))}
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-footer-menu">
            {footerMenu.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "activeLink footer-link" : "footer-link"
                }
              >
                <button className="footer-button">
                  {item.icon}
                  {!collapsed && item.name}
                </button>
              </NavLink>
            ))}
            <div className="language-selector">
              {!collapsed && (
                <select
                  className="language-button"
                  onChange={handleLanguageChange}
                >
                  {languages.map((lang, index) => (
                    <option key={index} value={lang.name}>
                      {lang.logo} {lang.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="user-card">
              <div className="avatar">
                {users.avatar ? (<img src={users.avatar} alt="Avatar" />) : (<span>{users.initials}</span>)}
                {users.isOnline && <span className="status-dot"></span>}
              </div>
              {!collapsed && (
                <div className="user-info">
                  <span className="user-name">{users.name}</span>
                  <span className="user-email">{users.email}</span>
                </div>
              )}
              {!collapsed && (
                <button className="menu-button">
                  <FaEllipsisV />
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}