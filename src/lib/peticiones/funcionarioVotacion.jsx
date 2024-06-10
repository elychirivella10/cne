import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function update(values, message, step) {
    const id = values.id
    delete values.id
    delete values.updated
    delete values.created

    axios.put(`${rutaAxios}funcionarios/${id}`, {...values})
    .then(res=>{
        message.success('Se cargado la informacion correctamente', 2)
        step(3)
    })
    .catch(err=>{
        message.error('Ups... Ha ocurrido un error, intente mas tarde', 2)
        return false
    })
}