//import data from './data.js';     //El archivo con la información 

//Creamos el elemento Cabecera 
function Info({imagen, nombre, precio, info, destacado}) {
  if(info != "") {
    let precioDef = (precio != "") ? precio+"€" : "A consultar"
    let imagenDef = (imagen != "") ? imagen : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
    
    return (
      <>
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
      </>
    )
  }
  }
  
  export default Info
  
  
  
  /*data.map(({id, image, name, age }) => (
      <Persona key={id} img={image} nombre={name} edad={age} />
  ))*/