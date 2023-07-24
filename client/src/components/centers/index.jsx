import { useState } from 'react';
import { Button } from 'antd';
import { CenterTable } from './CenterTable'
import { CenterModal } from './CenterModal'

import styles from './styles.module.css';

const initialCenters = [
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
  const [centers, setCenters] = useState(initialCenters);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const submitValues = (values) => {
    console.log('Submitted values:', values);

    const newCenter = {
      key: centers.length.toString(),
      id: centers.length,
      name: values.name,
      logo: values.logo,
      marginDays: values.marginDays,
    };

    setCenters([...centers, newCenter]);
    setIsModalOpened(false);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Button type="primary" onClick={openModal} className={styles.createButton}>
          Crear Centro
        </Button>
      </div>

      <CenterTable centers={centers} />

      <CenterModal
        visible={isModalOpened}
        onCancel={closeModal}
        onFinish={submitValues}
      />
    </div>
  );
};

export default Centers;
