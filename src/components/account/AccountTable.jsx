import React from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import "./AccountTable.css";
import { NavLink, Outlet } from "react-router-dom";

const AccountTable = () => {
  const menuItems = [
    { name: "Danh sách tài khoản", icon: <UserOutlined />,path: "./list"},
    { name: "Phân quyền người dùng", icon: <TeamOutlined />, path: "./author"}
  ]



  return (
    <div className="account-table-container">
      <nav className="horizontal-nav">
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
              <NavLink key={index} to={item.path}  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                <button className="nav-button">
                  {item.icon}
                  {item.name}
                </button>
              </NavLink>
          ))}
        </ul>
     </nav>
     <main className="dashboard-content-list">
        <Outlet />
      </main>
    </div>
  );
};

export default AccountTable;
