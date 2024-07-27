import { useState, useEffect, useRef } from 'react'
import Panel from "components/panel/Panel";
import Export from 'components/excel/Export'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Badge, Select, Spin} from 'antd';
import Highlighter from 'react-highlight-words';
import TableComp from "components/tabla/Tabla";
import { Link } from 'react-router-dom';
import { creates } from "lib/peticiones/funcionariosList";
import { estados } from "lib/data/estados";
import { entes } from 'lib/peticiones/entes';
import { LoadingOutlined } from '@ant-design/icons';
import { setFuncionariosLote } from 'lib/peticiones/funcionarioVotacion';

import { App } from 'antd';

 const Funcionarios = ()=> {
  //obtenemos la variable de mensaje que traemos de la instancia App
  const {message} = App.useApp();
  const [spinning, setSpinning] = useState(false);
  const [data, setData] = useState([])
  const [dataFiltrada, setDataFiltrada] = useState([])
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [entesData, setEntesData] = useState([])
  const [idTrabajador, setIdTrabajador] = useState(0)
  const [funcionariosSeleccionados, setFuncionariosSeleccionados] = useState([])
  const estatusColor =["success", "error","warning"]
  const [loading, setLoading] = useState(false);

  

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
      const valores = creates()
      setFuncionariosLote([])
      setSpinning(true)
      Promise.all([valores]).then((values) => {
        setData(values[0])
        setSpinning(false)
      });

  }

  const Columns = [
    {
      width:28,
      render: (text, record) => <Badge status={estatusColor[(record.id_estatus-1)]}/>,
    },
    {
      title:'Entidad',
      dataIndex:'entidad_adscripcion',
      ellipsis: true,
      filters: 
        entesData.map(es=>(
          {
            text: es.ente,
            value: es.ente.toUpperCase(),
          }
        )),
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
      width:100,
      ...getColumnSearchProps('cedula'),
      render: (text, record) => <Link to={''+record.id+'/'+record.cedula}>{text}</Link>,
    },
    {
      title:'Nombre y Apellido',
      dataIndex:'apellidos_nombres',
      ellipsis: true,
      ...getColumnSearchProps('apellidos_nombres'),
      render: (text, record) => <Link to={''+record.id+'/'+record.cedula}>{text}</Link>,
    },
    {
      title:'Estado',
      dataIndex:'estado',
      width:150,
      responsive: ["lg"],
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
      title:'Jefe 1x10',
      dataIndex:'porcentaje',
      width:100,
      responsive: ["lg"],
      render: (text, record) =>  <Link to={''+record.id+'/'+record.cedula}>{record.porcentaje}</Link>,
      filters: [
        {
          text: 'SI',
          value: 'SI',
        },
        {
          text: 'NO',
          value: 'NO',
        }
      ],
      //defaultFilteredValue : ['SI'],
      onFilter: (value, record) => record.porcentaje.indexOf(value) == 0
    },
    {
      title:'1X10',
      dataIndex:'cantidad_responsable',
      width:70,
      responsive: ["md"],
      render: (text, record) => <Link to={''+record.id+'/'+record.cedula}>{record.cantidad_responsable}</Link>,

/*       filters: [
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
      onFilter: (value, record) => record.estatus.indexOf(value) === 0, */
    },
    {
      title:'Estatus',
      dataIndex:'estatus',
      width:100,
      responsive: ["md"],
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

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        setFuncionariosSeleccionados(selectedRows);
    }
  };

  const handleChange = (value) => {
      setIdTrabajador(value)
  };

  const start = () => {
    setSpinning(true)
    setLoading(true);
    setFuncionariosLote(funcionariosSeleccionados, idTrabajador, message, sync).then(res=>{
      setLoading(false);
    }).catch(error=>(
      message.error('Ha ocurrido un error, intente mas tarde')
    ))
   
  };

  const hasSelected = funcionariosSeleccionados.length > 0;

  return (
    <div className="columns is-multiline is-centered is-vcentered">
      <div className="column is-12">
        <Spin spinning={spinning} indicator={<LoadingOutlined spin />}  size="large" fullscreen />
        <Panel title='Centro de Datos' subtitle={`Lista Funcionario`}/>

        <div className="columns is-multiline">
          <div className="column is-12">
            
            <div className="box">
              <Button type="primary" className='button is-blue' disabled={!hasSelected} loading={loading} onClick={start}>
                Guardar
              </Button>
                <span
                style={{
                    marginLeft: 8,
                }}
              >
                <Select
                    defaultValue="Seleccione un Funcionario"
                    style={{
                        width: 250,
                    }}
                    onChange={handleChange}
                    disabled={!hasSelected}
                    fieldNames={{label:'nombre', value:'id'}}
                    options={[{nombre:'Si, Vote', id:1},{nombre:'No Vote', id:2}]}
                />
                <span className='ml-3 mr-3'>{hasSelected ? `${funcionariosSeleccionados.length} Funcionarios seleccionados` : ''}</span>
                <Export data={data} dataFiltrada ={dataFiltrada} nombre={"funcionarios"}/>
              </span>
              <TableComp  setDataFiltrada={setDataFiltrada} columns={Columns} rowSelection={rowSelection} data={data} pagination={{ defaultPageSize: 10, pageSizeOptions: ['5', '7', '10', '20', '30'] }}/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funcionarios
