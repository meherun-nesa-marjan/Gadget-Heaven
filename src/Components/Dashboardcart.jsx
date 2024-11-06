import React, { useEffect, useState } from 'react';
import { allCart, removeCart, clearCart } from "../Utils";
import Dashcard from './Dashcard';
import toast from "react-hot-toast";

const Dashboardcart = () => {
    const [product, setProduts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const cart = allCart();
        setProduts(cart);
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total.toFixed(3));
    }, []);

    const handleRemoveCart = product_id => {
        removeCart(product_id);
        const updatedCart = allCart();
        setProduts(updatedCart);
        const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total.toFixed(3));
    };
    const sortByPrice = () => {
        const sortedProducts = [...product].sort((a, b) => b.price - a.price);
        setProduts(sortedProducts);
       
    };

    const handlePurchase = () => {
        
        if (product.length > 0) {
            setShowModal(true);
        }
    };

    const confirmPurchase = () => {
        clearCart();
        setProduts([]);
        setTotalPrice(0);
        setShowModal(false);
        toast.success('Purchase successful! Thank you for your order.');
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="my-8 mx-16 flex justify-between">
                <p className="text-xl font-semibold">Cart</p>
                <div className="flex gap-6">
                    <div className="my-3">
                        <h2 className="text-xl">Total cost: {totalPrice} k</h2>
                    </div>
                    <div>
                        <button onClick={sortByPrice} className="rounded-full font-semibold py-3 px-10 text-white bg-[#9538E2]">
                            Sort By Price
                        </button>
                        <button 
                            onClick={handlePurchase} 
                            className="rounded-full ml-4 font-semibold py-3 px-10 text-white bg-[#9538E2]"
                        >
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
          
           {product.length > 0 ? (
                product.map(product => (
                    <Dashcard 
                        handleRemoveCart={handleRemoveCart}
                        key={product.product_id} 
                        product={product} 
                    />
                ))
            ) : (
                <p className="text-3xl text-gray-500">No data available</p>
            )}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4">Confirm Purchase</h2>
                        <p className="mb-4">Are you sure you want to complete the purchase?</p>
                        <div className="flex justify-end gap-4">
                            <button 
                                onClick={closeModal}
                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={confirmPurchase}
                                className="px-4 py-2 rounded text-white bg-[#9538E2] hover:bg-[#7a2ab5]"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboardcart;
