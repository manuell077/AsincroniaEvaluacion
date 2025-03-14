import {solicitud} from "../../index.js"; //importa el modulo de solicitud 

export const getPhoto = async(URL,album)=>{ //Obtiene el url y el album  como parametros 
          
    return solicitud(`${URL}/photos?albumId=${album.id}`) //bucas todas las fotos que tengan el mismo albumId 
}