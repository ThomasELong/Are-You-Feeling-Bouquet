export const Retailer = (retailerObject) => {
    return `
        <div class="retailerList">
            <h2>${retailerObject.name}</h2>
            <h3>
                ${retailerObject.address}
                ${retailerObject.city}, ${retailerObject.state}
            </h3>
        </div>
    `
}