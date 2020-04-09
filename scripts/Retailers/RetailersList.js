import { useRetailers } from "./RetailersProvider.js"
import { Retailer } from "./Retailers.js"



const contentTarget = document.querySelector(".retailerContainer")

export const retailersToRender = () => {
    
    const retailers = useRetailers()

    contentTarget.innerHTML = retailers.map(retailer => {
        return Retailer(retailer)
    }).join(" ")
}



            