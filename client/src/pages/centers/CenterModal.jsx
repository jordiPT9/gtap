import React from 'react';
import { Modal, Form, Input, InputNumber } from 'antd';
import { Button } from '../../components/Button';
import styles from './styles.module.css';

export const CenterModal = ({ visible, title, onCancel, onFinish }) => {
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={onFinish} layout="vertical">
        <div className={styles.modalTitle}>{title}</div>
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: 'Por favor introduce el nombre del centro' }]}
        >
          <Input placeholder="Introduce el nombre" />
        </Form.Item>

        <Form.Item
          label="Url logo"
          name="logo"
          rules={[{ required: true, message: 'Por favor introduce la URL del logo' }]}
        >
          <Input placeholder="Introduce la URL del logo" />
        </Form.Item>

        <Form.Item
          label="Días de margen"
          name="marginDays"
          rules={[{ required: true, message: 'Por favor introduce los días de margen' }]}
          initialValue={0}
        >
          <InputNumber min={0} max={10} placeholder="Introduce los días de margen" />
        </Form.Item>

        <Form.Item className={styles.modalButtonsWrapper}>
          <Button color={"limegreen"} htmlType="submit">
            Crear
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};