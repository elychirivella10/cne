'use client'
import { estados } from "@/lib/data/estados";

export const Columns = [
    {
      title:'Cedula',
      dataIndex:'cedula'
    },
    {
      title:'Nombre y Apellido',
      dataIndex:'apellidos_nombres'
    },
    {
      title:'Estado',
      dataIndex:'estado',
      filters: 
        estados.map(es=>(
          {
            text: es.estado,
            value: es.estado,
          }
        )),

      onFilter: (value, record) => record.estado.indexOf(value) === 0,
    },
    {
      title:'Teléfono',
      dataIndex:'telefono'
    },
    {
      title:'Correo',
      dataIndex:'correo'
    },
    {
      title:'Estatus',
      dataIndex:'estatus',
      filters: [
        {
          text: 'Si',
          value: 'SI',
        },
        {
          text: 'No',
          value: 'NO',
        },
        {
          text: 'Sin definir',
          value: 'SIN DEFINIR',
        },
      ],
      onFilter: (value, record) => record.estatus.indexOf(value) === 0,
    }
  ];

