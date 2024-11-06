import toast from "react-hot-toast";

const allFavourite =()=>{
    const allFav = localStorage.getItem('fav')
    if(allFav){
        const fav = JSON.parse(allFav)
        return fav
    }
    else{
        
        return []
    }


}
const allCart =()=>{
    const allCart = localStorage.getItem('cart')
    if(allCart){
        const cart = JSON.parse(allCart)
        return cart
    }
    else{
        
        return []
    }


}

const addFavourite=(product)=>{
   const fav = allFavourite()
   const isExit = fav.find(item => item.product_id == product.product_id)
   if (isExit) {
    toast.error('Already Added!');
} else {
    fav.push(product);
    localStorage.setItem('fav', JSON.stringify(fav));
    toast.success('Successfully Add on Wishlist!');
}
}
const addCart=(product)=>{
    const cart = allCart()
    const isExit = cart.find(item => item.product_id == product.product_id)
    if (isExit) {
     toast.error('Already Added!');
 } else {
     cart.push(product);
     localStorage.setItem('cart', JSON.stringify(cart));
     toast.success('Successfully Add on Cart');
 }
 }

const removeFavourite = product_id => {
    const fav = allFavourite()
    const remaining = fav.filter (product => product.product_id != product_id)
    localStorage.setItem('fav', JSON.stringify(remaining));
    toast.success('Successfully Removed!');

}
const removeCart = product_id => {
    const cart = allCart()
    const remaining = cart.filter(product => product.product_id != product_id)
    localStorage.setItem('cart', JSON.stringify(remaining));
    toast.success('Successfully Removed!');

}
const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    

}
export{addFavourite, allFavourite,allCart,addCart,removeFavourite,removeCart,clearCart }