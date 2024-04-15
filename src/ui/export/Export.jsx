'use client'
import React from 'react'

const Export=()=>{

    const ChangeStatusExport=(e)=>{

    }
    return(
        <div className="box">
            <p className=" has-text-weight-semibold">Filtros</p>
            <div className="field">
                <input id="switchExample" type="text" name="switchExample" className="input" onChange={ChangeStatusExport}/>
            </div>
            <button className = "button is-fullwidth is-blue">Buscar</button>
        </div>
    )
}
export default Export