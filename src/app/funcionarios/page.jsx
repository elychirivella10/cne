import Panel from "@/ui/panel/Panel";

import TableComp from "@/ui/tabla/Tabla";

import { columns } from "./columns/Columns";

import Export from "@/ui/export/Export";

 const Form =()=> {
  return (
    <div className="columns is-multiline is-centered is-vcentered">
      <div className="column is-12">
        <Panel title='Nombre de Ente' subtitle={`Lista Funcionario`}/>

        <div className="columns is-multiline">
          <div className="column is-10">
            <TableComp columns={columns}/>
          </div>
          <div className="column is-2">
            <Export/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Form
