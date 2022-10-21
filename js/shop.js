// Array with products (objects) added directly with push(). Products in this array are repeated.
// var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// function buy(id) {
//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cartList array

//     const addCartList = products.find(product => product.id === id);
//     cartList.push(addCartList);

//     console.clear();
//     console.log("products: ", products);
//     console.log("addCartList: ", addCartList);
//     console.log("cartList: ", cartList);

//     calculateTotal();
//     generateCart();
//     console.table(cart);
// }

// Exercise 2
function cleanCart() {
    // Emplenar la funció cleanCart(), la qual ha de reinicialitzar la variable cartList.

    // cartList.length = 0;
    // console.clear();
    // console.log("cartList: ", cartList);
    // console.log("products: ", products);

    // Exercise 8
    cart.length = 0;
    totalQuantity = 0;
    document.querySelector("#count_product").innerHTML = totalQuantity;
    printCart();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    // let totalPrice = Number(cartList.reduce((suma, actual) => suma + actual.price, 0).toFixed(2));
    // console.log("totalPrice: ", totalPrice);

    // Exercise 8
    let totalPrice = Number(cart.reduce((suma, actual) => suma + actual.subtotalWithDiscount, 0).toFixed(2));
    console.log("totalPrice: ", totalPrice);
}

// Exercise 4
// function generateCart() {
//     // Using the "cartlist" array that contains all the items in the shopping cart, 
//     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

//     cart = [];

//     for (const itemCartList of cartList) {
//         const addCart = cart.find(itemCart => itemCart.id === itemCartList.id);
//         console.log("addCart: ", addCart);

//         if (!addCart) {
//             itemCartList.quantity = 1;
//             itemCartList.subtotal = itemCartList.price;
//             itemCartList.subtotalWithDiscount = itemCartList.subtotal;
//             cart.push(itemCartList);
//         } else {
//             addCart.quantity++;
//             addCart.subtotal += addCart.price;
//             addCart.subtotalWithDiscount = addCart.subtotal;
//         }
//     }

//     applyPromotionsCart();
// }

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (const itemCart of cart) {
        if ((itemCart.name === 'cooking oil' && itemCart.quantity >= itemCart.offer.number) ||
            (itemCart.name === 'Instant cupcake mixture' && itemCart.quantity >= itemCart.offer.number)) {
            const discount = itemCart.price * (itemCart.offer.percent / 100);
            const priceDiscount = itemCart.price - discount;
            itemCart.subtotalWithDiscount = Number((priceDiscount * itemCart.quantity).toFixed(2));
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    document.querySelector("#cart_list").innerHTML = "";
    document.querySelector("#total_price").innerHTML = 0;
    let totalPrice = 0;

    for (const itemCart of cart) {
        document.querySelector("#cart_list").innerHTML += `
            <tr>
                <th scope="row">${itemCart.name}</th>
                <td>$${itemCart.price}</td>
                <td>${itemCart.quantity}</td>
                <td>$${Number((itemCart.subtotalWithDiscount).toFixed(2))}</td>
                <td><button class="btn btn-outline-dark btn-sm rounded p-0 px-2" onclick="removeFromCart(${itemCart.id})">–</button></td>
                <td><button class="btn btn-outline-dark btn-sm rounded p-0 px-2" onclick="addToCart(${itemCart.id})">+</button></td>
            </tr>`;
        totalPrice += itemCart.subtotalWithDiscount;
    }

    document.querySelector("#total_price").innerHTML = Number(totalPrice.toFixed(2));

    let totalQuantity = cart.reduce((suma, actual) => suma + actual.quantity, 0);
    document.querySelector("#count_product").innerHTML = "";
    document.querySelector("#count_product").innerHTML += totalQuantity;
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    const product = products.find(p => p.id == id)
    const addCart = cart.find(itemCart => itemCart.id === product.id);

    if (!addCart) {
        product.quantity = 1;
        product.subtotal = product.price;
        product.subtotalWithDiscount = product.subtotal;
        cart.push(product);
    } else {
        addCart.quantity++;
        addCart.subtotal += addCart.price;
        addCart.subtotalWithDiscount = addCart.subtotal;
    }

    applyPromotionsCart();
    calculateTotal();
    printCart();

    console.table(cart);
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to remove to cart
    // 2. Remove found product to the cart array

    const removeCart = cart.find(findCart => findCart.id === id);
    let removeCartIndex = cart.indexOf(removeCart);

    if (removeCart) {
        if (removeCart.quantity > 1) {
            removeCart.quantity--;
        } else {
            cart.splice(removeCartIndex, 1);
        }
    }
    removeCart.subtotalWithDiscount = removeCart.quantity * removeCart.price;
    removeCart.subtotal = removeCart.quantity * removeCart.price;

    applyPromotionsCart();
    calculateTotal();
    printCart();

    console.table(cart);
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}