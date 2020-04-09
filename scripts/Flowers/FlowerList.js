import { useFlowers } from "./FlowerProvider.js"
import { Flower } from "./Flower.js"



const contentTarget = document.querySelector(".flowerContainer")

export const flowersToRender = () => {
    
    const flowers = useFlowers()

    contentTarget.innerHTML = flowers.map(flower => {
        return Flower(flower)
    }).join(" ")
}



            