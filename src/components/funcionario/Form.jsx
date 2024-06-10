import { validarEmpty } from "helpers/validateEmpty"

//Instancia de app de antd, para usar componentes si colocar manualmente la configuración
import { App } from 'antd';

const Form = ({setNumeroStep, values, setValues}) =>{

    //obtenemos la variable de mensaje que traemos de la instancia App
    const {message} = App.useApp();

    return(
        <div className="column is-12">
            <div className="columns">
                <div className="column is-6"><button className="button is-warning is-dark is-fullwidth" onClick={(e)=>{
                    if (validarEmpty(values)) {
                        setValues({
                            ...values,
                            "id_estatus":2
                        })
                        setNumeroStep(2)
                    }else{
                        return message.error('Debe ingresar un funcionario para avanzar', 2)
                    }
                    
                    }}>No vote</button></div>
                <div className="column is-6"><button className="button is-primary is-fullwidth" onClick={(e)=>{
                    if (validarEmpty(values)) {
                        setValues({
                            ...values,
                            "id_estatus":1
                        })
                        setNumeroStep(2)
                    }else{
                        return message.error('Debe ingresar un funcionario para avanzar', 2)
                    }
                    
                    }}>Si, Vote</button></div>
            </div>
        </div>
    )
}

export default Form