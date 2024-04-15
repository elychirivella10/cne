'use client'
import {Badge} from "antd"; 


import {ColorColumns} from '@/lib/helpers/colors/colors'

export const columns = [
    {
      render: (_,record) => <Badge color={ColorColumns(record.id_estado)}/>,
    },
    {
      title:'Cedula',
      dataIndex:'num_solicitud'
    },
    {
      title:'Nombre y Apellido',
      dataIndex:'estado'
    },
    {
      title:'Teléfono',
      dataIndex:'categoria'
    },
    {
      title:'Correo',
      dataIndex:'categoria'
    },
    {
      title:'Estatus',
      dataIndex:'categoria'
    }
  ];