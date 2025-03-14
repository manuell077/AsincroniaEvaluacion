  const solicitud = async (URL) =>{ //Metodo que recibe como parametro la url del sitio 
     
    let busqueda = await fetch(URL); //Se hace la solicitud fetch 
    let respuesta = await busqueda.json(); //Se  trae lo que se consulta en un objeto
    
    return respuesta //Retorna la respuesta 


} 
export default solicitud