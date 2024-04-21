const Encuesta = ({preguntasEncuesta}) =>{
    return(
        <div className="columns is-multiline">
            {preguntasEncuesta.map((preguntas, index)=>(
                <div className="column is-12" key={index}>
                    <label className="label">{'¿'+preguntas.pregunta+'?'}<span className="has-text-danger-dark">*</span></label>
                    <div className="control has-icons-right pb-4" >
                        <input className="input" type="email"  placeholder={'¿'+preguntas.pregunta+'?'} required name={preguntas.etiqueta}/>
                        <span className="icon is-small is-right">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
            ))}
            <div className="column is-12">
              <button className="button is-primary is-fullwidth">Continuar</button>
            </div>
        </div>
    )
}

export default Encuesta