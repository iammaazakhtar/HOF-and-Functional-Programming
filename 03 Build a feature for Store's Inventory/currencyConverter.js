/***
 * Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript 
 * program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should 
 * use the map higher-order function to create a new object with the converted prices in Rupees.
 */

let items = [
    {
        name: "macbook pro",
        price: "700 USD"
    },
    {
        name: "iphone 11",
        price: "400 USD"
    },
    {
        name: "t-shirt",
        price: "50 USD"
    },
    {
        name: "earbuds",
        price: "100 USD"
    },
];


items.map((item) => {
    let realprice = parseFloat(item['price'].split(" ")[0]);
    realprice *= 80;
    item['price'] = `${realprice} INR`;
});

console.log(items);