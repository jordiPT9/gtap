import React from 'react';
import { Tooltip, Tag } from 'antd';
import { MdTraffic, MdCarCrash, MdDoNotDisturbOn, MdQuestionMark } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import styles from './styles.module.css';

export const ModuleTag = ({ type }) => {
  let title, tagColor, icon;

  switch (type) {
    case "ZAR":
      title = "Módulo Illa Vianants";
      tagColor = "geekblue";
      icon = <MdCarCrash className={styles.moduleIcon} />
      break;
    case "RED_LIGHT":
      title = "Módulo Foto Rojo";
      tagColor = "red";
      icon = <MdTraffic className={styles.moduleIcon} />
      break;
    case "OPPOSITE_DIRECTION":
      title = "Módulo Direccion Contraria";
      tagColor = "orange";
      icon = <MdDoNotDisturbOn className={styles.moduleIcon} />
      break;
    case "GAUGE_CONTROL":
      title = "Módulo Control Gálibo";
      tagColor = "green";
      icon = <FaTruck className={styles.moduleIcon} />
      break;
    default:
      tagColor = "lightgray";
      icon = <MdQuestionMark className={styles.moduleIcon} />;
      break;
  };

  return (
    <Tooltip title={title}>
      <Tag color={tagColor}>
        {icon}
      </Tag>
    </Tooltip>
  );
};
