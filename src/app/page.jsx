'use client'
import { useState } from "react";
import Panel from "@/ui/panel/Panel";
import Steps from '@/ui/steps/Steps'
import Buscar from "@/ui/buscar/Buscar";
import Funcionario from "@/ui/funcionario/Funcionario";

import { filterComponents } from "@/lib/helpers/filterComponents";

 const Form =()=> {
  const [numeroStep, setNumeroStep]= useState(1)

  //Obtenemos el numero en el que se encuentra el Step
  const StepNumero=(numero)=>{
    setNumeroStep(numero)
  }

  //Renderizamos el componente que se necesita, segun el numero de la Step
  const Render = ({...rest}) =>{
    return (filterComponents(
      {
          1: <Funcionario/>,
          2: <Funcionario/>
      }, numeroStep))
  }
  return (
    <div className="columns is-multiline is-centered">
      <div className="column is-10">
        <Panel title='Nombre de Ente' subtitle={`Encuesta`}/>
      </div>
      <div className="column is-10">
        <div className="box">
          <Steps 
            number={2}  
            titles={{title1:'Información Funcionario',title2:'Encuesta'}}
            stepNumero={StepNumero}
          />
        </div>
      </div>
      <div className="column is-10">
        <Buscar/>
      </div>
      <div className="column is-10">
        <div className="box">
          <Render/>
        </div>
      </div>
    </div>
  );
}

export default Form
