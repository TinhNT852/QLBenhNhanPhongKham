import { useState } from "react";
import {  CarryOutOutlined, CodeOutlined, PlusCircleOutlined, ScanOutlined, SketchOutlined, UnlockOutlined, UserOutlined } from "@ant-design/icons";
import "./Authorization.css";
import { NavLink } from "react-router-dom";

const rolesData = [
  {
    category: "Đặt phòng",
    permissions: [
      { id: 1, name: "Xem thông tin",icon: <UserOutlined />, description: "Add and edit user names, assign roles, and include contact details.", selected: false },
      { id: 2, name: "Thêm thông tin", icon: <CarryOutOutlined />, description: "View and edit registration details such as name, CCCD, phone number and email.", selected: true },
      { id: 3, name: "Chỉnh sửa thông tin", icon: <CodeOutlined />,description: "Edit campaign details such as selecting time slots, customers, and products.", selected: true },
      { id: 4, name: "Xóa thông tin", icon: <ScanOutlined />,description: "Verify registration information and ensure accuracy and security.", selected: false },
    ],
  },
  {
    category: "Lễ tân",
    permissions: [
      { id: 5, name: "Xem", icon: <UserOutlined />, description: "Add and edit user names, assign roles, and include contact details.", selected: false },
      { id: 6, name: "Thêm", icon: <CarryOutOutlined />, description: "View and edit registration details such as name, CCCD, phone number and email.", selected: true },
      { id: 7, name: "Chỉnh sửa", icon: <CodeOutlined />, description: "Edit campaign details such as selecting time slots, customers, and products.", selected: true },
      { id: 8, name: "Xóa", icon: <ScanOutlined />, description: "Verify registration information and ensure accuracy and security.", selected: false },
    ],
  },
  {
    category: "Buồng phòng",
    permissions: [
      { id: 9, name: "Add & Edit User", icon: <UserOutlined />, description: "Add and edit user names, assign roles, and include contact details.", selected: false },
      { id: 10, name: "Edit Campaigns", icon: <CarryOutOutlined />, description: "View and edit registration details such as name, CCCD, phone number and email.", selected: true },
      { id: 11, name: "View and Edit Registration List", icon: <CodeOutlined />, description: "Edit campaign details such as selecting time slots, customers, and products.", selected: true },
      { id: 12, name: "Scan QR Code for Customers", icon: <ScanOutlined />, description: "Verify registration information and ensure accuracy and security.", selected: false },
    ]
  }
];

const rolesMenu = [
  {name: "Accountance", icon: <SketchOutlined />},
  {name: "Quản trị viên", icon: <SketchOutlined />},
  {name: "Food and Beverage", icon: <SketchOutlined />},
  {name: "Front Office", icon: <SketchOutlined />},
  {name: "FOM", icon: <SketchOutlined />},
  {name: "Reservation", icon: <SketchOutlined />}
]

export default function Authorization() {
  const [roles, setRoles] = useState(rolesData);

  const togglePermission = (categoryIndex, permissionIndex) => {
    const updatedRoles = [...roles];
    updatedRoles[categoryIndex].permissions[permissionIndex].selected = !updatedRoles[categoryIndex].permissions[permissionIndex].selected;
    setRoles(updatedRoles);
  };

  return (
    <div className="container-roles">
      <aside className="sidebar-roles">
        <button className="add-button"><PlusCircleOutlined /> Thêm bộ phận</button>
        <div className="sider-roles-pick">
          {rolesMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "activeLink sidebar-link" : "sidebar-link"
              }>
              <button className="sidebar-item">
                <div className="sidebar-item-onbutton">{item.icon}</div>
                  {item.name}
              </button>
            </NavLink>
          ))}
        </div>
      </aside>

        <div className="permission-container">
          <div className="main-author">
            <div className="header-author">
              <h3>Thiết lập phân quyền</h3>
              <div className="header-author-button">
                <button className="header-button"><UnlockOutlined /> Mở khoá tài khoản</button>
                <button className="header-button-add"><PlusCircleOutlined /> Thêm tài khoản</button>
              </div>
            </div>
          {roles.map((role, categoryIndex) => (
            <div key={role.category} className="category">
              <h3>{role.category}</h3>
              <div className="permissions-grid">
                {role.permissions.map((perm, permissionIndex) => (
                  <div key={perm.id} className="permission-item">
                    <p className="icon-size" style={{fontSize: "24px"}}>{perm.icon}</p>
                  <div className="permission-block">
                    <div className="permission-checkbox">
                      <input type="checkbox" checked={perm.selected} onChange={() => togglePermission(categoryIndex, permissionIndex)}/>
                      <h4>{perm.name}</h4>
                    </div>
                      <div>
                        <p>{perm.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
