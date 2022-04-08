import React from "react";
import { restaurantPart, restaurantTitle, restaurantPhoto} from "../components/layout.module.css" 
import restaurant from "../images/restaurant2.png"

const Layout = () => {
    return (
        <div>
        <div className={restaurantPart} >
            <img src={restaurant} alt='restaurant' className={restaurantPhoto} />
            <div  className={restaurantTitle}>
            <h1>Welcome to MultiCuisine</h1>
            </div>
        </div>
        <h2>Menu List</h2> 
        </div>
    )
}
export default Layout