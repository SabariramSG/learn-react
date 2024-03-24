import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      console.log(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setRestaurantList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="res-list-container">
        {restaurantList.map((element) => (
          <RestaurantCard
            key={element?.info?.id}
            resName={element?.info?.name}
          />
        ))}
        {/* <RestaurantCard resName="Cafe" />
        <RestaurantCard resName="Bar" /> */}
      </div>
    </div>
  );
};

export default Body;
