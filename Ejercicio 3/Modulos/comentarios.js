import {solicitud} from "../../index.js";  //Se importa el metodo solicitud 
export const getCommets=async(URL,post)=>{ //Se obtienen los parametros url y post 
    return  await solicitud(`${URL}/comments?postId=${post.id}`) //Se realiza la solicitud a los comentarios  segun el postId
}