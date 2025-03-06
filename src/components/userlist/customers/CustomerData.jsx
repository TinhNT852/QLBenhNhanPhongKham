import React, { useEffect, useState } from "react";
import { Card, Table, Button, Dropdown, Menu } from "antd";
import "./CustomerData.css";
import { EllipsisOutlined, EditOutlined, CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import EditForm from "../form/EditForm";

const customerData = {
  name: "Nguyễn Văn Dũng",
  dob: "22/2/2002",
  email: "vandungnguyen00@gmail.com",
  gender: "Nam",
  country: "Việt Nam",
  address: "3/1 Trần Khánh Dư, Phường 8, TP. Đà Lạt, tỉnh Lâm Đồng",
  avatarUrl: "https://via.placeholder.com/100",
  
};

const statusColors = {
  "Hết hạn": "expired",
  "Còn hạn": "active"
};

function CustomerData() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      localStorage.setItem("detailData", JSON.stringify(location.state));
    }
  }, [location.state]);
  
  const data = location.state || JSON.parse(localStorage.getItem("detailData"));

  const navigate = useNavigate();

  if (!data) return <h2>Không có dữ liệu!</h2>;


  const handleActionClick = (record) => {
    console.log("Thông tin item được click:", record);
    navigate('/details', { state: { item: record }});
  };
  
  const columns = [
    { title: "Số Hợp Đồng", dataIndex: "id", key: "id" },
    { title: "Loại Hợp Đồng", dataIndex: "type", key: "type" },
    { title: "Ngày Ký", dataIndex: "date", key: "date" },
    { 
      title: "Sản Phẩm", 
      dataIndex: "product", 
      key: "product",
      render: (text, record) => (
        <span className={`status-badge ${statusColors[record.status]}`}>{text}</span>
      )
    },
    { title: "Ngày bắt đầu", dataIndex: "startDate", key: "startDate" },
    { title: "Ngày kết thúc", dataIndex: "endDate", key: "endDate" },
    { 
      title: "Hành động", 
      dataIndex: "action", 
      key: "action",
      render: (_, record) => (
        <Dropdown overlay={<Menu>
          <Menu.Item key="edit" icon={<EditOutlined />} onClick={()=> handleActionClick(record)}>
            Chỉnh sửa
          </Menu.Item>
          <Menu.Item key="approved" icon={<CheckCircleOutlined />}>
            Giấy phép được chấp thuận
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
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <Card title="Thông tin khách hàng" bordered className="customer-info-card">
        <div className="avatar-container">
          <div className="avatar-customer">
            {customerData.avatarUrl ? (
              <img src={customerData.avatarUrl} alt="Avatar" />
            ) : (
              <span className="avatar-placeholder"></span>
            )}
          </div>

          <div className="info-columns">
            <div className="info-column">
              <p><b>Tên khách hàng:</b> {data.name}</p>
              <p><b>Ngày sinh:</b> {data.dob}</p>
              <p><b>Email:</b> {data.email}</p>
            </div>
            <div className="info-column">
              <p><b>Giới tính:</b> {data.gender}</p>
              <p><b>Quốc tịch:</b> {data.country}</p>
              <p><b>Địa chỉ:</b> {data.address}</p>
            </div>
          </div>
        </div>

        <Button type="primary" className="edit-button" onClick={() => setIsOpen(true)}>Chỉnh sửa</Button>
        {isOpen && <EditForm visible={isOpen} onClose={() => setIsOpen(false)} />}
      </Card>
      
      <Table 
        className="contract-table"
        columns={columns} 
        dataSource={data.contract} 
        rowKey="id" 
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default CustomerData;