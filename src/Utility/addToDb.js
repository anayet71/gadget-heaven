import { toast } from "react-toastify";

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
        toast('Already added to wishlist')
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('add to wishlist', storedListStr)
        toast('Added to wishlist')
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
        toast('Already added to cart')

    }
    else{
        storedCart.push(id)
        const storedCartStr = JSON.stringify(storedCart)
        localStorage.setItem( 'add to cart',storedCartStr)
        toast('Added to Cart')
    }
}




export { addToWishlist, getStoredWishList, getStoredCart, addToCartList}