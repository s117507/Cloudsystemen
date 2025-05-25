function openSidebar () {
    const sidebar = document.querySelector('.sidebar');
//    sidebar.style.display = "flex";
    sidebar.classList.add('open');
}

function closeSidebar () {
    const sidebar = document.querySelector('.sidebar');
//    sidebar.style.display = "none"
    sidebar.classList.remove('open');
}

function openCart () {
    const cart = document.querySelector('.cart')
    cart.classList.add('open');
}

function closeCart() {
    const cart = document.querySelector('.cart'); 
    cart.classList.remove('open'); 
}


let sidebarButton = document.getElementById('open-sidebar');
let closeSideBarButton = document.getElementById('close-sidebar');
const cartButton = document.querySelector('li:nth-child(5) .button');
let closeCartButton = document.getElementById('close-cart');
let cartButtonSidebar = document.getElementById('open-cart-sidebar');


sidebarButton.addEventListener('click', openSidebar);
closeSideBarButton.addEventListener('click', closeSidebar);
cartButton.addEventListener('click', openCart);
closeCartButton.addEventListener('click', closeCart);
cartButtonSidebar.addEventListener('click', openCart);


document.addEventListener('click', function (event) {
    if (event.target.matches('.wishlist-heart') || event.target.matches('.wishlist-heart .fa-heart')) {
        const heartIcon = event.target.closest('.wishlist-heart').querySelector('.fa-heart');
        
        heartIcon.classList.toggle('selected');
    }
});



// Mijn Lijst

const products = [
    {
        id: 1,
        name: "Inumaki",
        description: "by Laura H. Rubin",
        price: 21.75,
        image: "assets/inumaki.png",
        url: "/inumaki"
    },
    {
        id: 2,
        name: "Choso",
        description: "by Laura H. Rubin",
        price: 25,
        image: "assets/choso.png",
        url: "/choso"
    },
    {
        id: 3,
        name: "Yue",
        description: "by Laura H. Rubin",
        price: 20,
        image: "assets/yue.png",
        url: "/yue"
    },
    {
        id: 4,
        name: "Azula",
        description: "by Laura H. Rubin",
        price: 30,
        image: "assets/IMG_4972.png",
        url: "/azula"
    },
    {
        id: 5,
        name: "Tiana",
        description: "by Laura H. Rubin",
        price: 40,
        image: "assets/tiana.png",
        url: "/tiana"
    },
    {
        id: 6,
        name: "Hinata",
        description: "by Laura H. Rubin",
        price: 40,
        image: "assets/hinata.png",
        url: "/hinata"
    },
    {
        id: 7,
        name: "Cinderella",
        description: "by Laura H. Rubin",
        price: 45,
        image: "assets/cinderella.png",
        url: "/cinderella"
    },
    {
        id: 8,
        name: "Mulan",
        description: "by Laura H. Rubin",
        price: 45,
        image: "assets/mulan.png",
        url: "/mulan"
    },
    {
        id: 9,
        name: "Suki",
        description: "by Laura H. Rubin",
        price: 47.5,
        image: "assets/suki.png",
        url: "/suki"
    },
    {
        id: 10,
        name: "Lawliet",
        description: "by Laura H. Rubin",
        price: 50,
        image: "assets/lawliet.png",
        url: "/lawliet"
    },
    {
        id: 11,
        name: "Ty Lee & Mai",
        description: "by Laura H. Rubin",
        price: 60,
        image: "assets/leemai.png",
        url: "/mai"
    },
    {
        id: 12,
        name: "Katara",
        description: "by Laura H. Rubin",
        price: 50,
        image: "assets/katara.png",
        url: "/katara"
    }

];

document.addEventListener('DOMContentLoaded', () => {
    initProducts();
})

function initProducts() {
  console.log('loading');
  let productContainer = document.getElementById('catalog-container');
  productContainer.innerHTML = null;
  products.forEach(product => {
      let newProduct = document.createElement("article");
      newProduct.classList.add('catalog-content')

      newProduct.innerHTML =
          `<a href="${product.url}.ejs">
           <img src="${product.image}" alt="${product.name}"> 
           </a>
           <article class="product-text">
           <div>
           <h4>${product.name}</h4>
           <p class="artist">${product.description}</p>
           <p class="price">${product.price} $</p>
           </div>
           <div>
           <button class="wishlist-heart">
           <i class="fa-solid fa-heart"></i>
           </button>
           <br>
           <button class="shopping-cart" data-id="${product.id}">
           <i class="fa-solid fa-cart-shopping"></i>
           </button>
           </div>
           </article>
           `;

      productContainer.appendChild(newProduct);
  })
}


let cart = [];


document.addEventListener('click', function (event) {
    if (event.target.matches('.shopping-cart') || event.target.matches('.shopping-cart .fa-cart-shopping')) {
        const button = event.target.closest('.shopping-cart');
        const productId = button.getAttribute('data-id');

        const productIdNumber = parseInt(productId, 10);

        cart.push(productIdNumber);
        console.log(`Product ${productIdNumber} is toegevoegd`);

        const product = products.find(product => product.id === productIdNumber);

        if (product) {
            const existingCartProduct = cart.find(product => product.id === productIdNumber);

            if (existingCartProduct) {
                existingCartProduct.quantity++;
                const cartItemElement = document.querySelector(`.cart-item[data-id="${productIdNumber}"]`);
                const quantityElement = cartItemElement.querySelector('.quantity');
                quantityElement.textContent = `Quantity: ${existingCartProduct.quantity}`;
            } else {

                cart.push({ id: productIdNumber, name: product.name, price: product.price, image: product.image, quantity: 1 });

                let cartSection = document.getElementById('cart-list');
                let cartItem = document.createElement('article');
                cartItem.classList.add('cart-item');
                cartItem.setAttribute('data-id', productIdNumber);
                cartItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                    <h4>${product.name}</h4>
                    <p class="quantity">Quantity: 1</p>
                        <div class="quantity-buttons">
                            <button class="decrease">-</button>
                            <button class="increase">+</button>
                        </div>
                    </div>
                    <p>${product.price} $</p>
                `;
                cartSection.appendChild(cartItem);
            }
            updateSubtotal();
            triggerCartAnimation();
        }
    }

    if (event.target.matches('.increase')) {
        const cartItemElement = event.target.closest('.cart-item');
        const productId = parseInt(cartItemElement.getAttribute('data-id'), 10);
        const cartProduct = cart.find(product => product.id === productId);

        if (cartProduct) {
            cartProduct.quantity++;
            const quantityElement = cartItemElement.querySelector('.quantity');
            quantityElement.textContent = `Quantity: ${cartProduct.quantity}`;
            updateSubtotal();
        }
    }

    if (event.target.matches('.decrease')) {
        const cartItemElement = event.target.closest('.cart-item');
        const productId = parseInt(cartItemElement.getAttribute('data-id'), 10);
        const cartProduct = cart.find(product => product.id === productId);

        if (cartProduct && cartProduct.quantity > 1) {
            cartProduct.quantity--;
            const quantityElement = cartItemElement.querySelector('.quantity');
            quantityElement.textContent = `Quantity: ${cartProduct.quantity}`;
        } else if (cartProduct && cartProduct.quantity === 1) {
            cart = cart.filter(product => product.id !== productId);
            cartItemElement.remove();
        }
        updateSubtotal();
    }
});

function updateSubtotal() {
    let subtotal = 0;

    cart.forEach(item => {
        if (item.price && item.quantity) {
            subtotal += item.price * item.quantity;
        }
    });

    const subtotalElement = document.getElementById('netto-waarde');
    subtotalElement.textContent = `${subtotal.toFixed(2)} $`;

    const tax = subtotal * 0.21;
    const taxElement = document.getElementById('btw-waarde');
    taxElement.textContent = `${tax.toFixed(2)} $`;

    const total = subtotal + tax;
    const totalElement = document.getElementById('grand-total');
    totalElement.textContent = `${total.toFixed(2)} $`;
}

function triggerCartAnimation() {
    const cartButton = document.querySelector('li:nth-child(5) .button');
    cartButton.classList.add('animate');

    cartButton.addEventListener('animationend', () => {
        cartButton.classList.remove('animate');
    }, { once: true });


}

async function fetchKlanten() {
    const url = 'https://randomuser.me/api/?results=10';
    const response = await fetch(url);
    const data = await response.json();

    displayUsers(data.results);
}


function displayUsers(users) {
    const klantenContainer = document.getElementById('klanten-container');
    klantenContainer.innerHTML = '';

    users.forEach(user => {
        let newUser = document.createElement("article");
        newUser.classList.add('klanten');

        newUser.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}'s picture" />
            <h2>${user.name.first} ${user.name.last}</h2>
            <p><strong>Gender:</strong><br> ${user.gender}</p>
            <p><strong>Location:</strong><br> ${user.location.city}, ${user.location.country}</p>     
        `;
        klantenContainer.appendChild(newUser);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchKlanten();
});








