function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then(response => {
        if(!response.ok) {
            throw new Error ("Network response was not ok")
        }
        return response.json();
    })
    .then(data =>{
        data.forEach(product =>{
            console.log(product.fields.name);
        })
    })
    .catch(error => {
        console.error("Fetch error:", error.message);
    });
}

async function fetchProductsAsync(){
try {
    const response = await fetch('https://www.course-api.com/javascript-store-products')
    if (!response.ok) {
        throw new Error ("Failed to fetch products")
    }
    const products = await response.json();
    displayProducts(products);
} catch (error) {
    handleError(error)
}
}
