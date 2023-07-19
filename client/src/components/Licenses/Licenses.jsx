import { useState } from 'react';
import { Form, Input, Button, InputNumber, Table, Modal } from 'antd';
import { FcCancel } from 'react-icons/fc';
import { AiTwotoneEdit } from 'react-icons/ai';

import styles from './Licenses.module.css';

const initialDataSource = [
  {
    key: '0',
    id: 0,
    name: 'Nexotech',
    logo: "https://bitcloud.com/olesa.png",
    marginDays: 5
  },
  {
    key: '1',
    id: 1,
    name: 'Torello',
    logo: "https://bitcloud.com/olesa.png",
    marginDays: 5
  },
  {
    key: '2',
    id: 2,
    name: 'Vic',
    logo: "https://bitcloud.com/olesa.png",
    marginDays: 5
  },
  {
    key: '3',
    id: 3,
    name: 'Olesa',
    logo: "https://bitcloud.com/olesa.png",
    marginDays: 5
  },
];

const Licenses = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [dataSource, setDataSource] = useState(initialDataSource);

  const showModal = () => {
    setIsModalOpened(true);
  };

  const handleCancel = () => {
    setIsModalOpened(false);
  };

  const onFinish = (values) => {
    console.log('Submitted values:', values);

    const newCenter = {
      key: dataSource.length.toString(),
      id: dataSource.length,
      name: values.name,
      logo: values.logo,
      marginDays: values.marginDays,
    };

    setDataSource([...dataSource, newCenter]);

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
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      align: 'center',

    },
    {
      title: 'Días de margen',
      dataIndex: 'marginDays',
      key: 'marginDays',
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
          Crear Centro
        </Button>
      </div>

      <Table
        dataSource={dataSource}
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
          <div className={styles.title}>Crear nuevo centro</div>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Porfavor introduce el nombre del centro' }]}
          >
            <Input placeholder="Introduce el nombre" />
          </Form.Item>

          <Form.Item
            label="Logo"
            name="logo"
            rules={[{ required: true, message: 'Porfavor introduce la url del logo' }]}
          >
            <Input placeholder="Introduce la url del logo" />
          </Form.Item>

          <Form.Item
            label="Días de margen"
            name="marginDays"
            rules={[{ required: true, message: 'Porfavor introduce los días de margen' }]}
          >
            <InputNumber min={1} max={10} defaultValue={0} placeholder="Introduce los dias de margen" />
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
