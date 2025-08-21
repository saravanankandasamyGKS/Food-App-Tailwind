import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9226449&lng=77.6174197&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();

      setListOfRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );

      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log("Failed to fetch restaurant data:", error || "Unknown error");
      alert(
        "INSTALL ACCESS CONTROLL ALLOW ORIGIN EXTENSION IN CROME BROWSER TO VIEW RESTAURANTS"
      );
    } finally {
      console.log("Fetch attempt finished.");
    }
  };
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-600 text-xl my-6">
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="bg-green-100 min-h-screen p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between max-w-7xl mx-auto mb-8 gap-4">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-grow border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={() => {
            const filtered = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setFilteredRestaurant(filtered);
          }}
          className="bg-green-500 text-white rounded-lg px-6 py-3 hover:bg-green-600 transition"
        >
          Search
        </button>
        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
          className="bg-gray-300 text-gray-700 rounded-lg px-6 py-3 hover:bg-gray-400 transition"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="hover:scale-105 transform transition"
          >
            {restaurant.info.availability ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Body;
