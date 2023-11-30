import { useContext, useEffect, useState } from "react";
import DashboardSectionTitle from "../../components/DashboardSectionTitle/DashboardSectionTitle";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";


const RequestedMeals = () => {
    const [requestedMeals,setRequestedMeals]=useState([]);
  
    const {user}=useContext(AuthContext)
    useEffect(()=>{
axios.get(`https://hostizen-server-side.vercel.app/requestedMeals/${user?.email}`)
.then(res=>{
    setRequestedMeals(res.data)
})
    },[user])
    console.log(requestedMeals);
    // useEffect(() => {
    //     axios.get(`https://hostizen-server-side.vercel.app/comments`)
    //         .then(res => {
    //             const comments = [];
    // // console.log(res.data);
    //             res?.data?.forEach(item => {
    //                 requestedMeals?.mealsArray.forEach(ff => {
    //                     if (item.mealId === ff._id) {
    //                         comments.push(item);
    //                     }
    //                 });
    //             });
    
    //             setComment(comments);
    //         });
    // }, [requestedMeals?.mealsArray]);
    // console.log(comment);
    

    return (
        <>
            <DashboardSectionTitle heading={'Requested Meals'}></DashboardSectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Likes</th>
                            <th>Reviews</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            requestedMeals?.map((item,idx)=>
                                <tr key={idx}> 
                                
                                <td>
                                    {idx+1}
                                </td>                                
                                <td><div className="flex items-center  gap-3">{item.mealTitle} </div></td>                                
                                <td >{item.likes}</td>                                
                                <td  >{item.reviews}</td>                                                                
                                <td  >{item.status}</td>                                                                
                                <th> <button className="btn btn-ghost btn-xs border-green-500">X</button></th>
                            </tr>)
                        }
                       
                       
                      
                    </tbody>
                  
                    

                </table>
            </div>
        </>
    );
};

export default RequestedMeals;