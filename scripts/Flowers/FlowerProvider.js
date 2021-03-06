let flowers = []

export const useFlowers = () => {
    return flowers.slice()
}

export const getFlowers = () => {
    return fetch ("http://localhost:8000/flowers")
        .then(response => response.json())
        .then(parsedFlowers => {
            flowers = parsedFlowers
        })
}