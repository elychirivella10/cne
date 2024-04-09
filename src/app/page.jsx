import Panel from "@/components/panel/Panel";
import Steps from '@/components/steps/Steps'
import Buscar from "@/components/buscar/Buscar";

 const Form =()=> {
  return (
    <div className="columns is-multiline is-centered">
      <div className="column is-10">
        <Panel title='SAPI' subtitle={`Encuesta`}/>
      </div>
      <div className="column is-10">
        <div className="box">
          <Steps 
            number={2}  
            titles={{title1:'Información Funcionario',title2:'Encuesta'}}
          />
        </div>
      </div>
      <div className="column is-10">
        <Buscar/>
      </div>
    </div>
  );
}

export default Form
