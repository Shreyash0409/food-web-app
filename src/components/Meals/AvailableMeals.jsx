import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";
import useHttp from "../../CustomHooks/use-http";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const {isLoading, error, httpRequest: fetchMeals} = useHttp()

  useEffect(() => {
    const transformMeals = (mealsData) => {
      const loadedMeals = [];
      for (const key in mealsData) {
        loadedMeals.push({
          id: key,
          name: mealsData[key].name,
          description: mealsData[key].description,
          price: mealsData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    
    fetchMeals(
      {
        url: "https://food-cart-react-default-rtdb.firebaseio.com/meals.json",
      },
      transformMeals
    );
  }, [fetchMeals]);

  if (isLoading) {
    return <p className={classes.mealsLoading}>Loading....</p>;
  }

  if (error) {
    return <p className={classes.mealsError}>{error}</p>;
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
