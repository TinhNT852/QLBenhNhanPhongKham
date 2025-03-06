import { CloseOutlined, FileZipOutlined, LeftOutlined, SaveOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Progress, Row, Select, Table, Upload } from "antd";
import { UploadCloudIcon } from "lucide-react";
import React, { useState } from "react";
import "./ContractDetails.css";

import FolderIcon from "../../../assets/icons/Folder.png";

const { Option } = Select;

const ContractDetails = () => {
  const [fileList, setFileList] = useState([
    { icon: <FileZipOutlined />, name: "acc-ver1.0.1.rar", size: "4.08 Mb của 10.09 Mb", status: "uploading", progress: 40 },
    { icon: <FileZipOutlined />, name: "acc-ver1.0.2.rar", size: "4.08 Mb của 10.09 Mb", status: "done", progress: 100 },
    { icon: <FileZipOutlined />, name: "acc-ver1.0.3.rar", size: "5.2 Mb của 10.09 Mb", status: "uploading", progress: 60 },
    { icon: <FileZipOutlined />, name: "acc-ver1.0.4.rar", size: "10.09 Mb của 10.09 Mb", status: "done", progress: 100 },
  ]);

  const handleDelete = (name) => {
    const updatedFileList = fileList.filter((file) => file.name !== name);
    setFileList(updatedFileList);
  };

  const columns = [
    {
      title: "",
      dataIndex: "checked",
      width: 50,
      render: () => <Checkbox defaultChecked={true} />,
    },
    {
      title: "Sản Phẩm",
      dataIndex: "product",
      render: (text) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={FolderIcon} alt="folder" style={{ width: 20, height: 20 }} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Phiên Bản",
      dataIndex: "version",
      render: () => (
        <Select defaultValue="1.0.5" style={{ width: 80 }}>
          <Option value="1.0.5">1.0.5</Option>
          <Option value="1.0.6">1.0.6</Option>
        </Select>
      ),
    },
    {
      title: "Số Lượng",
      dataIndex: "quantity",
      render: () => <Input defaultValue={1} type="number" style={{ width: 60 }} />,
    },
    {
      title: "Ngày Kết Thúc",
      dataIndex: "endDate",
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      render: (status) => {
        const isExpired = status === "Hết hạn";
        const bgColor = isExpired ? "#FF7468" : "#56B66A";
  
        return (
          <span
            style={{
              backgroundColor: bgColor,
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "12px",
            }}
          >
            {status}
          </span>
        );
      },
    },
  ];

  const data = [
    { key: 1, product: "ERA ACC", endDate: "12/01/2025", status: "Hết hạn" },
    { key: 2, product: "ERA F&B", endDate: "13/01/2025", status: "Còn hạn" },
    { key: 3, product: "ERA PMS", endDate: "13/01/2025", status: "Còn hạn" },
  ];

  return (
    <Card className="contract-container">
      <div className="form-header">
        <Button icon={<LeftOutlined />} className="custom-button-header" style={{ backgroundColor: "#eee" }}></Button>
        <h4 className="group-header-h4">Thông tin hợp đồng</h4>
        <div className="button-group">
          <Button icon={<UploadOutlined />}>Xuất báo giá</Button>
          <Button type="primary" icon={<SaveOutlined />}>Lưu thay đổi</Button>
        </div>
      </div>
      <Form layout="vertical">
        <Row gutter={10}>
          <Col span={5}>
            <Form.Item label="Loại Hợp Đồng" rules={[{ required: true }]}>
              <Select defaultValue="Vĩnh viễn" style={{ width: '100%', height: '40px' }}>
                <Option value="Vĩnh viễn" icon={<UploadOutlined />}>Vĩnh viễn</Option>
                <Option value="Tạm thời">Tạm thời</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item label="Số Hợp Đồng">
              <Input placeholder="Số Hợp Đồng" defaultValue="1.0.5" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Tên Hợp Đồng">
              <Input placeholder="Tên Hợp Đồng" defaultValue="Hợp đồng phần mềm 5 sao" />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item label="Ngày Ký">
              <DatePicker placeholder="Ngày Ký" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item label="Ngày Bắt Đầu">
              <DatePicker placeholder="Ngày Bắt Đầu" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item label="Ngày Kết Thúc">
              <DatePicker placeholder="Ngày Kết Thúc" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <Form.Item label="Host">
              <Input placeholder="Host" className="full-width" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Ghi Chú">
              <Input placeholder="Ghi Chú" className="full-width" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className="upload-form">
        <div className="upload-section">
          <Upload>
            <UploadCloudIcon style={{ width: "auto" }} />
            <h5>Chọn một tệp hoặc kéo & thả vào đây</h5>
            <p>Các loại định dạng tệp PDF, .docx, .xlsx, RAR, ZIP,....</p>
            <Button icon={<UploadCloudIcon style={{ width: "auto" }} />}>Tải File Lên</Button>
          </Upload>
        </div>
        <div className="file-list">
          {fileList.map((file, index) => (
            <div key={index} className={`file-item ${file.status}`}>
              <span>{file.name}</span>
              <Button
                className="close-button"
                onClick={() => handleDelete(file.name)}
              >
                <CloseOutlined />
              </Button>
              <span className="file-size">{file.size}</span>
              <Progress
                percent={file.progress}
                size="small"
                status={file.status === "done" ? "success" : "active"}
              />
            </div>
          ))}
        </div>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default ContractDetails;