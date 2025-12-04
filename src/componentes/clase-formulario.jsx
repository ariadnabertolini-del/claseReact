import FormularioFinal from "./formulario-final"

export default function Claseform(){
    return(
        <>
        <h2 className="m-4 text-2xl font-bold">Formularios</h2>
        <p className="m-4">los formularios html se utilizan para recolectar entradas del usuario. esta info recolectada se enviara a un servidor externo para ser procesada aunque podemos utilizar funciones de js para modificar contenido del DOM.local</p>
        <div>
            <p className="m-4">ejemplo</p>
            <form className="m-4 border border-violet-400">
                <label>Nombre:</label> <br />
                <input type="text" className="border border-pink-400 rounded" /> <br />
                <label>Apellido:</label> <br />
                <input type="text"  className="border border-pink-400 rounded"/> <br />
                <input type="submit" value="Enviar" className="bg-violet-300 hover:bg-pink-300 p-2" />
            </form>
        </div>
        <h2 className="m-4 text-2xl font-bold">el elemento &lt;form&gt;</h2>
        <p className="m-4">este es el un elemento contenedor para diferentes tipos de elementos de entrada, tales como: campos de textos, checkboxes, botones radius, botones de envio, etc.</p>
        <h2 className="m-4 text-2xl font-bold">el elemento &lt;input&gt;</h2>
        <p className="m-4">este elemento es el mas utilizado en un formulario. puede mostrarse de diversas maneras dependiendo de su atributo type</p>
        <table className="m-4 border border-pink-400 border-collapse table-auto">
            <thead>
                <tr>
                <th>type</th>
                <th>descripcion</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>type="text"</td>
                <td>muestra un campo para introducir una sola linea de texto</td>
            </tr>
            <tr>
                <td>type="radio"</td>
                <td>muestra un boton redondo que se puede utilizar para seleccionar uno de varias opciones</td>
            </tr>
            <tr>
                <td>type="checkbox"</td>
                <td>muestra una caja de selecionion para elegir entre 0 o multiples seleccciones</td>
            </tr>
            <tr>
                <td>type="submit"</td>
                <td>muestra un boton para enviar la informacion del formulario</td>
            </tr>
            <tr>
                <td>type="button"</td>
                <td>muestra un boton cliqueable</td>
            </tr>
            </tbody>
        </table>
         <h2 className="m-4 text-2xl font-bold">el elemento &lt;label&gt;</h2>
         <p>el elemento label define una etiqueta para muchos elementos del formulario. es muy util para los usarios con lector de pantalla ya que este sera leido cuando el usario enfoca el elemento de entrada. </p>
         <p>este elemento tambien ayuda a usario que tienen dificultad clikeando en regiones muy pequeñas (tales como botones radio o checkboxes) porque cuando el usario clickea el texto del &lt;label&gt; activa dichos botones</p>
         <p>tambien podemos utilizar un atributo llamado for para emparejar un elemento de entradad con la etiqueta, para hacerlo, el id de la entrada debe coincidir con el for del label</p>

        <div>
            <h3 className="m-4 text-2xl font-bold">ejemplos radio</h3>
            <div className="radios">
                <form>
                    <input type="radio" id="html" name="leng_fav" value="HTML" />
                    <label for="html">HTML</label> <br />
                    <input type="radio" id="css" name="leng_fav" value="CSS" />
                    <label for="css">CSS</label> <br />
                    <input type="radio" name="leng_fav" id="javascript" value="JavaScript" />
                    <label for="javascript">JavaScript</label> <br />
                </form>
                 <h3 className="m-4 text-2xl font-bold">ejemplos checkbox</h3> 
                 <form>
                    <input type="checkbox" id="vehiculo1" name="vehiculo1" value="Moto" />
                    <label for="vehiculo1">tengo una moto</label> <br />
                     <input type="checkbox" id="vehiculo2" name="vehiculo2" value="Auto" />
                    <label for="vehiculo2">tengo una auto</label> <br />
                      <input type="checkbox" id="vehiculo3" name="vehiculo3" value="Bici" />
                    <label for="vehiculo3">tengo una bici</label> <br />
                 </form>
            </div>
        </div>
        <FormularioFinal />
        </>
    )
}
