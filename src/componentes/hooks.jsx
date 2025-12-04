import { useState } from "react"

import FuncionUseState from "./usestate"
import FuncionUseEffect from "./useeffect"

export default function Hooks(){
    const [nombre, setNombre] = useState("Stanley")
    return(
        <div className="contenido">
            <h1>react hooks</h1>
            <p>los ganchos (hooks) permiten a los componentes funcionales acceder al estado y otras propiedades sin la utilizacio de clases. <br />provehen una api mas directa a conceptos de react como props, states, context, entre otros.</p>
            <p>son en definitiva funciones que permiten entre "enganchar a propiedades de react desde componentes funcionales" </p>
            <h2>ejemplo</h2>
            <div className="p-6">
                <p>hola, mi nombre es: {nombre}</p>
                <button type="button" onClick={() => setNombre("Eddie")}>cambiar nombre</button>
            </div>
            <p>se deben importar los hooks desde el react</p>
            <h2>reglas de hooks</h2>
            <p>hay tres reglas para los hooks:
                <ul>
                    <li>solo pueden ser llamados dentro de componentes funcionales</li>
                    <li>solo pueden ser llamados en el nivel superior de un componente</li>
                    <li>no pueden ser condicionales</li>
                </ul>
            </p>
            <FuncionUseState />
            <FuncionUseEffect/>
        </div>  
    )
}