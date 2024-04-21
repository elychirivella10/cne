'use client'

import React, { useRef, useState } from 'react';

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
      filters: [
        {
          text: 'Distrito Capital',
          value: 'Distrito Capital',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
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
      dataIndex:'id_estatus',
      filters: [
        {
          text: 'Si',
          value: 'Si',
        },
        {
          text: 'No',
          value: 'No',
        },
        {
          text: 'Sin definir',
          value: 'Sin definir',
        },
      ],
      onFilter: (value, record) => record.cedula.indexOf(value) === 0,
    }
  ];