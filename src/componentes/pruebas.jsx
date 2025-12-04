export default function Pruebas(){
    return(
        <form className="p-4 bg-pink-50 flex flex-col md:flex-row ">
            <div className="[&>input]:border  [&>input]:border-violet-800  [&>input]:bg-white [&>input]:rounded-sm">
                <label for="fnombre">Nombre:</label> <br />
                <input type="text" id="fnombre" name="fnombre" /> <br />
                <label for="fapellido">Apellido:</label> <br />
                <input type="text" id="fapellido" name="fapellido" /> <br />
                <label for="fdni">DNI:</label> <br />
                <input type="text" id="fdni" name="fdni" /> <br />
                <label for="fmail">E-Mail:</label> <br />
                <input type="text" id="fmail" name="fmail" /> <br />
                <label for="ftelefono">Telefono:</label> <br />
                <input type="text" id="ftelefono" name="ftelefono" /> <br />
                <label for="fnac">Fecha de nacimiento:</label><br />
                <input type="date" name="fnac" id="fnac" /> <br />
            </div>
            <div className="formradios m-4" >
                <p className="font-bold text-sm">Tipos de Vehiculos</p>
                <input type="radio" name="fvehiculo" id="fauto" value="Auto"/>
                <label for="fvehiculo"> Tengo Auto</label> <br />
                <input type="radio" name="fvehiculo" id="fmoto" value="Moto"/>
                <label for="fvehiculo"> Tengo Moto</label> <br />
                <input type="radio" name="fvehiculo" id="fbici" value="Bici"/>
                <label for="fvehiculo"> Tengo Bici </label> <br />
                <input type="radio" name="fvehiculo" id="fnotengovehiculo" value="NotengoVehiculo"/>
                <label for="fvehiculo"> No tengo Vehiculo</label>
            </div>
            <div className="formcheckboxes m-4">
                <p className="font-bold text-sm">Estudios</p>
                <input type="checkbox" name="festudio1" id="festudio1" value="Primario"/>
                <label for="festudio1"> Estudio Primario</label> <br />
                <input type="checkbox" name="festudio2" id="festudio2" value="Secundario"/>
                <label for="festudio2"> Estudio Secundario</label> <br />
                <input type="checkbox" name="festudio3" id="festudio3" value="Terciario"/>
                <label for="festudio3"> Estudio Terciario</label> <br />
            </div>
            
        </form>
    )
}