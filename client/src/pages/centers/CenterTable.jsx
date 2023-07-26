import React from 'react';
import { Table, Tooltip, Tag } from 'antd';
import { MdTraffic, MdCarCrash, MdDoNotDisturbOn, MdQuestionMark } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { AiTwotoneEdit } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import styles from './styles.module.css';

export const CenterTable = ({ centers }) => {
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
      render: (columnValue, record) => {
        return (
          <span className={styles.moduleColumn}>
            {columnValue.map(type => <ModuleTag type={type} key={type} />)}
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
      align: 'center',
      render: (text, record) => {
        return (
          <div className={styles.actionIconsWrapper}>
            <AiTwotoneEdit className={styles.editIcon} />
            <TiDelete className={styles.cancelIcon} />
          </div>
        )
      }
    },
  ];

  return (
    <Table
      dataSource={centers}
      columns={columns}
      size="large"
      pagination={false}
      className={styles.table}
    />
  );
};

const ModuleTag = ({ type }) => {
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