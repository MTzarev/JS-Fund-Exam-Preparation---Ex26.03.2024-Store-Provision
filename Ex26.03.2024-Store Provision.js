function storeProvision(stock, ordered) {
    for (let i = 0; i < ordered.length; i += 2) {
        let newProduct = ordered[i];
        let qtyToAdd = Number(ordered[i + 1]);
        if (!stock.includes(newProduct)) {
            stock.push(newProduct);
            stock.push(qtyToAdd);
        } else {
            let idx = stock.indexOf(newProduct) + 1;
            stock[idx] = Number(stock[idx]) + qtyToAdd;
        }
    }

    
    let stockObject = {};
    for (let i = 0; i < stock.length; i += 2) {
        stockObject[stock[i]] = stock[i + 1];
    }

    
    for (let [product, quantity] of Object.entries(stockObject)) {
        console.log(`${product} -> ${quantity}`);
    }
}
 
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
               ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);