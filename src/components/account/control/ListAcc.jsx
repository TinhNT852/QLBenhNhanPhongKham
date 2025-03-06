import { Button, Pagination, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined, LockFilled } from "@ant-design/icons";
import React, { useState } from 'react';
import "../AccountTable.css";

const ListAcc = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const indexOfLastRow = currentPage * pageSize;
    const indexOfFirstRow = indexOfLastRow - pageSize;
    
    const data = [
      { key: "1", username: "admin1", fullName: "Nguyễn Văn A", phone: "0123456789", dob: "01/01/1990", status: "Hoạt động" },
      { key: "2", username: "admin2", fullName: "Trần Thị B", phone: "0987654321", dob: "15/05/1995", status: "Khoá" },
      { key: "3", username: "user1", fullName: "Lê Văn C", phone: "0321654987", dob: "20/07/1993", status: "Hoạt động" },
      { key: "4", username: "user2", fullName: "Phạm Thị D", phone: "0932123456", dob: "08/09/1988", status: "Hoạt động" },
      { key: "5", username: "user3", fullName: "Hoàng Văn E", phone: "0977334455", dob: "05/12/1992", status: "Khoá" },
    ];
    const total = data.length;
    
    const columns = [
      {
        title: "Tên Đăng Nhập",
        dataIndex: "username",
        render: (text) => <strong>{text}</strong>,
      },
      {
        title: "Họ Và Tên",
        dataIndex: "fullName",
      },
      {
        title: "Số Điện Thoại",
        dataIndex: "phone",
      },
      {
        title: "Ngày Sinh",
        dataIndex: "dob",
      },
      {
        title: "Trạng Thái Tài Khoản",
        dataIndex: "status",
        render: (status) => (
          <Tag color={status === "Hoạt động" ? "green" : "red"}>{status}</Tag>
        ),
      },
      {
        title: "Hành Động",
        render: (_, record) => (
          <Button icon={<EditOutlined />} type="primary">
            Chỉnh sửa
          </Button>
        ),
      },
    ];
    
    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
    <div className="account-list-container">
        <div className="table-header">
            <div className="table-title">
            <h2>Danh sách tài khoản</h2>
            </div>
            <div className="table-button">
              <button className="header-button"><LockFilled/>Khoá tài khoản</button>
              <button className="header-button"><DeleteOutlined />Xoá người dùng</button>
            </div>
      </div>
      <div className="table-content">
        <Table 
          className="table"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          pagination={false}
        />
        <div className="pagination-setting">
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={total}
          onChange={handlePageChange}
          style={{marginTop: '16px', textAlign: 'right'}}
         />
            <div className="page-info">
              <span>{`${indexOfFirstRow + 1} - ${Math.min(
                indexOfLastRow,
                data.length
              )} trong tổng số ${data.length} mục`}</span>
            </div>
            <div className="page-size">
              <select onChange={(e) => setCurrentPage(1)}>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
              </select>
            </div>
          </div>
      </div>
    </div>
    );
};

export default ListAcc;