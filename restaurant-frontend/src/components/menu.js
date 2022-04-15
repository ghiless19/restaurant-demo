import * as React from 'react'
import ItemsQuery from "./itemsQuery"
import {containerCard, containerCardName, containerCardDesc, containerCardPrice, card, container, photo} from "./layout.module.css" 


const Menu = () => { 
  return (    
    <div>    
      <ItemsQuery>
      {({ data: { items } }) => {
          return (
      <div className={container}>
        {items.data.map((item) => (
          <div  key={item.id} >
                  <div className={card}>
                    <div >
                      <img src={"http://localhost:1337" + item.attributes.image.data.attributes.url} alt={item.attributes.name} className={photo}/>
                    </div>
                    
                    <div className={containerCard}>
                      <div>
                        <div  className={containerCardName}>
                              {item.attributes.name}
                        </div>  
                        <div  className={containerCardPrice}>
                              {item.attributes.price} $
                        </div>  
                        </div>
                      <div className={containerCardDesc}>
                        <p>
                            {item.attributes.description}
                        </p>
                      </div> 
                    </div>
  
                  </div>  
                
              </div>
              ))
        }
          </div>
          )}}
         </ItemsQuery>     
    </div>
    )
}

export default Menu