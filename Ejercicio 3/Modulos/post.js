import {solicitud} from "../../index.js"; 


export const getPost= async(URL,post)=>{//Funcion que recibe como parametros el url y el objeto usuario
    return  await    solicitud(`${URL}/posts?title=${post}`) //Se hace la solicitud de los post Segun los usuarios
    
}