'use client'
import { useState, useEffect } from "react";
import Panel from "@/ui/panel/Panel";
import Steps from '@/ui/steps/Steps'
import Buscar from "@/ui/buscar/Buscar";
import Funcionario from "@/ui/funcionario/Funcionario";
import Encuesta from "@/ui/encuesta/Encuesta";
import Aprobado from "@/ui/aprobado/Aprobado";

//peticiones API
import { creates } from "@/lib/peticiones/encuestaPreguntas";

import { filterComponents } from "@/lib/helpers/filterComponents";

 const Form =()=> {
  const [numeroStep, setNumeroStep]= useState(1)
  const [preguntasEncuesta, setPreguntasEncuesta] = useState([])
  const [datosFuncionario, setDatosFuncionarios] = useState({
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
  })

  //Obtenemos el numero en el que se encuentra el Step
  const StepNumero=(numero)=>{
    setNumeroStep(numero)
  }

  //Renderizamos el componente que se necesita, segun el numero de la Step
  const Render = ({...rest}) =>{
    return (filterComponents(
      {
          1: <Funcionario {...rest}/>,
          2: <Encuesta {...rest}/>,
          3: <Aprobado {...rest}/>
      }, numeroStep))
  }

  useEffect(() => {
    creates(setPreguntasEncuesta)
  }, [])
  
  return (
    <div className="container mt-4">
      <div className="columns is-multiline is-centered">
        <div className="column is-10">
          <Panel title='Nombre de Ente' subtitle={`Encuesta`}/>
        </div>
        {numeroStep !=3?
          <div className="column is-10">
            <div className="box">
              <Steps 
                number={2}  
                numeroStep={numeroStep}
                titles={{title1:'Información Funcionario',title2:'Encuesta'}}
                stepNumero={StepNumero}
              />
            </div>
          </div>
        :null
        }
        {numeroStep<=1?
          <div className="column is-10">
            <Buscar set={setDatosFuncionarios}/>
          </div>
        :null}
        
        <div className="column is-10">
          <div className="box">
            <Render values={datosFuncionario} preguntasEncuesta={preguntasEncuesta} setNumeroStep={setNumeroStep} setDatosFuncionarios={setDatosFuncionarios}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Form
