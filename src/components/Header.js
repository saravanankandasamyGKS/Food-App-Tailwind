import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 flex flex-wrap justify-between items-center bg-green-50 p-4 shadow-md">
      <div className="logo-container">
        <img className="w-28 rounded-lg" src={LOGO_URL} alt="logo" />
      </div>
      <nav className="flex flex-wrap items-center space-x-4 text-green-900 font-semibold">
        <span className="hidden sm:inline px-2">
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </span>
        <Link to="/" className="hover:text-green-700">
          Home
        </Link>
        <Link to="/about" className="hover:text-green-700">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-green-700">
          Contact Us
        </Link>
        <Link to="/grocery" className="hover:text-green-700">
          Grocery
        </Link>
        <Link
          to="/cart"
          className="font-bold text-xl hover:text-green-800 flex items-center"
        >
          Cart Items ({cartItems.length})
        </Link>
        <button
          className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-900"
          onClick={() => {
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
          }}
        >
          {btnNameReact}
        </button>
      </nav>
    </header>
  );
};

export default Header;
