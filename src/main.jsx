//import React from 'react'
//import ReactDOM from 'react-dom/client'
import Cabecera from './Cabecera.jsx'
import Info from './Info.jsx'
import './index.css' 
import data from './data.js';  

//En el elemento con "id = root" del html añadimos nuestro elemento App
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Cabecera />
    <div>
      {
        data.map(({id, image, name, price, info, destacado}) => (
          <Info key={id} imagen={image} nombre={name} precio={price} info={info} destacado={destacado} />
        ))
      }
      
    </div>
  </>
  /*
    <React.StrictMode>
      <App />
   <Cabecera />
    </React.StrictMode>,
  */
)
