import { useEffect, useState } from 'react';
import { useModal } from '../../hooks/useModal'
import { v4 as uuid } from 'uuid';
import { Button } from '../../components/Button';
import { CenterTable } from './CenterTable';
import { CenterModal } from './CenterModal';
import { postCenter, getCenters } from '../../services/CenterService'
import styles from './styles.module.css';

const Centers = () => {
  const [centers, setCenters] = useState([]);
  const { isModalOpened, openModal, closeModal } = useModal();

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = async () => {
    let centers = [];
    
    try {
      centers = await getCenters();
    } catch (error) {
      console.log(error);
    }

    setCenters(centers);
  }

  const submitValues = async (values) => {
    const newCenter = {
      id: uuid(),
      name: values.name,
      logo: values.logo,
      marginDays: values.marginDays,
      modules: []
    };

    try {
      await postCenter(newCenter);
    } catch (error) {
      console.log(error);
    }

    updateTable();
    closeModal();
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Button color="limegreen" onClick={openModal}>
          Crear Centro
        </Button>
      </div>

      <CenterTable centers={centers} />

      <CenterModal
        visible={isModalOpened}
        title="Crear nuevo centro"
        onCancel={closeModal}
        onFinish={submitValues}
      />
    </div>
  );
};

export default Centers;
