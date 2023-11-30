import { useEffect, useState } from "react";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";
import axios from "axios";
import Swal from "sweetalert2";


const UpcomingMeals = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('https://hostizen-server-side.vercel.app/upComingMeals')
            .then(res => res.json())
            .then(data => setMenu(data))

    }, [])
    console.log(menu);

    const handlePostUpcoming =async (item)=>{
        console.log(item);

      if(item.likes>=10){
          const content ={
              mealTitle : item.mealTitle,
              mealType:item.mealType,
              rating:item.rating,
              ingredients:item.ingredients,
              mealImage:item.mealImage,
              price:item.price,
              likes:item.likes,
              reviews:item.reviews,
              dateTime:item.dateTime,
              adminName:item.adminName,
              adminEmail:item.adminEmail,
            }
            const menuRes = await axios.post(`https://hostizen-server-side.vercel.app/upComingToMeals`, content);
        if (menuRes.data.insertedId) {                     
        axios.delete(`https://hostizen-server-side.vercel.app/upComingMeals/${item._id}`)
            .then(res=>{
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.mealTitle} is added to .`,
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.reload()
            })
        }
      }else{
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${item.mealTitle} can't be add, see likes count.`,
            showConfirmButton: false,
            timer: 1500
        })
      }
    }
    return (
        <>
        <DashboardSectionTitle heading={'Upcoming Meals'}></DashboardSectionTitle>
        <div className="overflow-x-auto w-[100vh] mx-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Likes</th>
                    <th>Action</th>
                   
                 
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                {
                    menu?.map((item,idx)=>
                        <tr key={item._id}> 
                   
                        <td>
                            {idx+1}
                        </td>
                       
                        <td><div className="flex items-center  gap-3">{item.mealTitle} </div></td>
                     
                       
                       
                        <td >{item.likes} </td>
                       
                     
                        
                        <th  > <button onClick={()=>handlePostUpcoming(item)} className="btn">Serve</button></th>
                       
                    </tr>
                   
                        )
                }
            
              
            </tbody>
          
            

        </table>
    </div>
    </>
    );
};

export default UpcomingMeals;