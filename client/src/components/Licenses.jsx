import React from 'react';
import { Form, Input, Button, Select, Card } from 'antd';

const { Option } = Select;

const Licenses = () => {
  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <div>
      <Card style={{ width: "30%", boxShadow: "0px 0px 10px #ddd" }}>
        <div style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Crear nueva licencia</div>

        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Porfavor introduce el nombre de la licencia' }]}
          >
            <Input placeholder="Introduce el nombre de la licencia" />
          </Form.Item>
          <Form.Item
            label="Tipo"
            name="type"
            rules={[{ required: true, message: 'Porfavor selecciona el tipo de la licencia' }]}
          >
            <Select placeholder="Selecciona el tipo de licencia">
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
      </Card>
    </div>
  );
};

export default Licenses;
