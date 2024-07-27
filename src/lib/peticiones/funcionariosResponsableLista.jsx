import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function responsables(id, setData) {
    const respuesta = await axios.get(`${rutaAxios}funcionarios/responsable/${id}`)

    if (setData) {
        return setData(respuesta.data.funcionariosResponsables)
      }
      return respuesta.data.funcionariosResponsables
}