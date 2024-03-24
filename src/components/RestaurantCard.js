const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <h2>{props.resName}</h2>
    </div>
  );
};

export default RestaurantCard;
