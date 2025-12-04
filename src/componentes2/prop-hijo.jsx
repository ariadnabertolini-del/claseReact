export default function PropHijo(props){
    return(
        <div className="bg-amber-400 border-2 border-black">
            <h2>componente hijo</h2>
            <p>nombre: {props.nombre}</p>
            <p>modelo: {props.modelo}</p>
        </div>
    )
}