import { getFlowers } from "./Flowers/FlowerProvider.js";
import { flowersToRender } from "./Flowers/FlowerList.js";
import { getRetailers } from "./Retailers/RetailersProvider.js";
import { retailersToRender } from "./Retailers/RetailersList.js";



getFlowers()
    .then(flowersToRender)

getRetailers()
    .then(retailersToRender)