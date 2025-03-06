import React from 'react';
import { Button, Col, Form, Input, Row, Select, Modal, DatePicker } from 'antd';
import './ModalForm.css';

const { Option } = Select;

const EditForm = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Dữ liệu nhập:', values);
  };

  return (
    <Modal title="Chỉnh sửa khách hàng" open={visible} onCancel={onClose} footer={null} width={1000}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <h3>Thông tin chi tiết</h3>
        <div className="{styles.formContainer}">
          <Row gutter={10}>
            {/* Cột 1 */}
            <Col span={9}>
              <div className="uniform-input-height">
                <Form.Item name="name" label="Tên Khách Hàng" rules={[{ required: true, message: "Vui lòng nhập tên khách hàng!" }]}>
                  <Input placeholder="Nhập tên khách hàng" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ type: "email", message: "Email không hợp lệ!" }]}>
                  <Input placeholder="Nhập email" />
                </Form.Item>
              </div>
            </Col>

            {/* Cột 2 */}
            <Col span={5}>
              <div className="uniform-input-height">
                <Form.Item name="dob" label="Ngày Sinh" rules={[{ required: true, message: "Vui lòng nhập ngày sinh" }]}>
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

            {/* Cột 4 */}
            <Col span={5}>
              <div className="uniform-input-height">
                <Form.Item name="nationality" label="Quốc Tịch">
                  <Select placeholder="Chọn quốc tịch">
                    <Option value="vn">Việt Nam</Option>
                    <Option value="us">Mỹ</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="zalo" label="Zalo">
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
        <h3>Thông tin công ty</h3>
        <Row gutter={10}>
          <Col span={24}>
            <div className="uniform-input-height">
              <Form.Item name="companyName" label="Tên Công Ty">
                <Input placeholder="Nhập tên công ty" />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <div className="uniform-input-height">
              <Form.Item name="companyPhone" label="Số Điện Thoại Công Ty">
                <Input placeholder="Nhập số điện thoại công ty" />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div className="uniform-input-height">
              <Form.Item name="companyEmail" label="Email Công Ty">
                <Input placeholder="Nhập email công ty" />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={24}>
            <div className="uniform-input-height">
              <Form.Item name="companyAddress" label="Địa Chỉ Công Ty">
                <Input placeholder="Nhập địa chỉ" />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={24}>
            <div className="uniform-input-height">
              <Form.Item name="notes" label="Ghi Chú Thay Đổi" className="full-width">
                <Input.TextArea placeholder="Nhập ghi chú" rows={2} />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <div className="form-actions">
          <Button onClick={onClose}>Đóng</Button>
          <Button type="primary" htmlType="submit">Thêm phiên bản</Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditForm;