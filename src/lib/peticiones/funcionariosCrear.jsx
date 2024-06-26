import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"


export async function crear(values, message, redirect) {

    axios.post(`${rutaAxios}funcionarios/create`, {...values})
    .then(res=>{
        console.log(res)
        message.success('Se cargado la informacion correctamente', 2)
        return  redirect('/funcionarios')
    })
    .catch(err=>{
        message.error('Ups... Ha ocurrido un error, intente mas tarde', 2)
        return false
    })
}