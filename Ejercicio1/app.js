import {getUsuario,getTareas} from "./Modulos/index.js";

const URL = "https://jsonplaceholder.typicode.com/"; //Constante que va almacenar la misma url siempre 


const TraerDatos = async()=>{

      const usuarios = await getUsuario(URL); //Se envia el argumento url al usuario que va hacer la consulta al jso ndel usuairi 
      return await Promise.all(usuarios.map(async(user)=>{ //Se recorre el arreglo que nos devulve usuairos
           const tareas = await getTareas(URL,user); //se le nevia como parametros el url y la data de users a la funcion getTAREAS 
           const resultado = tareas.filter((palabra)=>palabra.completed == false ) //se filtran las areas que no estan compeltadas 
          
           return{resultado} //retorna el reultado 
             


      }))







}

TraerDatos().then((info)=>{ //Se resuelve la promesa
    console.log(info); //Imprime el resultado
})