import Static from "./Estatico"
import { values } from "@/lib/data/funcionarioEstatico"
import Form from "./Form"

const Funcionario = () =>{
    return(
        <div className="columns is-multiline">
            <Static values={values}/>
            <Form/>
        </div>
    )
}
export default Funcionario