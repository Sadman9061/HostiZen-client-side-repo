import { MdDelete, MdModeEditOutline } from "react-icons/md";
import DashboardSectionTitle from "../../components/DashboardSectionTitle/DashboardSectionTitle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyReviews = () => {
       const [comments,setComments]=useState([]);
      
        const {user}=useContext(AuthContext)
        useEffect(()=>{
    axios.get(`https://hostizen-server-side.vercel.app/reviewComments/${user?.email}`)
    .then(res=>{
        setComments(res.data)        
    })
        },[user])



        console.log(comments);
        const handleDeleteReview = _id => {
            console.log(_id);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
    
    
                    fetch(`https://hostizen-server-side.vercel.app/deleteReviews/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your items has been deleted.',
                                    'success'
                                )
                               window.location.reload()
                            }
                        })
    
                }
            })
        }
      
    return (
        <>
        <DashboardSectionTitle heading={'My Review'}></DashboardSectionTitle>
        <div className="overflow-x-auto w-[100vh] mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Likes</th>
                        <th>Reviews</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>View</th>
                    </tr>
                </thead>
                {
                    comments?.map((item,idx)=>
                    <tbody key={item._id}>
                    
                    {/* row 1 */}
                    <tr > 
                        {/* Numder */}
                        <td>
                            {idx+1}
                        </td>
                        {/* title */}
                        <td><div className="flex items-center  gap-3">{item.mealTitle} </div></td>
                        {/* likes */}
                        <td className="">{item.likes}</td>
                        {/* review */}
                        <td className="" >{item.reviews}</td>
                        {/* edit */}
                        <th ><Link to={`/dashboard/myReviews/${item._id}`}><button ><MdModeEditOutline className="text-lg"></MdModeEditOutline></button></Link></th>
                        {/* Delete */}
                        <th  > <button onClick={()=>handleDeleteReview(item._id)}><MdDelete className="text-lg"></MdDelete></button></th>
                        {/* view */}
                        <th> <Link to={`/meals/${item.mealId}`}> <button className="btn btn-ghost btn-xs border-2 border-green-600 ">details</button></Link> </th>
                    </tr>
                   
                  
                </tbody>
                )
                }
              
                

            </table>
        </div>
    </>
    );
};

export default MyReviews;