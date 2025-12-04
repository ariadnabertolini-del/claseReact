import { use, useState } from "react";

export default function FuncionUseState(){

    const [marca, setMarca] = useState("ford");
    const [modelo, setModelo] = useState("mustang");
    const [anio, setAnio]  = useState("1963");
    const [color, setColor]  = useState("rojo");

    //usestate tambien almacena objetos
    const [persona, setPersona] = useState({
        nombre:"susana",
        edad:90,
        apellido:"gimenez",
        profesion:"actriz",
    });
    //tres puntitos es el operador spread
    const actualizaProfesion = () => {
        setPersona(previousState => {
            return {... previousState, prefesion: "conductora"}
        })
    }

    return(
        <div className="contenido">
            <h2>hooks useState</h2>
            <p> este hooks se utiliza para mantener un seguimiento del estado de la aplicacion. <br />los estados generalmente se refieren a datos o propiedades de la aplicacion que necesitan ser monitoriados</p>
            <p>el primer paso es importarlo desde react : import &#123;useState&#125; from 'react'</p>
            <p>luego inicializanos nuestro estado invocando a usestate en nuestro componente funcional. useState acepta un estado inicial y retorna dos valores:
                <ul>
                    <li>el estado actual</li>
                    <li>una funcion que actualiza el estado</li>
                </ul>
                <h2>ejemplo</h2>
                <code>
                    import &#123;useState &#125; from 'react'; <br />
                    function ColorFavorito() &#123; <br />
                    const  [color, setColor] = useState("Azul";) <br />
                    &#125;
                </code>
            </p>
            <p>el primer valor, color es nuestro estado actual, el siguiente con el segundo valor, setvalor, es la funcion que se utiliza para actualizar nuestro estado. estos nombres son variables que</p>
            <p>por ultimo establecemos el estado inicial a azul con la llamada useState</p>
            <h2>ejemplo 2</h2>
            <p>tengo un auto marca {marca} modelo {modelo} del año {anio} y color {color}</p>
            <h2>ejemplo con objetos</h2>
            <p>mi nombre es {persona.nombre} {persona.apellido} tengo {persona.edad} años de edad. mi profesion es {persona.profesion}</p>
            <h2>actualizando objetos</h2>
            <p>cuando un estado se actualiza, el estado entero es sobreescrito </p>
            <button type="button" onClick={() => setPersona("conductora")}>cambiar profesion (pero tambien cambia el objeto)</button>
            <p>como podemos ver al hacer clik en el boton toda la informacion se pierde menos el atributo profesion. ¿que tal si quisieramos actualizar la profesion pero mantiniendo los demas atributos?</p>
            <p>para ello utilizamo el operador spread(propagacion) junto con la funcion </p>
            <p>mi nombre es {persona.nombre}{persona.apellido} tengo {persona.edad} años de edad. mi profesion es {persona.profesion}</p>
            <button type="button" onClick={actualizaProfesion}>actauliza la profesion</button>
            <p>ya que necesitamos el valor actual del estado pasamos una funcion a nuestra funcion setPersona, que recibe el valor del estado anterior (previousState es el nombre de la variable, podria llamarse de cualquier manera. entoces retornamos un objeto propagando el estado anterior y sobreescribiendo solo la profesion)</p>

        </div>
    )
}