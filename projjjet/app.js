// script.js
// Exemple de génération dynamique des produits (vous pouvez remplacer cela par des données réelles provenant d'une base de données)
const productsContainer = document.getElementById('products-container');

const products = [
    { name: 'Rouge à Lèvres Rouge', price: 10, image: 'https://i.pinimg.com/564x/8a/06/aa/8a06aa2fcda6c0996a53aabe01d623dc.jpg' },
    { name: 'Rouge à Lèvres Rose', price: 12.5, image: 'https://i.pinimg.com/564x/8b/eb/2b/8beb2b9f52c0d5cc849dac9c85b6adb2.jpg' },
    { name: 'Rouge à Lèvres Nude', price: 8, image: 'https://i.pinimg.com/736x/27/f9/35/27f9353b1f96fc2aad762f731866ae3c.jpg' },
    { name: 'Rouge à Lèvres Nude', price: 15, image: 'https://i.pinimg.com/736x/a2/71/d0/a271d0929a28c46abf5589b94234f5b9.jpg' },
    { name: 'Rouge à Lèvres Nude', price: 11, image: 'https://i.pinimg.com/564x/32/cb/5e/32cb5e271353ec8e32028899a51c2ed3.jpg' },
    { name: 'Rouge à Lèvres Nude', price: 11.2, image: 'https://i.pinimg.com/564x/d8/83/e2/d883e262f8d955df13a3051292a93473.jpg' },
    { name: 'Rouge à Lèvres Nude', price: 6.3, image: 'https://i.pinimg.com/564x/22/aa/41/22aa412a88228d67bd8d398512a107fd.jpg' },
    { name: 'Rouge à Lèvres Nude', price: 2, image: 'https://i.pinimg.com/564x/6e/6b/b6/6e6bb6133c9698318464e81b85e5c733.jpg' },
    { name: 'Rouge à Lèvres Nude', price: 9, image: 'https://i.pinimg.com/564x/55/16/15/5516153c6e1a5422113a2b9321390c0a.jpg' },
    { name: 'Rouge à Lèvres Nude', price: 4, image: 'https://i.pinimg.com/564x/b0/7d/10/b07d104dee3de237b2ead3f30933d50b.jpg' },
];

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    productCard.appendChild(image);

    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productCard.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;
    productCard.appendChild(productPrice);

    productsContainer.appendChild(productCard);
});
