import { useState, useEffect, Fragment } from "react";
//router-dom
import Panel from "components/panel/Panel"
import { useParams } from "react-router-dom";
import { creates, encuesta } from "lib/peticiones/funcionariosInformacion";
import { Descriptions } from 'antd';
import { Avatar, List } from 'antd';

const InformacionFuncionario = () =>{
    let {cedula} = useParams('cedula')
    let {id} = useParams('cedula')
    const [data, setData] = useState({
        id: 0,
        cedula: "",
        apellidos_nombres: "",
        telefono: "",
        correo: "",
        serial_carnet: "",
        codigo_carnet: "",
        estado: "",
        municipio: "",
        localidad: "",
        nombre_centro_votacion: "",
        id_estatus: 0,
        entidad_principal: "",
        entidad_adscripcion: "",
        departamento: "",
        created: "",
    })

    const [dataEncuesta, setDataEncuesta] = useState([])

    const items = [
        {
          key: '1',
          label: 'Telefono',
          children: data.telefono,
        },
        {
          key: '2',
          label: 'Correo',
          span:2,
          children: data.correo,
        },
        {
          key: '3',
          label: 'Serial Carnet de la Patria',
          children: data.serial_carnet,
        },
        {
          key: '4',
          label: 'Codigo Carnet de la Patria',
          children: data.codigo_carnet,
        },
        {
          key: '5',
          label: 'Estado',
          children: data.estado,
        },
        {
          key: '6',
          label: 'Municipio',
          children: data.municipio,
        },
        {
          key: '8',
          label: 'Localidad',
          children: data.localidad,
        },
        {
          key: '9',
          label: 'Centro de Votación',
          children: data.nombre_centro_votacion,
        },
        {
          key: '10',
          label: 'Ente Principal',
          children: data.entidad_principal,
        },
        {
          key: '11',
          label: 'Ente Adscrito',
          children: data.entidad_adscripcion,
        },
        {
          key: '12',
          label: 'Departamento',
          children: data.departamento,
        }
      ];


     

    useEffect(() => {
        creates(cedula,setData)
        encuesta(id, setDataEncuesta)
    }, [])
    
    return(
        <div className="columns is-multiline is-centered is-vcentered">
            <div className="column is-12">
                <Panel title='Nombre de Ente' subtitle={`Informacion Funcionario`}/>
            </div>
            <div className="column is-12">
              <div className="columns is-multiline">
                <div className="column is-8">
                  <div className="box">
                    <Descriptions title={`${data.apellidos_nombres}  CI:${cedula}`} layout="vertical" items={items} />
                  </div>
                </div>
                <div className="column is-4">
                  <div className="box">
                  <List
                      itemLayout="horizontal"
                      dataSource={dataEncuesta}
                      renderItem={(item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={item.title}
                            description={item.description}
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default InformacionFuncionario