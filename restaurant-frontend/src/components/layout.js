import React from "react";
import { restaurantPart, restaurantTitle, restaurantPhoto} from "./layout.module.css" 
import restaurant from "../images/restaurant2.png"

const Layout = () => {
    return (
        <div>
        <div className={restaurantPart}>
            <h1 className={restaurantTitle}>Welcome to MultiCuisine</h1>
            <img src={restaurant} alt='restaurant' className={restaurantPhoto}/>
        </div>
        <h2>Menu List</h2> 
        </div>
    )
}
export default Layout