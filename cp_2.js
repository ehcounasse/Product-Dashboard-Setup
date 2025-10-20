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

function displayProducts(products){
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    products.slice(0,5).forEach(product => {
        const { name, price, image} = product.fields;
        const imgURL = image[0].url;
        const formattedPrice = (price/100).toFixed(2);
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML= `
        <img src="${imgURL}" alt="${name}">
        <h2>${name}</h2>
        <p>$${formattedPrice}</p>
        `;
        container.appendChild(card);
        
    });
}

function handleError(error) {
    console.error(`An error has occured ${error.message}`)
}

fetchProductsThen();
fetchProductsAsync();