import { useEffect, useState } from "react"
import {CSVLink} from "react-csv"

const Export = ({data, dataFiltrada, nombre}) =>{
    const [val, setVal] = useState([])
    useEffect(() => {
        let customHeadings = []
        if (nombre =="funcionarios") {
          if (dataFiltrada.length >0) {
            customHeadings = dataFiltrada.map(item=>({
                "Identificacion": item.cedula,
                "Nombres y Apellidos": item.apellidos_nombres,
                "Estado": item.estado,
                "Estatus": item.estatus,
                "Entidad": item.entidad_adscripcion,
                "1x10": item.porcentaje,
              }))
        }else{
            customHeadings = data.map(item=>({
                "Identificacion": item.cedula,
                "Nombres y Apellidos": item.apellidos_nombres,
                "Estado": item.estado,
                "Estatus": item.estatus,
                "Entidad": item.entidad_adscripcion,
                "1x10": item.porcentaje,
              }))
            }
        }else{
          if (dataFiltrada.length >0) {
            customHeadings = dataFiltrada.map(item=>({
                "Estado":item.estado,
                "Votaron": item.total,
                "No Votaron": item.total,
                "Sin Reportar": item.total,
              }))
        }else{
            customHeadings = data.map(item=>({
              "Estado":item.estado,
              "Votaron": item.total,
              "No Votaron": item.total_no,
              "Sin Reportar": item.total_sin,
              }))
            }
        }
        
            
            setVal(customHeadings)
    }, [dataFiltrada, data])
    
    return(
        data.length>0?
        <CSVLink
        filename={nombre+".csv"}
        separator={";"}
        data={val}
        className="button is-primary"
      >
        
        Exportar Data Excel
      </CSVLink>
        :<button className="button is-primary" disabled>Exportar Data Excel</button>
        
    )
}

export default Export