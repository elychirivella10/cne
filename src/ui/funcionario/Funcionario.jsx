import Static from "./Estatico"
import { values } from "@/lib/data/funcionarioEstatico"

const Funcionario = () =>{

    return(
        <div className="columns is-multiline">
            <Static values={values}/>
        </div>
    )
}
export default Funcionario