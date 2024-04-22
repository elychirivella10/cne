import { useState } from "react"

import { creates } from "@/lib/peticiones/preguntasCarga"
import { update } from "@/lib/peticiones/funcionarioVotacion"

import { App } from "antd"

const Encuesta = ({preguntasEncuesta, values, setNumeroStep}) =>{

    //obtenemos la variable de mensaje que traemos de la instancia App
    const {message} = App.useApp();

    const [respuestas, setRespuestas] = useState([])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        creates(respuestas, values.id, message)
        update(values, message, setNumeroStep)

    }


    return(
        <div className="columns is-multiline">
            {preguntasEncuesta.map((preguntas, index)=>(
                <div className="column is-12" key={index}>
                    <label className="label">{'¿'+preguntas.pregunta+'?'}<span className="has-text-danger-dark">*</span></label>
                    <div className="control has-icons-right pb-4" >
                        <input className="input" type="email"  placeholder={'¿'+preguntas.pregunta+'?'} required name={preguntas.id} onChange={(e)=>(
                            setRespuestas({
                                ...respuestas,
                                [e.target.name]:e.target.value
                            })
                        )}/>
                        <span className="icon is-small is-right">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
            ))}
            <div className="column is-12">
              <button className="button is-primary is-fullwidth" onClick={handleSubmit}>Continuar</button>
            </div>
        </div>
    )
}

export default Encuesta