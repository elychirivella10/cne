import axios from "axios"
import { rutaAxios } from "@/lib/helpers/variablesGoblales";


export async function login (data, message) {
    const res = await new Promise((resolve, reject) => {
      axios.post(`${rutaAxios}auth/user/authentication`, {...data})
      .then(res=>{
        message.success('Bienvenido', 2)
        axios.post("/api/login", {"token":res.data.token})
        .then(res=>(resolve(true)))
      })
      .catch(error=>{
        message.error('Credenciales incorrectas', 2)
        reject(false)
      })
    });
    
    return res
}