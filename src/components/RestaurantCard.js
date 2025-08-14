import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    resData?.info;

  return (
    <div
      className="w-64 h-96 bg-gradient-to-br from-green-200 to-green-100
                 rounded-2xl shadow-lg p-5
                 hover:shadow-2xl transform hover:scale-105
                 transition duration-300 cursor-pointer
                 flex flex-col"
    >
      <img
        className="rounded-xl mb-4 h-40 w-full object-cover shadow-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-extrabold text-lg mb-2 truncate text-yellow-900">
        {name}
      </h3>
      <p className="text-sm text-yellow-800 mb-5 flex-grow line-clamp-3">
        {cuisines.join(", ")}
      </p>
      <div className="flex justify-between text-sm font-semibold text-yellow-900">
        <span>⭐ {avgRating}</span>
        <span>{costForTwo}</span>
        <span>{sla?.slaString}</span>
      </div>
    </div>
  );
};

// HOC for promoted label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative w-64 h-96">
      <span className="absolute top-3 left-3 bg-yellow-900 text-yellow-100 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
        Promoted
      </span>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
