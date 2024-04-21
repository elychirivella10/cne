import Static from "./Estatico"
import Form from "./Form"

const Funcionario = ({values}) =>{
    return(
        <div className="columns is-multiline">
            <Static values={values}/>
            <Form/>
        </div>
    )
}
export default Funcionario