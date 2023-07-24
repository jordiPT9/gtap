import React from 'react';
import { Modal, Form, Input, InputNumber, Button } from 'antd';
import styles from './styles.module.css';

export const CenterModal = ({ visible, onCancel, onFinish }) => {
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={onFinish} layout="vertical">
        <div className={styles.title}>Crear nuevo centro</div>
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: 'Por favor introduce el nombre del centro' }]}
        >
          <Input placeholder="Introduce el nombre" />
        </Form.Item>

        <Form.Item
          label="Logo"
          name="logo"
          rules={[{ required: true, message: 'Por favor introduce la URL del logo' }]}
        >
          <Input placeholder="Introduce la URL del logo" />
        </Form.Item>

        <Form.Item
          label="Días de margen"
          name="marginDays"
          rules={[{ required: true, message: 'Por favor introduce los días de margen' }]}
        >
          <InputNumber min={0} max={10} defaultValue={0} placeholder="Introduce los días de margen" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.createButton}>
            Crear
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};