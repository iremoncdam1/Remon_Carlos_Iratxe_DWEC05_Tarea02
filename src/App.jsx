import Info from './Info.jsx'
import data from './data.js';

//Creamos el componente App 
function App() {
  return (
    <main>
      <section>
        <div className="title">
          <h2>Nuestros tours</h2>
          <div className='underline'></div>
        </div>

        {/*
          Añadimos aquí también el div dentro del que estarán los articulos, ya que 
          tienen que estar dentro de la etiqueta "section" del primer componente
        */}
        <div>
          {
            //Por cada articulo del archivo se hace un componente
            data.map(({id, image, name, price, info, destacado}) => (
              <Info key={id} imagen={image} nombre={name} precio={price} info={info} destacado={destacado} />
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default App