import { useEffect, useState } from "react";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";
import axios from "axios";
import Swal from "sweetalert2";


const ServeMeals = () => {
    const [serveData,setServeData]=useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
axios.get(`https://hostizen-server-side.vercel.app/requestedMeals?search=${search}`)
.then(res=>{
    setServeData(res.data);
})
    },[search])
    const handleServe= (item)=>{
        console.log(item.status);
       if(item.status ==='pending'){
         axios.patch(`https://hostizen-server-side.vercel.app/updateStatus/${item._id}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount>0) {                
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${item.mealTitle} has been served`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        window.location.reload()
                    }
                })
       }
       else{
        Swal.fire({
            title: 'Oopps!',
            text: 'Already delivered',
            icon: 'error',
            confirmButtonText: 'Got it!'
        })
       }
    }
    
    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
    }
    return (
        <>
            <DashboardSectionTitle heading={`Serve Meals : ${serveData.length}`}></DashboardSectionTitle>
            <form onSubmit={handleSearch} className="flex items-center justify-center mb-10">
                    <input type="text" name="search" className="input text-black input-bordered  w-full max-w-sm rounded-l-lg rounded-r-none" />
                    <input type="submit" value="Search" className="form-control block w-1/4 select-none  py-3.5 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-gradient-to-l from-[#8ABB6A] to-[#8ABB6A] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-l-none  text-white   normal-case rounded-r-lg"/>
                </form>
            <div className="overflow-x-auto w-[100vh] mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                     
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        serveData?.map((item,idx)=>
                        <tr key={item._id}> 
                       
                        <td>
                            {idx+1}
                        </td>
                       
                        <td><div className="flex items-center  gap-3">{item.mealTitle} </div></td>
                     
                        <td >{item.email} </td>
                       
                        <td > {item.name} </td>
                       
                        <th >{item.status} </th>
                        
                        <th  > <button onClick={()=>handleServe(item)} className="btn">Serve</button></th>
                       
                    </tr>)
                    }
                 
                   
                  
                </tbody>
              
                

            </table>
        </div>
        </>
    );
};

export default ServeMeals;