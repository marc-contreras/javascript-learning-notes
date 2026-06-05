// map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const mapPrices = prices.map( price => price / 2);
// console.log(mapPrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
];

const saledProducts = products.map(product => {
    if(product.price > 30){
        // edits both arrays products and saledProducts
        // product.price = product.price / 2; 
        // return product;  
        // products array doesn't change
        return {name: product.name, price: product.price / 2}
    } else {
        return product;
    }
});

console.log(products, 'products');
console.log(saledProducts, 'saledProducts');