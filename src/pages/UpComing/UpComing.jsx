import {  useState } from "react";
import MealCard from "../Meals/Meal/MealCard/MealCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";



const UpComing = () => {
    const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('https://hostizen-server-side.vercel.app/upComingMeals')
    //         .then(res => res.json())
    //         .then(data => setMenu(data))

    // }, [])
    const { data} = useQuery({
        queryKey: ['upComingMeals'],
        queryFn: async () => {
        fetch('https://hostizen-server-side.vercel.app/upComingMeals')
            .then(res => res.json())
            .then(data => setMenu(data))   
        }
    })
    
   
    return (
        <div>
            <SectionTitle 
            heading={'Upcoming Meal'}
            subHeading={'vote to get it'}
            ></SectionTitle>
            {
                menu.map(item =><MealCard
                key={item._id} item={item} ></MealCard>)
            }
            
        </div>
    );
};

export default UpComing;