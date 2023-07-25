import { useState } from 'react';
import { useModal } from '../../hooks/useModal'
import { Button } from '../../components/Button';
import { CenterTable } from './CenterTable';
import { CenterModal } from './CenterModal';
import { initialCenters } from '../../constants/centersData'
import styles from './styles.module.css';

const Centers = () => {
  const [centers, setCenters] = useState(initialCenters);
  const { isModalOpened, openModal, closeModal } = useModal();

  const submitValues = (values) => {
    console.log('Submitted values:', values);

    const newCenter = {
      key: centers.length.toString(),
      id: centers.length,
      name: values.name,
      logo: values.logo,
      marginDays: values.marginDays,
      modules: []
    };

    setCenters([...centers, newCenter]);
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
