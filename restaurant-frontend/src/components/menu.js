import * as React from 'react'

import itemsList from '../components/itemList';
import {containerCard, containerCardName, containerCardPrice, card, container, photo} from "../components/layout.module.css" 
const Menu = () => {
    return (
        <div className={container}>
          
        {itemsList.map(({id, name, price, path, desc}) => {
            return(
              <div className={card}>
                <h4 key={id}>
                  <div>
                 
                  <div>
                    <img src={path} alt={name} className={photo} />
                  </div>
                    
                    <div className={containerCard}>
                      <div className={containerCard}>
                        <div  className={containerCardName}>
                          {name}
                        </div>
                      
                        <div className={containerCardPrice}> 
                          {price} $
                        </div>  
                      </div>
                      <p>
                        <div>
                          {desc}
                        </div>
                      </p>
                    </div>
                  
                  </div>  
                </h4>
              </div>

            )
           
            }
            )
          }
          </div>
    
    )
}
export default Menu