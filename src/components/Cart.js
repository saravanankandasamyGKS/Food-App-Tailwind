import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItems = () => {
    dispatch(removeItems());
  };

  return (
    <div className="text-center m-4 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Cart</h1>
      <button
        className="p-3 mb-6 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <button
        className="p-3 mb-6 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        onClick={handleRemoveItems}
      >
        Remove Items
      </button>
      {cartItems.length === 0 ? (
        <h2 className="text-lg text-gray-700">
          Cart is empty. Add items to the cart!
        </h2>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
