import { useEffect, useState } from 'react';
import { useModal } from '../../hooks/useModal'
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
    const centers = await getCenters();
    setCenters(centers);
  }

  const submitValues = async (values) => {
    const newCenter = {
      key: centers.length.toString(),
      id: centers.length,
      name: values.name,
      logo: values.logo,
      marginDays: values.marginDays,
      modules: []
    };

    await postCenter(newCenter);

    updateTable();
    closeModal();
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Button color={"limegreen"} onClick={openModal}>
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
