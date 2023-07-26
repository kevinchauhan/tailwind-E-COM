// cart counter function
export function cartCounting(id) {
    const cart = document.getElementById('cart-count')
    // getting local storage data
    const localUserData = JSON.parse(localStorage.getItem('users_data'))
    localUserData.some((e) => {
        if (e.personalData.id === id) {
            if (e.cart) {
                let count = 0
                e.cart.forEach((e) => {
                    count += e.orderQuantity
                })

                // for total quantity
                // cart.innerText = count

                // for only total products
                cart.innerText = e.cart.length
            }
        }
    })
}
