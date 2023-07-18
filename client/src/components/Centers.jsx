import React from 'react';
import { Form, Input, Button, Select, Card } from 'antd';

const { Option } = Select;

const Centers = () => {
  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <div>
      <Card style={{ width: "30%", boxShadow: "0px 0px 10px #ddd" }}>
        <Form onFinish={onFinish} layout="vertical">
          <div style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Crear nuevo centro</div>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Porfavor introduce el nombre del centro' }]}
          >
            <Input placeholder="Introduce el nombre del centro" />
          </Form.Item>
          <Form.Item
            label="Tipo"
            name="type"
            rules={[{ required: true, message: 'Porfavor selecciona el tipo de centro' }]}
          >
            <Select placeholder="Selecciona el tipo de centro">
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
      </Card>
    </div>
  );
};

export default Centers;