import listaPersonas from '../json/personas.json'
import ListaPeliculas from '../json/peliculas.json'

export default function ContenidoDinamico(){

function Ficha(){
    return(
        
        <div id='contenedorelementos' className='flex flex-wrap gap-4 bg-amber-200 [&_p]:m-0 '>
            
            {
                ListaPeliculas.map((peli,indice) =>(
                   <div id='elemento' key={indice} className='w-2/5 border border-red-500 rounded-sm bg-gradient-to-b from-red-600 to-black-200'>
            <h4>{peli.titulo}</h4>
            <img className='w-full' src={peli.imagen} alt='imagen1'></img>
            <p>duracion: {peli.duracion}</p>
            <p>genero:{peli.genero}</p>
            <p>director: {peli.director}</p>
            </div>
                ))
            }
        </div>
    )
} 

    return(
            <div>
                <h2>creacion dinamica</h2>
                <p>utilizamos las funcionalidades de react podemos generar elementos html de manera automatica. para esto utlizamos dos cosas una lista de objetos y la funcion map()</p>
                <h3>json</h3>
                <p>es el acronimo de javascript objet notation, es un formato que define objetos de java script de manera estandarizada estos estan contenido en su propio archivo con extension json y se pueden importar directamente a los componentes de react </p>
                <h3>tabla dinamica</h3>
                <p>en este ejemplo vamos a cargar una tabla con contenido de un archivo .json</p>
                <div>
                    <table className='border border-b-red-700 table-auto w-2xl [&_th]:border [&_td]:border [&_td]:px-1 '>
                        <thead>
                            <tr>
                                <th>nombre</th>
                                <th>email</th>
                                <th>curso</th>
                                <th>nota final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaPersonas.map((persona, indice) => (
                                    <tr key={indice}>
                                        <td>{persona.nombre}</td>
                                        <td>{persona.email}</td>
                                        <td>{persona.curso}</td>
                                        <td>{persona.notafinal}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <h3>contenedores dinamicos </h3>
                    <p>no solamente podemos generar tablas, el contenido dinamico puede ser cualquier cosa dese un tag p hasta un tag div con multiples elementos internos. es importante primero definir una estructura estable ya que el contenido se ira cargando de manera automatica</p>
                    <div>
                        
                        <Ficha />

                    </div>
            
            </div>
    )
}