window.addEventListener('load', cartProduct)

// display cart items
function cartProduct() {
    const wrapper = document.querySelector('#cart-product-list')
    const totalItems = document.querySelector('#total-items')
    const totalAmt = document.querySelector('#total-amt')
    const cartProductsData = JSON.parse(localStorage.getItem('cart_products'))
    // console.log(cartProductsData)
    if (cartProductsData) {
        let temp = ''
        let totalItemsCount = 0
        let netTotal = 0
        cartProductsData.forEach((e) => {
            const markup = ` <div class="flex items-center hover:bg-gray-100 px-6 py-5">
                <div class="flex w-2/5 items-center">
                    <div class="w-20">
                        <img class="h-24" src=${e.images.cart} alt="">
                    </div>
                    <div class="ml-4 flex-grow">
                        <h5 class="font-medium text-sm">${e.name}</h5>
                        <button onclick="removeItem('${e._id}')" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                    </div>
                </div>
                <div class="flex justify-center w-1/5">
                    <button class="hover:text-blue-100 text-gray-600" onclick='update("decr","${e._id}")'>
                        <svg class="fill-current w-3" viewBox="0 0 448 512">
                            <path
                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </button>
                    <input class="mx-2 border text-center w-8" type="text" value="${e.orderQuantity}">
                    <button class="hover:text-blue-100 text-gray-600" onclick='update("incr","${e._id}")'>
                        <svg class="fill-current w-3" viewBox="0 0 448 512">
                            <path
                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </button>
                </div>
                <span id="cart-item-price" class="text-center w-1/5 font-semibold text-sm">${e.price}</span>
                <span id="cart-item-total" class="text-center w-1/5 font-semibold text-sm">${e.price * e.orderQuantity}</span>
            </div>`
            temp += markup
            totalItemsCount += e.orderQuantity
            netTotal += (e.price * e.orderQuantity)
        })

        wrapper.innerHTML = temp
        totalItems.innerText = `Items (${totalItemsCount})`
        totalItems.nextElementSibling.innerText = netTotal
        totalAmt.innerText = netTotal
    }

}


// delete item
function removeItem(id) {
    const cartData = JSON.parse(localStorage.getItem('cart_products'))
    const updatedList = cartData.filter((e) => {
        if (!(e._id === id)) return e
    })
    localStorage.setItem('cart_products', JSON.stringify(updatedList))
    cartProduct()
    cartCounting()
}

// update
function update(args, id) {
    const localCartData = JSON.parse(localStorage.getItem('cart_products'))
    localCartData.forEach((e) => {
        if (e._id === id) {
            if (args === 'incr') {
                e.orderQuantity++
                console.log(e.orderQuantity)
            } else {
                (e.orderQuantity !== 1) ? e.orderQuantity-- : e.orderQuantity = 1
                console.log(e.orderQuantity)
            }
        }
    })
    localStorage.setItem('cart_products',JSON.stringify(localCartData))
    cartProduct()
    cartCounting()
}