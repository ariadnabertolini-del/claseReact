import { useState } from "react"

import PropHijo from "./prop-hijo"
import PropHijo2 from "./prop-hijo2";

export default function Props(){

    const[color,setColor] = useState("");
    return(
        <div>
        <h2>paso de informacion y manejo de variables</h2>
        <p>prop es la abreviacion de propiedades (properties) las utilizamos para pasar informacion de un compotente hacia sus hijos, hay props por defecto y props personalizados. <br />los props por defecto los utilizamos anteriomente en algunas etiquetas como src= href= style= y los personalizados los definimos directamente en la etiqueta</p>
        <p>ejemplo: &lt;componente prop1=&#123;variable&#125; prop2="valor-literal" prop3=&#123;objeto&#125;&gt;</p>
        <PropHijo nombre="susana" modelo="1990" />
        <p>valor de la variable color: {color}</p>
        <PropHijo2 funcionCambia={() => setColor} />
        </div>
    )
}