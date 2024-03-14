//Creamos el componente en el cual se mostrará la información 
function Info({imagen, nombre, precio, info, destacado}) {
  //Si no hay información, el tour no se renderiza
  if(info != "") {
    /*
      Se hacen un par de condiciones para mostrar el precio y la imagen del tour.
      Si el tour no tiene precio se mostrará el texto "A consultar" y si el tour 
      no tiene imagen, se mostrará una imagen representativa.
    */
    let precioDef = (precio != "") ? precio+"€" : "A consultar"
    let imagenDef = (imagen != "") ? imagen : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
    
    return (
      <article className={"single-tour " + (destacado == true ? 'destacado' : '')}>
        <img src={imagenDef} alt={nombre}/>
        <footer>
          <div className="tour-info">
            <h4>{nombre}</h4>
            <h4 className="tour-price">{precioDef}</h4>
          </div>
          <p>{info}</p>
        </footer>
      </article>
    )
  }
}
  
export default Info
  