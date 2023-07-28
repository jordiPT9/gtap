import { Form, Input, Button, Table, Modal } from 'antd';
import { FcCancel } from 'react-icons/fc';
import { AiTwotoneEdit } from 'react-icons/ai';

import styles from './styles.module.css';
import { useModal } from '../../hooks/useModal';

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
  const { isModalOpened, openModal, closeModal } = useModal(false);

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    closeModal();
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
            <AiTwotoneEdit style={{ color: "orange", fontSize: 20, marginRight: 10 }} />
            <FcCancel style={{ color: "orange", fontSize: 20 }} />
          </div>
        )
      }
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div>
        <Button type="primary" onClick={openModal} style={{ backgroundColor: "limegreen" }}>
          Crear Licencia
        </Button>
      </div>

      <Table
        dataSource={initialLicenses}
        columns={columns}
        size={"large"}
        pagination={false}
        className={styles.table}
      />

      <Modal
        open={isModalOpened}
        onCancel={closeModal}
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
