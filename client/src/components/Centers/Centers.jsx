import { useState } from 'react';
import { Form, Input, Button, InputNumber, Table, Modal, Tooltip, Tag } from 'antd';
import { FcCancel } from 'react-icons/fc';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdTraffic, MdCarCrash, MdDoNotDisturbOn } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

import styles from './Centers.module.css';

const initialCenterList = [
  {
    key: '0',
    id: 0,
    name: 'Nexotech',
    logo: "https://bitcloud.com/olesa.png",
    marginDays: 5,
    modules: ["ZAR", "RED_LIGHT", "OPPOSITE_DIRECTION", "GAUGE_CONTROL"]
  },
  {
    key: '1',
    id: 1,
    name: 'Torello',
    logo: "https://bitcloud.com/olesa.png",
    marginDays: 5,
    modules: ["ZAR", "RED_LIGHT", "OPPOSITE_DIRECTION", "GAUGE_CONTROL"]

  },
  {
    key: '2',
    id: 2,
    name: 'Vic',
    logo: "https://bitcloud.com/olesa.png",
    marginDays: 5,
    modules: ["ZAR", "RED_LIGHT", "OPPOSITE_DIRECTION", "GAUGE_CONTROL"]

  },
  {
    key: '3',
    id: 3,
    name: 'Olesa',
    logo: "https://bitcloud.com/olesa.png",
    marginDays: 5,
    modules: ["ZAR", "RED_LIGHT", "OPPOSITE_DIRECTION", "GAUGE_CONTROL"]

  },
];

const Centers = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [centerList, setCenterList] = useState(initialCenterList);

  const showModal = () => {
    setIsModalOpened(true);
  };

  const handleCancel = () => {
    setIsModalOpened(false);
  };

  const onFinish = (values) => {
    console.log('Submitted values:', values);

    const newCenter = {
      key: centerList.length.toString(),
      id: centerList.length,
      name: values.name,
      logo: values.logo,
      marginDays: values.marginDays,
    };

    setCenterList([...centerList, newCenter]);

    setIsModalOpened(false);
  };

  const columns = [
    {
      title: 'Identificador',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Módulos',
      dataIndex: 'modules',
      key: 'modules',
      align: 'center',
      render: (text, record) => {
        return (
          <span style={{ display: "flex", justifyContent: "center" }}>
            {text.map(type => {
              switch (type) {
                case "ZAR":
                  return (
                    <Tooltip title={type}>
                      <Tag color="geekblue" key={type.id}>
                        <MdCarCrash style={{ verticalAlign: "sub", fontSize: "26", }} />
                      </Tag>
                    </Tooltip>
                  );
                case "RED_LIGHT":
                  return (
                    <Tooltip title={type}>
                      <Tag color="red" key={type.id}>
                        <MdTraffic style={{ verticalAlign: "sub", fontSize: "26", }} />
                      </Tag>
                    </Tooltip>
                  );
                case "OPPOSITE_DIRECTION":
                  return (
                    <Tooltip title={type}>
                      <Tag color="orange" key={type.id}>
                        <MdDoNotDisturbOn style={{ verticalAlign: "sub", fontSize: "26", }} />
                      </Tag>
                    </Tooltip>
                  );
                case "GAUGE_CONTROL":
                  return (
                    <Tooltip title={type}>
                      <Tag color="lime" key={type.id}>
                        <FaTruck style={{ verticalAlign: "sub", fontSize: "26", }} />
                      </Tag>
                    </Tooltip>
                  );
              }
            })}
          </span>
        )
      }
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
      render: (text, record) => {
        return (
          <>
            <AiTwotoneEdit style={{ color: "orange", fontSize: 20, marginRight: 10 }} />
            <FcCancel style={{ color: "orange", fontSize: 20 }} />
          </>
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
        dataSource={centerList}
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
            <InputNumber min={0} max={10} defaultValue={0} placeholder="Introduce los dias de margen" />
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

export default Centers;
