export const Flower = (flowerObject) => {
    return `
        <div class="flowerList">
            <h2>${flowerObject.commonName}</h2>
            <h3>${flowerObject.color}</h3>
        </div>
    `
}