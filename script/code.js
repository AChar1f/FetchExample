function fetchData() {
    let container = document.querySelector('[data-container]')
    fetch("https://achar1f.github.io/onlineStore/data/")
    .then( (res) => {
        return res.json()
        //return res.blob
    })
    .then( (data) => {
       // console.log(data)
       // console.table(data.results)
       data.results.forEach((product) => {
        container.innerHTML += `
        <div class='card'>
            <h2>
                ${product.productName}
            </h2>
            <h4>
                ${product.category}
            </h4>
            <img src='${product.img_url}' loading='lazy'>
            <p>
                <span>
                    Price: R${product.amount}        
                </span>
            </p>
            <p>
                <span>
                    Description: ${product.description}        
                </span>
            </p>
            <div class='button-wrapper'>
            <button type='button'>Add to cart</button>
            </div>
        </div>
        `
       });
        
    })
    .catch( (err) => {
        console.log(err)
    })
}
fetchData()

//In the above code, we set the promise to return the json file from the specified link.
// Following this we had to the data from the json file display in console. This depends on the first promise being resolved.
//.blob is to return image data
// += ` ` appends the elements whereby we can do DOM manipulation(manipulate html elements via JS).
// In Dom manipulation we add the elements we want to display by making use of the relevant html elements.

