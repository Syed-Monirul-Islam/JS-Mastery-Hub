const products = [
    { id: 1, name: "Gaming Mouse", price: 2500, category: "Electronics", inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 5500, category: "Electronics", inStock: false },
    { id: 3, name: "Cotton T-Shirt", price: 1200, category: "Fashion", inStock: true },
    { id: 4, name: "Running Shoes", price: 4500, category: "Fashion", inStock: true },
    { id: 5, name: "Bluetooth Headphone", price: 3500, category: "Electronics", inStock: true }
];

const availableElectronics = products.filter(item => item.category === "Electronics" && item.inStock);

const discountedProducts = availableElectronics.map(item => {
    return {
        ...item,
        discountPrice: item.price * 0.85
    };
});

const totalInventoryValue = products.reduce((total, item) => total + item.price, 0);

document.getElementById('total-value').innerText = "$" + totalInventoryValue;

const productList = document.getElementById('product-list');
discountedProducts.forEach(product => {
    const row = `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$${product.price}</td>
            <td class="discount-price">$${product.discountPrice.toFixed(2)}</td>
        </tr>
    `;
    productList.innerHTML += row;
});