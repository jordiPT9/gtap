import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const Licenses = () => {
  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <div>
      <h2>Create a New License</h2>
      <div style={{ width: "25%" }}>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label="License Name:"
            name="name"
            rules={[{ required: true, message: 'Please enter the license name' }]}
          >
            <Input placeholder="Enter license name" />
          </Form.Item>
          <Form.Item
            label="License Type:"
            name="type"
            rules={[{ required: true, message: 'Please select the license type' }]}
          >
            <Select placeholder="Select license type">
              <Option value="standard">Standard</Option>
              <Option value="premium">Premium</Option>
              <Option value="trial">Trial</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create License
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Licenses;
