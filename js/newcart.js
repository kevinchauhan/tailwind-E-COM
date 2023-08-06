window.addEventListener('load', cartProduct)

// display cart items
function cartProduct() {
    // local datas
    const currUser = JSON.parse(localStorage.getItem('curr_user'))
    const localUserData = JSON.parse(localStorage.getItem('users_data'))

    const wrapper = document.querySelector('#cart-product-list')
    const totalItems = document.querySelector('#total-items')
    const totalAmt = document.querySelector('#total-amt')
    localUserData.some(e => {
        if (e.personalData.id === currUser.personalData.id) {
            if (e.cart) {
                let temp = ''
                let totalItemsCount = 0
                let netTotal = 0
                e.cart.forEach((e) => {
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
                            <span class="mx-2 border text-center w-8">${e.orderQuantity}</span>
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
    })

    cartCounting(currUser.personalData.id)
}

// delete item or delete all
function removeItem(id) {
    // local datas
    const currUser = JSON.parse(localStorage.getItem('curr_user'))
    const localUserData = JSON.parse(localStorage.getItem('users_data'))

    localUserData.some((e) => {
        if (e.personalData.id === currUser.personalData.id) {
            if(id){
                // removing single item
                const updatedList = e.cart.filter((cart) => {
                    if (!(cart._id === id)) return cart
                })
                e.cart = updatedList
            } else{
                // all cart clear
                e.cart = []
            }
        }
    })
    localStorage.setItem('users_data', JSON.stringify(localUserData))
    cartProduct()
    cartCounting(currUser.personalData.id)
}

// update
function update(args, id) {
    // local datas
    const currUser = JSON.parse(localStorage.getItem('curr_user'))
    const localUserData = JSON.parse(localStorage.getItem('users_data'))

    // const localCartData = JSON.parse(localStorage.getItem('cart_products'))
    localUserData.some(e => {

        if (e.personalData.id === currUser.personalData.id) {

            e.cart.forEach((cart) => {
                if (cart._id === id) {
                    if (args === 'incr') {
                        cart.orderQuantity++
                    } else {
                        (cart.orderQuantity !== 1) ? cart.orderQuantity-- : cart.orderQuantity = 1
                    }
                }
                
            })
        }
        localStorage.setItem('users_data', JSON.stringify(localUserData))
    })
    cartProduct()
    cartCounting(currUser.personalData.id)
}