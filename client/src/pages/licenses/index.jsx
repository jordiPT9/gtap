import { useState } from 'react';
import { Form, Input, Button, Table, Modal } from 'antd';
import { FcCancel } from 'react-icons/fc';
import { AiTwotoneEdit } from 'react-icons/ai';

import styles from './styles.module.css';

const initialLicenses = [
  {
    key: '0',
    id: 0,
    name: 'Nexotech',
  },
  {
    key: '1',
    id: 1,
    name: 'Torello',
  },
  {
    key: '2',
    id: 2,
    name: 'Vic',
  },
  {
    key: '3',
    id: 3,
    name: 'Olesa',
  },
];

const Licenses = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [licenses, setLicenses] = useState(initialLicenses);

  const showModal = () => {
    setIsModalOpened(true);
  };

  const handleCancel = () => {
    setIsModalOpened(false);
  };

  const onFinish = (values) => {
    console.log('Submitted values:', values);

    const newLicense = {
      key: licenses.length.toString(),
      id: licenses.length,
      name: values.name,
    };

    setLicenses([...licenses, newLicense]);

    setIsModalOpened(false);
  };

  const columns = [
    {
      title: 'Identificador',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Acciones',
      dataIndex: 'actions',
      key: 'actions',
      align: 'center',
      render: (text, record) => {
        return (
          <div>
            <AiTwotoneEdit style={{ color: "orange", fontSize: 20, marginRight:10 }} />
            <FcCancel style={{ color: "orange", fontSize: 20 }}/>
          </div>
        )
      }
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div>
        <Button type="primary" onClick={showModal} style={{ backgroundColor: "limegreen" }}>
          Crear Licencia
        </Button>
      </div>

      <Table
        dataSource={licenses}
        columns={columns}
        size={"large"}
        pagination={false}
        className={styles.table}
      />

      <Modal
        open={isModalOpened}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish} layout="vertical">
          <div className={styles.title}>Crear nueva licencia</div>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Porfavor introduce el nombre del centro' }]}
          >
            <Input placeholder="Introduce el nombre" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: "limegreen", float: "right" }}>
              Crear
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Licenses;
