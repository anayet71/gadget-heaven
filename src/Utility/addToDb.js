const getStoredWishList = () =>{
    const storedListStr = localStorage.getItem('add to wishlist')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else{
        return []
    }

}

const addToWishlist = (id) =>{
    const storedList = getStoredWishList()
    if(storedList.includes(id)){
        console.log( id , 'already exist')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('add to wishlist' , storedListStr)
    }
}
export {addToWishlist, getStoredWishList}