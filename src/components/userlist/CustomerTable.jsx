import { CheckCircleOutlined, DeleteOutlined, EditOutlined, EllipsisOutlined, PlusOutlined, ProfileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Table } from "antd";
import "antd/dist/reset.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerTable.css";
import ModalForm from "./form/ModalForm";

const data = [
  {
    key: "1",
    name: "Bold text column",
    dob: "12/01/2025",
    gender: "Nam",
    number: "01223334444",
    address: "Regular text column",
    email: "truongtd@gmail.com",
  },
  {
    key: "2",
    name: "Bold text column",
    dob: "12/01/2025",
    gender: "Nam",
    number: "08765432100",
    address: "Regular text column",
    email: "truongtd@gmail.com",
  }
];

const CustomerTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleActionClick = (record) => {
    console.log("Thông tin item được click:", record);
    navigate('./detail', { state: { item: record }});
  };

  const columns = [
    {
      title: "Tên Bệnh Nhân",
      dataIndex: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Ngày Sinh",
      dataIndex: "dob",
    },
    {
      title: "Giới Tính",
      dataIndex: "gender",
    },
    {
      title: "Số điện thoại",
      dataIndex: "number",
      
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Hành Động",
        render: (_, record) => (
          <Dropdown overlay={<Menu>
            <Menu.Item key="edit" icon={<EditOutlined />} onClick={()=> handleActionClick(record)}>
              Chỉnh sửa
            </Menu.Item>
            <Menu.Item key="approved" icon={<CheckCircleOutlined />}>
              Chi tiết
            </Menu.Item>
            <Menu.Item key="delete" icon={<DeleteOutlined />} danger>
              Xóa
            </Menu.Item>
          </Menu>} trigger={["click"]}>
            <Button>
              <EllipsisOutlined style={{ cursor: "pointer" }} />
            </Button>
          </Dropdown>
        ),
    },
  ];

  return (
    <div className="customer-table-container">
    <div className="header-add-user-h3">
        <h4>Danh sách khách hàng</h4>
        <div className="header-add-user">
            <Button className="setting-btn" icon={<ProfileOutlined />}></Button>
            <Button type="primary" icon={<PlusOutlined />} className="add-customer-btn" onClick={() => setIsOpen(true)}>
              Thêm Bệnh Nhân
            </Button>
            {isOpen && <ModalForm visible={isOpen} onClose={() => setIsOpen(false)} />}
            </div>
        </div>
        <div className="table-user-list">
            <Table
              className="customer-table"
              rowSelection={{
              selectedRowKeys,
              onChange: setSelectedRowKeys,
              }}
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 8 }}/>
        </div>
    </div>
  );
};

export default CustomerTable;
