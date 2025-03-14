import  {getUsers,getAlmbum,getPhoto}  from "../index.js"; //se importa el arhivo barril 
const URL = "https://jsonplaceholder.typicode.com/"; //Constante donde tiene el url 
let nombreUsuario = prompt("Ingrese el nombre de usuario"); //Se le pide que ingrese el nombre de usauro para despues pasarlo ocmo parametro

const ObtenerDatos = (async()=>{
       
    const usuario = await getUsers(URL,nombreUsuario) //Se realiza la consulta en el json
    return await Promise.all(usuario.map((async(user)=>{
        const album = await getAlmbum(URL,user); //Se le pasan como argumentos el url y lo que nos devuelve la callback del arreglo usuario
        const albumGaleria = await Promise.all(album.map(async(album) =>{ //Recorremos un nuevo arreglo con map en este caso el de album
            const galeria = await getPhoto(URL,album) //Obtenemos la foto 
            
            return{...album,galeria};   //Retornamos el album con parametro rest porque son muchos albumnes y galeria
        }));  



        return{usuario,albumGaleria} //Retorna los usuarios y las galerias 


    })));


})

ObtenerDatos().then(async(data)=>{ //Obtiene los datos y resuelve la promesa 
     console.log(data);
})