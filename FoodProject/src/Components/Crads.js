import { restaurant_URL } from "../utils/utils";

const Restaurants = (props) => {
  console.log(props.resData,"PROPSDATA");
    const {name,cuisines,avgRating,cloudinaryImageId} = props.resData ;
      return (
       
        <div className="restaurants">
          <div className="restaurant-cards">
            <img className="foodItem-img" src={restaurant_URL+cloudinaryImageId } alt="FoodItem"></img>
            <h4 className="res-name">{name}</h4>
            <h5 className="res-foodlist">{cuisines && cuisines.length > 0 ? cuisines.join(', ') : 'No cuisines available'}</h5>

            <p className="res-rating">{avgRating} rating</p>
          </div>
        </div>
      );
    
    };
    export default Restaurants;