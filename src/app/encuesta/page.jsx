import Panel from "@/ui/panel/Panel";

 const Form =()=> {
  return (
    <div className="columns is-multiline is-centered is-vcentered">
      <div className="column is-10">
        <Panel title='Nombre de Ente' subtitle={`Encuesta`}/>
      </div>
      <div className="column is-10">
        <div className="box">
          <div className="columns is-multiline">
            <div className="column is-12">
                  <label className="label">Pregunta 1<span className="has-text-danger-dark">*</span></label>
                  <div className="control has-icons-right pb-4" >
                      <input className="input" type="email"  placeholder="Pregunta 1" required name="agent_email"/>
                      <span className="icon is-small is-right">
                          <i className="fas fa-envelope"></i>
                      </span>
                  </div>
            </div>
            <div className="column is-12">
                  <label className="label">Pregunta 2<span className="has-text-danger-dark">*</span></label>
                  <div className="control has-icons-right pb-4" >
                      <input className="input" type="email"  placeholder="Pregunta 2" required name="agent_email"/>
                      <span className="icon is-small is-right">
                          <i className="fas fa-envelope"></i>
                      </span>
                  </div>
            </div>
            <div className="column is-12">
                  <label className="label">Pregunta 3<span className="has-text-danger-dark">*</span></label>
                  <div className="control has-icons-right pb-4" >
                      <input className="input" type="email"  placeholder="Pregunta 3" required name="agent_email"/>
                      <span className="icon is-small is-right">
                          <i className="fas fa-envelope"></i>
                      </span>
                  </div>
            </div>
            <div className="column is-12">
              <button className="button is-primary is-fullwidth">Continuar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form
