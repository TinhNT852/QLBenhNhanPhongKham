import React, { useState } from "react";
import { Table, Tag, Button } from "antd";
import { PlusOutlined, ProfileOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "./CustomerTable.css";
import ModalForm from "./form/ModalForm";
import { useNavigate } from "react-router-dom";




const data = [
  {
    key: "1",
    name: "Bold text column",
    dob: "12/01/2025",
    gender: "Nam",
    contract: [
    { id: 1, type: "Bold text column", date: "10/01/2025", product: "EBA ACC", status: "Hết hạn" },
    { id: 2, type: "Bold text column", date: "10/01/2025", product: "EBA PMS", status: "Còn hạn" },
    { id: 3, type: "Bold text column", date: "10/01/2025", product: "EBA FAB", status: "Hết hạn" },
    { id: 4, type: "Bold text column", date: "10/01/2025", product: "EBA PTV", status: "Còn hạn" }
    ],
    country: "Vietnam",
    address: "Regular text column",
    email: "dung1@gmail.com",
  },
  {
    key: "2",
    name: "Bold text column",
    dob: "12/02/2025",
    gender: "Nam",
    contract: [],
    country: "Vietnam",
    address: "Regular text column",
    email: "dung1@gmail.com",
  }
];

const CustomerTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleActionClick = (record) => {
    console.log("Thông tin item được click:", record);
    navigate("/data", { state: record });
  };

  const columns = [
    {
      title: "Tên Khách Hàng",
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
      title: "Hợp đồng",
      dataIndex: "contract",
      render: (contracts) =>
        contracts.length > 0 ? (
          contracts.map((item, index) => (
            <div key={index}>
              <span style={{margin: "5px"}}>{item.type}</span>
              <Tag color={item.status === "Còn hạn" ? "green" : "red"}>{
                item.status
              }</Tag>
            </div>
          ))
        ) : (
          <span>-</span>
        ),
    },
    {
      title: "Quốc Tịch",
      dataIndex: "country",
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
          <Button onClick={()=> handleActionClick(record)}>...</Button>
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
              Thêm khách hàng
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
