import axios from "axios"
import { rutaAxios } from "../helpers/variablesGoblales"

export async function creates(respuestas, id, message) {
    let array = []
    for (const property in respuestas) {
        array.push({
            "id_funcionario":id,
            "respuesta":respuestas[property],
            "id_pregunta":property
        })
    }
    if (array.length>0) {
        axios.post(`${rutaAxios}encuesta`, {...array})
        .then(res=>{
            message.success('Se cargado la informacion correctamente', 2)
        })
        .catch(err=>(
            message.error('Ups... Ha ocurrido un error, intente mas tarde', 2)
        ))
    }
    
}