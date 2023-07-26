import productData from "../json-data/productDetails.json" assert {type: 'json'}
import { cartCounting } from "./script.js";
window.cartCounting = cartCounting
window.loadtrend = loadtrend
window.loadProducts = loadProducts


// ---------------------- home page start -------------------------------------------->
// printing trending products 
function loadtrend() {
    const trendinProductList = document.getElementById('trending-product-list')
    let trend = ''
    productData.forEach((e, i) => {
        if (i < 8) {
            const trendMarkup =
                `<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-6">
                <div class="product-card border rounded-lg hover:shadow-lg duration-300 ease-in-out">
                <div class="border-b relative">
                <img src=${e.images.cart} alt="">
                <div class="card-widget">
                    <ul class="bg-white rounded-lg border">
                        <li><button onclick="addToCart('${e._id}')" class="hover:bg-blue-100 hover:text-white border-b rounded-t-lg text-xl px-2 py-1"><i
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
}
// ---------------------- home page end -------------------------------------------->


// ---------------------- shop-list page start ---------------------------------->
function loadProducts(filter = null,price=99999) {
    const shopList = document.getElementById('shop-list')
    let trend = ''
    productData.forEach((e, i) => {
        if (!filter) {
            const trendMarkup =
                    ` <div class="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
            <div class="product-card">
                <div class="bg-slate-100 relative">
                    <img src=${e.images.cart} alt="">
                    <div class="card-widget">
                        <ul class="bg-white rounded-lg border">
                        <li><button onclick="addToCart('${e._id}')" class="hover:bg-blue-100 hover:text-white border-b rounded-t-lg text-xl px-2 py-1"><i
                        class="ri-shopping-cart-line"></i></button></li>
                        <li><button class="hover:bg-blue-100 hover:text-white border-b text-xl px-2 py-1"><i class="ri-eye-line"></i>
                        </button></li>
                        <li><button class="hover:bg-blue-100 hover:text-white border-b rounded-b-lg text-xl px-2 py-1"><i class="ri-heart-3-line"></i></button></li>
                        </ul>
                    </div>
                </div>
                <div class="py-5">
                    <h6 class="text-sm text-gray-700"><a
                            class="hover:text-blue-100 duration-300 ease-in capitalize" href="#">${e.category}</a></h6>
                    <h4 class="text-xl"><a class="hover:text-blue-100 duration-300 ease-in capitalize"
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
        } else {
            if (filter === e.category && e.price <= price) {
                const trendMarkup =
                    `<div class="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
            <div class="product-card">
                <div class="bg-slate-100 relative">
                    <img src=${e.images.cart} alt="">
                    <div class="card-widget">
                        <ul class="bg-white rounded-lg border">
                        <li><button onclick="addToCart('${e._id}')" class="hover:bg-blue-100 hover:text-white border-b rounded-t-lg text-xl px-2 py-1"><i
                        class="ri-shopping-cart-line"></i></button></li>
                        <li><button class="hover:bg-blue-100 hover:text-white border-b text-xl px-2 py-1"><i class="ri-eye-line"></i>
                        </button></li>
                        <li><button class="hover:bg-blue-100 hover:text-white border-b rounded-b-lg text-xl px-2 py-1"><i class="ri-heart-3-line"></i></button></li>
                        </ul>
                    </div>
                </div>
                <div class="py-5">
                    <h6 class="text-sm text-gray-700"><a
                            class="hover:text-blue-100 duration-300 ease-in capitalize" href="#">${e.category}</a></h6>
                    <h4 class="text-xl"><a class="hover:text-blue-100 duration-300 ease-in capitalize"
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
        }
    })
    shopList.innerHTML = trend
}
// ---------------------- shop-list page end ---------------------------------->


// add to cart function
window.addToCart = addToCart
function addToCart(id) {
    const localUserData = JSON.parse(localStorage.getItem('users_data'))
    const currLoggedIn = JSON.parse(localStorage.getItem('curr_user'))

    const cartProducts = (productData.filter((prod) => {
        if (prod._id === id) {
            prod.orderQuantity = 1
            return prod
        }
    }))

    localUserData.some((currUser) => {
        if (currUser.personalData.id === currLoggedIn.personalData.id) {
            if (currUser.cart) {
                const checkCart = currUser.cart.some((currCartProd) => {
                    if (currCartProd._id === cartProducts[0]._id) {
                        currCartProd.orderQuantity++
                        return true
                    }
                })
                if (!checkCart) {
                    currUser.cart = [...currUser.cart, ...cartProducts]
                }
            } else {
                currUser.cart = [...cartProducts]
            }
            localStorage.setItem('users_data', JSON.stringify(localUserData))
        }
    })
    cartCounting(currLoggedIn.personalData.id)
}


