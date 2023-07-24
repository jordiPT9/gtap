import React from 'react';
import { Table } from 'antd';
import { ModuleTag } from './ModuleTag';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FcCancel } from 'react-icons/fc';
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
      render: (text, record) => {
        return (
          <>
            <AiTwotoneEdit className={styles.editIcon} />
            <FcCancel className={styles.cancelIcon} />
          </>
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