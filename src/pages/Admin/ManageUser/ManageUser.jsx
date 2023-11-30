import { useEffect, useState } from "react";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";
import axios from "axios";
import Swal from "sweetalert2";




const ManageUser = () => {
    const [users,setUsers]=useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
axios.get(`https://hostizen-server-side.vercel.app/users?search=${search}`)
.then(res=>{
    setUsers(res.data);    
})
    },[search])


    const handleMakeAdmin = user =>{
       console.log(user);
            axios.patch(`https://hostizen-server-side.vercel.app/createAdmin/${user}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  window.location.reload()
            }
        })
     
    }

    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
    }
    return (
        <>
            <DashboardSectionTitle heading={'Manager User'}></DashboardSectionTitle>
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
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Make Admin</th>
                        <th>Subscription Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                   
                   {
                    users?.map((item,idx)=>
                     <tr key={item._id}> 
                        
                    <td>
                        {idx+1}
                    </td>
                   
                    <td><div className="flex items-center  gap-3">{item.name} </div></td>
                   
                    <td >{item.email} </td>
                  
                    <td  >{item?.role==='admin'?'Admin':
                    <button onClick={()=>handleMakeAdmin(item._id)} className="btn">Make Admin</button>}</td>
                    
                    <th >{item.memberShip} </th>
                    
                    
                   
                </tr>)
                   }
                   
                  
                </tbody>
              
                

            </table>
        </div>
            
        </>
    );
};

export default ManageUser;