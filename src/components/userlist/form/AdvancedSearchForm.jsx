import { Button, Col, Form, Input, Row, Select, Space, theme } from 'antd';
import { Option } from 'antd/es/mentions';
import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import ModalForm from './ModalForm';


const AdvancedSearchForm = () => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    const [expand, setExpand] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  
    const getFields = () => {
      const count = expand ? 10 : 6;
      const children = [];
      for (let i = 0; i < count; i++) {
        children.push(
          <Col span={12} key={i}>
            {i % 3 !== 1 ? (
              <Form.Item name={`field-${i}`} label={`Field ${i}`} rules={[{ required: true, message: 'Input something!' }]}> 
                <Input placeholder="placeholder" />
              </Form.Item>
            ) : (
              <Form.Item name={`field-${i}`} label={`Field ${i}`} rules={[{ required: true, message: 'Select something!' }]} initialValue="1">
                <Select>
                  <Option value="1">Option 1</Option>
                  <Option value="2">Option 2</Option>
                </Select>
              </Form.Item>
            )}
          </Col>
        );
      }
      return children;
    };
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  
    return (
      <>
        <Form form={form} name="advanced_search" className="formContainer" onFinish={onFinish}>
          <Row gutter={24}>{getFields()}</Row>
          <div className="buttonContainer">
            <Space size="small">
              <Button type="primary" htmlType="submit">Search</Button>
              <Button onClick={() => form.resetFields()}>Clear</Button>
              <Button type="default" onClick={() => setModalVisible(true)}>Thêm Khách Hàng</Button>
              <a className="toggleLink" onClick={() => setExpand(!expand)}>
                <DownOutlined rotate={expand ? 180 : 0} /> Collapse
              </a>
            </Space>
          </div>
        </Form>
        <ModalForm visible={modalVisible} onClose={() => setModalVisible(false)} />
      </>
    );
  };

export default AdvancedSearchForm;