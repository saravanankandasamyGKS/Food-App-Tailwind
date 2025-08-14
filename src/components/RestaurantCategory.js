import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="max-w-4xl mx-auto mb-6 border border-gray-300 rounded-lg bg-white shadow-sm">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer p-4 hover:bg-green-50 transition"
        onClick={setShowIndex}
      >
        <h3 className="text-lg font-semibold text-green-800">
          {data.title} ({data.itemCards.length})
        </h3>
        <span className="text-2xl text-green-600">{showItems ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
