import { getFlowers } from "./Flowers/FlowerProvider.js";
import { flowersToRender } from "./Flowers/FlowerList.js";



getFlowers()
    .then(flowersToRender)