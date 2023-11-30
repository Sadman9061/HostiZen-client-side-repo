import { useLoaderData } from "react-router-dom";
import MealCard from "./MealCard/MealCard";


const Meal = () => {
    const menu=useLoaderData();
    console.log(menu);

    return (
        <div>
            <MealCard item={menu}></MealCard>
        </div>
    );
};

export default Meal;