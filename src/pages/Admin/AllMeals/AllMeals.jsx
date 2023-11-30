import { Link } from "react-router-dom";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";
import useMenu from "../../../hooks/useMenu";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";


const AllMeals = () => {
    const [menu] = useMenu();
    console.log(menu);
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`https://hostizen-server-side.vercel.app/meals/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.mealTitle} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload()
                }
            }
        });
    }
    return (
        <>
            <DashboardSectionTitle heading={'All Meals'}></DashboardSectionTitle>
            <div className="overflow-x-auto w-[100vh] mx-auto h-[80vh] mb-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Likes</th>
                            <th>Reviews</th>
                            <th>Distributor</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>View</th>


                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            menu?.map((item, idx) =>
                                <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>{item.mealTitle}</td>
                                    <td >{item.likes}</td>
                                    <td >{item.reviews} </td>
                                    <td >{item.adminName} </td>
                                    <td >{item.adminEmail} </td>                                   
                                    <th >
                                        <Link to={`/dashboard/admin/updateMeal/${item._id}`}>
                                            <button ><MdModeEditOutline className="text-lg"></MdModeEditOutline></button>
                                        </Link>
                                    </th>
                                    <th  > <button onClick={() => handleDeleteItem(item)} ><MdDelete className="text-lg"></MdDelete></button></th>
                                    {/* view */}
                                    <th> <Link to={`/meals/${item._id}`}> <button className="btn btn-ghost btn-xs border-2 border-green-600 ">details</button></Link> </th>
                                </tr>
                            )
                        }


                    </tbody>



                </table>
            </div>
        </>
    );
};

export default AllMeals;