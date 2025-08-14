import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y divide-gray-300">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center p-4 hover:bg-green-50 transition"
        >
          <div className="flex-grow">
            <h4 className="font-semibold text-green-900">
              {item.card.info.name}
            </h4>
            <p className="text-sm text-gray-700 mb-1">
              ₹
              {(item.card.info.price
                ? item.card.info.price
                : item.card.info.defaultPrice) / 100}
            </p>
            <p className="text-xs text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="flex flex-col items-center w-32 ml-4">
            <button
              onClick={() => handleAddItems(item)}
              className="mb-2 px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Add +
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
