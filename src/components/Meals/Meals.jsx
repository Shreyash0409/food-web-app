import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
export default Meals;

//! Not related to this component but important.
//TODO : useState setter function in object and array doesn't automatically merge the previous state with the lastest snapshot of the current state. Where incase of the class state it will automatically merge the previous state snapshot but in useState hook we can do that manually by using the spread operator just by passing the previous state snapshot in the setter function. In general react remember the previous state value while re-rendering the component using useState because useState uses clousures under the hood to remember the previous state snapshot.
