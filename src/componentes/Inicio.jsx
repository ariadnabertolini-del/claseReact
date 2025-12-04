export default function Inicio(){
    //este es el cuerpo basico de la funcion a exportar
    //estas funciones son las que llamamos componentes
    //los nombres de estos componentes deben iniciar con una mayuscula, siguiendo el formato UpperCamelCase
    //para rendedizar el html dentro de estas funciones, tenemos que escribirlo como argumento del return
   
    //primer ejemplo de un objeto, cada propiedad esta separado por comas
    //todo el objeto definido entre las llaves es almacenado en la variable persona
    const persona = {nombre:"susana", apellido:"gimenez", edad:90, colorPelo:"amarillo"}
    
    //console.log(persona);
 
    //const taza = {material:"ceramico", tamanio:400, color:"multicolor"}
    //document.getElementById("tazaMaterial").innerHTML = taza.material;
    //document.getElementById("tazaTamanio").innerHTML = taza.tamanio;
    //document.getElementById("tazaColor").innerHTML = taza.color;
    return(
        <>
          <h1>pagina de inicio</h1>
          <a href="./clase-formulario">link a clase formulario</a>
        </>
    )
}