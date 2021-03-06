let retailers = []

export const useRetailers = () => {
    return retailers.slice()
}

export const getRetailers = () => {
    return fetch ("http://localhost:8000/retailers")
        .then(response => response.json())
        .then(parsedRetailers => {
            retailers = parsedRetailers
        })
}