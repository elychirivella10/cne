import axios from "axios"
import Cookies from 'js-cookie';
import { rutaAxios } from "helpers/variablesGoblales";


export async function login (data, message) {
    const res = await new Promise((resolve, reject) => {
      axios.post(`${rutaAxios}auth/user/authentication`, {...data})
      .then(res=>{
        message.success('Bienvenido', 2)
        Cookies.set('token', res.data.token, { expires: 7, secure: true })
        resolve(true)
      })
      .catch(error=>{
        message.error('Credenciales incorrectas', 2)
        reject(false)
      })
    });
    
    return res
}