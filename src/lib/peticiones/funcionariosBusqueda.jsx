import axios from "axios"
import { rutaAxios } from "../helpers/variablesGoblales"

export async function creates(cedula, setDatos) {
    const respuesta = await axios.get(`${rutaAxios}funcionarios/${cedula}`)
    setDatos(respuesta.data)
}
