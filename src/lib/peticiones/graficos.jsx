import axios from "axios"
import { rutaAxios } from "../helpers/variablesGoblales"

export async function estatus() {
    const respuesta = await axios.get(`${rutaAxios}dashboard/funcionariosByEstatus`)
    return respuesta.data.funcionariosByEstatus
}

export async function estados() {
    const respuesta = await axios.get(`${rutaAxios}dashboard/funcionariosByEstados/1`)
    return respuesta.data.funcionariosByEstado
}