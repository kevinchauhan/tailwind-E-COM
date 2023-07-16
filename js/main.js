import productData from "/json-data/productDetails.json" assert {type: 'json'}

// printing trending products 
const trendinProductList = document.getElementById('trending-product-list')
let trend = ''
productData.forEach((e, i) => {
    if (i < 8) {
        const trendMarkup = `<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-6">
    <div class="product-card border rounded-lg hover:shadow-lg duration-300 ease-in-out">
    <div class="border-b relative">
    <img src=${e.images.main} alt="">
    <div class="card-widget">
    <ul class="bg-white rounded-lg border">
    <li><button onclick="addToCart('${e._id}',this)" class="hover:bg-blue-100 hover:text-white border-b rounded-t-lg text-xl px-2 py-1"><i
    class="ri-shopping-cart-line"></i></button></li>
    <li><button class="hover:bg-blue-100 hover:text-white border-b text-xl px-2 py-1"><i class="ri-eye-line"></i>
    </button></li>
    <li><button class="hover:bg-blue-100 hover:text-white border-b rounded-b-lg text-xl px-2 py-1"><i class="ri-heart-3-line"></i></button></li>
    </ul>
    </div>
        </div>
        <div class="py-5 px-8">
            <h6 class="text-xs font-medium text-gray-700"><a
                    class="hover:text-blue-100 duration-300 ease-in capitalize" href="#">${e.category}</a></h6>
            <h4 class="font-medium"><a class="hover:text-blue-100 duration-300 ease-in capitalize"
                    href="#">${e.name}</a></h4>
                    <p class="text-slate-300">
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <small class="text-gray-600">(${e.reviews.count} Review)</small>
                </p>
                <h4 class="text-blue-100 font-medium">₹ ${e.price}</h4>
                </div>
                </div>
                </div>`
        trend += trendMarkup
    }
});
trendinProductList.innerHTML = trend

// add to cart function
window.addToCart = addToCart
function addToCart(id, _this) {
    // adding in localStorage for cart
    const li = document.createElement('li')
    const markup = `<a href='../pages/cart.html' class="bg-blue-100 text-white border-b rounded-t-lg text-xl px-2 py-1"><i class="ri-shopping-cart-line"></i></a>`
    li.innerHTML = markup
    _this.parentElement.replaceWith(li)
    const cartProducts = (productData.filter((e) => {
        if (e._id === id) {
            e.orderQuantity = 1
            return e
        }
    }))
    const localCartData = JSON.parse(localStorage.getItem('cart_products'))
    if (localCartData) {
        const newData = [...localCartData, ...cartProducts]
        localStorage.setItem('cart_products', JSON.stringify(newData))
    } else {
        localStorage.setItem('cart_products', JSON.stringify(cartProducts))
    }

    cartCounting()
}

// cart counter function
function cartCounting() {
    const cart = document.getElementById('cart-count')
    // getting local storage data
    const localCartData = JSON.parse(localStorage.getItem('cart_products'))
    if (localCartData) {
        let count = 0
        localCartData.forEach((e) => {
            count += e.orderQuantity
        })
        cart.innerText = count
    }
}
window.addEventListener('load', () => {
    cartCounting()
})


