const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('add to wishlist')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else {
        return []
    }

}

const addToWishlist = (id) => {
    const storedList = getStoredWishList()
    if (storedList.includes(id)) {
        console.log(id, 'already exist')
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('add to wishlist', storedListStr)
    }
}


const getStoredCart = () => {
    const storedCartStr = localStorage.getItem('add to cart')
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr)
        return storedCart
    }
    else {
        return []
    }
}

const addToCartList = (id) =>{
    const storedCart = getStoredCart()
    if(storedCart.includes(id)){
        console.log(id, 'already added')
    }
    else{
        storedCart.push(id)
        const storedCartStr = JSON.stringify(storedCart)
        localStorage.setItem( 'add to cart',storedCartStr)
    }
}




export { addToWishlist, getStoredWishList, getStoredCart, addToCartList}