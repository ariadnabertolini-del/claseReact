export default function PropHijo2({funcionCambia}){

    let valorColor = "";
    function gestionColores(valorRadio){
        valorColor = valorRadio
        console.log(valorRadio)
    }

    return(
        <div className="bg-violet-400 border-2 border-black">
            <h2>hijo 2</h2>
            <p>valor de la variable color en hijo: </p>
            <form>
            <input type="radio" name="colores" value={"rojo"} onChange={(e) => gestionColores(e.target.value)} />
            <label>rojo</label>
            <input type="radio" name="colores" value={"azul"} onChange={(e) => gestionColores(e.target.value)} />
             <label>azul</label>
            <input type="radio" name="colores" value={"amarillo"} onChange={(e) => gestionColores(e.target.value)} />
             <label>amarillo</label>
            <input type="radio" name="colores" value={"verde"} onChange={(e) => gestionColores(e.target.value)} />
            <label>verde</label>
            </form>
        </div>
    )
}