export default function Cositasdescartadas(){
    return(
        <>
         <h2 className="font-bold text-2xl m-3">estructuras de datos: objetos</h2>
          <div className="m-4">
            <p>en js, los objetos se pueden ver como una coleccion de propiedades. con una sintaxis de llave/valor, se inicia un conjunto limitado de propiedades; luego se puede agregar o eliminaar propiedades. los valores de estas propiedades pueden ser de cualquier tipo incluido otros objetos, lo que permite construir estructuras de datos completas. <br /></p>
            <p>hay dos tipos de propiedades de objeto que tiene ciertos atributos: la propiedad <i>data</i> t la propiedad <i>accesor</i></p>     
          </div> 
          <h3 className="font-bold text-1xl m-3">propiedad data</h3>   
          <p className="m-4">asocia una clave con un valor y tiene los siguientes atributos:</p>
          <h3 className="font-bold text-1xl m-3">atributos de una propiedad data</h3>      
          <table>
             <thead className="border-collapse border border-red-400">
              <tr>
                <th className="border">atributo</th>
                <th className="border">tipo</th>
                <th className="border">descripcion</th>
                <th className="border">valor predeterminado</th>
                </tr>  
            </thead>  
            <tbody className="text-center">
              <tr>
                <td className="border">[[value]]</td>
                <td className="border">cualquier tipo de js</td>
                <td className="border">el valor recuperado por un captador de acceso get a la propiedad</td>
                <td className="border">underfined</td>
              </tr>
              <tr>
                <td className="border">[[wriable]]</td>
                <td className="border">bolleano</td>
                <td className="border">si es falso, el [[value]] de la propiedad no se puede cambiar</td>
                <td className="border">false</td>
              </tr>
               <tr>
                <td className="border">[[enumerable]]</td>
                <td className="border">bolleano</td>
                <td className="border">si es true la propiedad se enumerara con bucles</td>
                <td className="border">false</td>
              </tr>
              <tr>
                <td className="border">[[configurable]]</td>
                <td className="border">bolleano</td>
                <td className="border">si es false la propiedad no se puede eliminar, no se puede cambiar a una propiedad de acceso descriptor y los atributos que no sean [[Value]] y [[Writeable]] no se pueden cambiar.</td>
                <td className="border">false</td>
              </tr>
            </tbody>
          </table>  
          <div className="ejemplo">
            <h3 className="font-bold text-1xl m-3">objeto literal</h3>
            <p>un objeto literal es una manera consisa de crear un objeto solo con llaves y valores</p>
            <code>
              &#123;nombre:"Susana", apellido:"Gimenez". edad:90, colorPelo:"amarillo"&#125;
            </code>
          </div>
          <p id="tazaMaterial"></p>
          <p id="tazaTamanio"></p>
          <p id="tazaColor"></p>
        </>
    )
}