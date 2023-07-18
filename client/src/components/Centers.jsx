import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const Centers = () => {
  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <div>
      <h2>Create a New Center</h2>
      <div style={{ width: "25%" }}>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Center Name"
            name="name"
            rules={[{ required: true, message: 'Please enter the center name' }]}
          >
            <Input placeholder="Enter center name" />
          </Form.Item>
          <Form.Item
            label="Center Type"
            name="type"
            rules={[{ required: true, message: 'Please select the center type' }]}
          >
            <Select placeholder="Select center type">
              <Option value="standard">Standard</Option>
              <Option value="premium">Premium</Option>
              <Option value="trial">Trial</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Center
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Centers;