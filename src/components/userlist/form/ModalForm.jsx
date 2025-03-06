import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from 'antd';
import React from 'react';
import './ModalForm.css';

const { Option } = Select;

const ModalForm = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Dữ liệu nhập:', values);
  };

  return (
    <Modal title="Thêm bệnh nhân" open={visible} onCancel={onClose} footer={null} width={1000}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <h3>Thông tin chi tiết</h3>
        <div className="{styles.formContainer}">
          <Row gutter={10}>
            {/* Cột 1 */}
            <Col span={9}>
              <div className="uniform-input-height">
                <Form.Item name="name" label="Tên Bệnh Nhân" rules={[{ required: true, message: "Vui lòng nhập tên bệnh nhân!" }]}>
                  <Input placeholder="Nhập tên bệnh nhân" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ type: "email", message: "Email không hợp lệ!" }]}>
                  <Input placeholder="Nhập email" />
                </Form.Item>
              </div>
            </Col>

            {/* Cột 2 */}
            <Col span={10}>
              <div className="uniform-input-height">
                <Form.Item name="dob" label="Ngày Sinh" rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}>
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item name="phone" label="Số Điện Thoại" rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}>
                  <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
              </div>
            </Col>

            {/* Cột 3 */}
            <Col span={5}>
              <div className="uniform-input-height">
                <Form.Item name="gender" label="Giới Tính">
                  <Select placeholder="Chọn giới tính">
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="facebook" label="Facebook">
                  <Input placeholder="Nhập thông tin" />
                </Form.Item>
              </div>
            </Col>

          </Row>
          <Row gutter={10}>
            <Col span={9}>
              <div className="uniform-input-height">
                <Form.Item name="idType" label="Loại giấy tờ">
                  <Select placeholder="Chọn loại giấy tờ">
                    <Option value="cccd">CCCD</Option>
                    <Option value="passport">Hộ chiếu</Option>
                  </Select>
                </Form.Item>
              </div>
            </Col>
            <Col span={7}>
              <div className="uniform-input-height">
                <Form.Item name="idNumber" label="Số Giấy Tờ">
                  <Input placeholder="Nhập số giấy tờ">
                  </Input>
                </Form.Item>
              </div>
            </Col>
            <Col span={8}>
              <div className="uniform-input-height">
                <Form.Item name="bankInfo" label="Thông tin ngân hàng">
                  <Input placeholder="Nhập thông tin" />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={24}>
              <div className="uniform-input-height">
                <Form.Item name="address" label="Địa Chỉ" className="full-width">
                  <Input.TextArea placeholder="Nhập địa chỉ" rows={2} />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </div>
      </Form>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="form-actions">
          <Button onClick={onClose}>Đóng</Button>
          <Button type="primary" htmlType="submit">Thêm bệnh nhân</Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalForm;