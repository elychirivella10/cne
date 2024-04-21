import Panel from "@/ui/panel/Panel";

import Basic from "@/ui/graficos/Basic";
import BarGraf from "@/ui/graficos/Proyectos";

import { estatus, estados } from "@/lib/peticiones/graficos";

 const Form = async ()=> {
  const estatusGraficos = await estatus()
  const estadosGraficos = await estados()
  return (
    <div className="columns is-multiline is-centered is-vcentered">
      <div className="column is-12">
        <div className="columns is-multiline">

          <div className="column is-4">
            <Panel title='Nombre de Ente' subtitle={`Dashboard`}/>
          </div>
          <div className="column is-8">
            <div className="box height-is-total is-primary">
              <p className = "text-anchor has-text-weight-bold has-text-white	">Tareas</p>
              <p className="has-text-white">Cantidad de funcionario que votaron por estado</p>
              <BarGraf ancho="100%"
                fill_2="#fff"
                fill="#ffd000"
                fill_3="#28d778"
                background="rgba(98,252,198,0.2)"
                graficosReducer={estadosGraficos}
              />
            </div>
          </div>

          <div className="column is-4">
            <Basic
                title = "ESTOS SON LOS QUE VOTARON"
                icon = "blue"
                reportes ={estatusGraficos[0].total}
                nomenclatura="Tareas"
            />
          </div>
          <div className="column is-4">
            <Basic
                title = "ESTOS SON LOS QUE NO VOTARON"
                icon = "blue"
                reportes ={estatusGraficos[1].total}
                llave="porcentaje_abastecimiento"
                nomenclatura="Tareas"
            />
          </div>
          <div className="column is-4">
            <Basic
                title = "ESTOS SON LOS QUE AUN NO VOTARON"
                icon = "blue"
                reportes ={estatusGraficos[2].total}
                llave="porcentaje_abastecimiento"
                nomenclatura="Tareas"
            />
          </div>
         
        </div>
      </div>
      
    </div>
  );
}

export default Form