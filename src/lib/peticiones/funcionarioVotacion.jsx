import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function update(values, message, step, estatus) {
    try {
      const id = values.id;
      values.id_estatus = estatus;
      delete values.id;
      delete values.updated;
      delete values.responsable;
      delete values.created;
      const response = await axios.put(`${rutaAxios}funcionarios/update/${id}`, { ...values });
      message.success('Se cargó la información correctamente', 2);
      return response;
    } catch (error) {
      message.error('Ups... Ha ocurrido un error, intente más tarde', 2);
      return false;
    }
  }


  function actualizarFuncionario(idFuncionario, idEstatus) {
    return axios.put(`${rutaAxios}funcionarios/update/${idFuncionario}`, {'id_estatus':idEstatus})
      .then(respuesta => respuesta.data.datosNuevos)
      .catch(error => {
        return false; // Indicar error
      });
  }


  export const setFuncionariosLote = async (data, id, message, sync)=>{
    let promesasSolicitudes = [];
    const alert = message
    for (let index = 0; index < data.length; index++) {
    const idSolicitud = data[index].id;
    const promesaSolicitud = actualizarFuncionario(idSolicitud, id);
    promesasSolicitudes.push(promesaSolicitud);
    }

    Promise.all(promesasSolicitudes)
    .then(datosRespuestas => {
      let counter = datosRespuestas.filter(respuesta => respuesta).length; // Contar respuestas exitosas
      message.success(`Se han actualizado ${counter} funcionarios correctamente`, 2)
      sync()
    })
    .catch(error => {
      return false
      //alert.error( 'Se ha obtenido un error' , 2)
    });

}