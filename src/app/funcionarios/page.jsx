import Panel from "@/ui/panel/Panel";

import TableComp from "@/ui/tabla/Tabla";

import { Columns } from "./columns/Columns";

import Export from "@/ui/export/Export";

import { Skeleton } from 'antd';
import { Suspense } from "react";

 const Form = async ()=> {
  return (
    <div className="columns is-multiline is-centered is-vcentered">
      <div className="column is-12">
        <Panel title='Nombre de Ente' subtitle={`Lista Funcionario`}/>

        <div className="columns is-multiline">
          <div className="column is-10">
            <Suspense fallback={<div className="box"><Skeleton active/></div>}>
              <TableComp columns={Columns}/>
            </Suspense>
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
