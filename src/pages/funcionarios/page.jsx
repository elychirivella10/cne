import { useState, useEffect, useRef } from 'react'
import Panel from "components/panel/Panel";

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space} from 'antd';
import Highlighter from 'react-highlight-words';

import TableComp from "components/tabla/Tabla";

import Basic from 'components/graficos/Basic';
import { Link } from 'react-router-dom';

import { creates } from "lib/peticiones/funcionariosList";

import { estados } from "lib/data/estados";
import { entes } from 'lib/peticiones/entes';

 const Funcionarios = ()=> {
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [entesData, setEntesData] = useState([])

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  useEffect(() => {
    sync()
    entes(setEntesData)
  }, [])

  const sync = async () =>{
      const valores = await creates()
      setData(valores)

  }

  const Columns = [
    {
      title:'Entidad',
      dataIndex:'entidad_adscripcion',
      filters: 
        entesData.map(es=>(
          {
            text: es.ente,
            value: es.ente,
          }
        )),
      defaultFilteredValue : [entesData.length>0?entesData[0].ente_principal:""],
      onFilter: (value, record) => record.entidad_adscripcion.indexOf(value) === 0,
      render: (text, record) => <Link to={''+record.id+'/'+record.cedula}>{text}</Link>,
     /* filters: 
        estados.map(es=>(
          {
            text: es.estado,
            value: es.estado,
          }
        )),

      onFilter: (value, record) => record.estado.indexOf(value) === 0,*/
    },
    {
      title:'Cedula',
      dataIndex:'cedula',
      ...getColumnSearchProps('cedula'),
      render: (text, record) => <Link to={''+record.id+'/'+record.cedula}>{text}</Link>,
    },
    {
      title:'Nombre y Apellido',
      dataIndex:'apellidos_nombres',
      ...getColumnSearchProps('apellidos_nombres'),
      render: (text, record) => <Link to={''+record.id+'/'+record.cedula}>{text}</Link>,
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
      dataIndex:'telefono',
      ...getColumnSearchProps('telefono'),
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
          text: 'Por definir',
          value: 'POR DEFINIR',
        },
      ],
      //defaultFilteredValue : ['SI'],
      onFilter: (value, record) => record.estatus.indexOf(value) === 0,
    }
  ];

  return (
    <div className="columns is-multiline is-centered is-vcentered">
      <div className="column is-12">
        <Panel title='Nombre de Ente' subtitle={`Lista Funcionario`}/>

        <div className="columns is-multiline">
          <div className="column is-12">
            {
              entesData.length>0?
                <TableComp columns={Columns} data={data} pagination={{ defaultPageSize: 5, pageSizeOptions: ['5', '7','10', '20', '30'] }}/>
              :null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funcionarios
