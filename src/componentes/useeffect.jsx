import { useEffect, useState } from "react"

export default function FuncionUseEffect(){
const [cuenta, setCuenta] = useState(0);
useEffect(() => {
    setTimeout(() => {
        setCuenta((cuenta) => cuenta + 1);
    }, 1000)
}, [])

//ejemplos
useEffect(() =>{
    //corre en cada renderizado
});
useEffect(() =>{
    //corre solo en el primer render
}, []);

let propiedades, estados;
useEffect(() => {
   //corre en el primer render y cada vez que el valor de propiedades o estados cambie
}, [propiedades, estados]);

//ejemplo practico
const [cuenta2, setCuenta2] = useState(0);
const [calculo, setCalculo] = useState(0);
useEffect(() => {
    setCalculo(() => cuenta2 * 2);
}, [cuenta2])

    return(
        <div>
            <h2>hooks useEffect</h2>
            <p>este hooks nos permite realizar side effect (efectos secundario) que son efectos observables en la pagina</p>
            <p>algunos ejemplos de side effect som: obtencion de datos, actualizaciones directas del DOM y temporizadores</p>
            <p>use effect acepta dos argumentos el segundo siendo opcional</p>
            <code>
                useEffect(&lt;funcion&gt;, &lt;dependencia&gt;)
            </code>
            <h3>ejemplo temporizador</h3>
            <p>usamor la funcion setTimeout para contar un segundo luego del redendizado </p>
            <p> Hola! me redenderice {cuenta} veces</p>
            <p>podemos ver que el contador sigue actualizandose cuando solo deberia contar una vez, esto sucede ya que useEffect corre en cada rederizado. esto significa que cuando el contador cambia sucede un renderizado lo que activa el efecto</p>
            <p>esto no es lo que queriamos, hay varias maneras de controlar cuando corre side effect.</p>
            <p>deberiamos siempre incluir el segundo parametro que acepta una array. opcionamelte podriamos pasar dependencias al useeffect de esta manera</p>
            <h3>ver ejemplos en el codigo fuente</h3>
            <h3>ejemplo practico</h3>
            <p>cuenta: {cuenta2}</p>
            <button onClick={() => setCuenta2((c) => c + 1)}>+</button>
            <p>calculo: {calculo}</p>
        </div>
        
    )
}