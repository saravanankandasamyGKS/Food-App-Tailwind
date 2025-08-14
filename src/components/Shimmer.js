import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container max-w-7xl mx-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-pulse">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="shimmer-card bg-gray-300 rounded-lg h-48"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
