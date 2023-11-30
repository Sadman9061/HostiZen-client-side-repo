import { useEffect, useState } from "react";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";


const AllReviews = () => {
    const [commentData, setCommentData] = useState([]);
    const [likes, setLikes] = useState();
    const [sortOrder, setSortOrder] = useState("asc");
    useEffect(() => {
        axios.get(`https://hostizen-server-side.vercel.app/comments?sortLikes=${likes ? 'asc' : 'desc'}`)
            .then(res => {
                setCommentData(res.data);
            })
    }, [likes])



    const handleDeleteComment = (item) => {
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
                const res = await axios.delete(`https://hostizen-server-side.vercel.app/deleteReviews/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.mealTitle}'s comment has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload()
                }
            }
        });
    }

    const handleSortClick = () => {
        const sortedData = [...commentData].sort((a, b) => {
            const order = sortOrder === "asc" ? 1 : -1;
            return order * (a.reviews - b.reviews);
        });

        setCommentData(sortedData);
        // Toggle the sort order
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <>
            <DashboardSectionTitle heading={`All Reviews : ${commentData?.length}`}></DashboardSectionTitle>
            <div className="flex items-center justify-center gap-4">
                <button
                    className="form-control block  select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-green-500 border-none hover:bg-green-600 text-white   normal-case"
                    onClick={() => setLikes(!likes)}
                >
                    {likes ? 'Likes ▼' : 'Likes ▼'}
                </button>
                <button
                    className="form-control block  select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-green-500 border-none hover:bg-green-600 text-white   normal-case"
                    onClick={handleSortClick}
                >
                    Reviews{" "}
                    {sortOrder === "asc" ? (
                        <span> ▼</span>
                    ) : (
                        <span> ▼</span>
                    )}
                </button>
            </div>
            <div className="overflow-x-auto w-[100vh] mx-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Likes</th>
                            <th>Reviews</th>
                            <th>Delete</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            commentData?.map((item, idx) =>
                                <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>{item.mealTitle} </td>
                                    <td >{item.likes} </td>
                                    <td >{item.reviews} </td>
                                    <th  > <button onClick={() => handleDeleteComment(item)} ><MdDelete className="text-lg"></MdDelete></button></th>
                                    <th> <Link to={`/meals/${item.mealId}`}> <button className="btn btn-ghost btn-xs border-2 border-green-600 ">details</button></Link> </th>

                                </tr>
                            )
                        }

                    </tbody>



                </table>
            </div>
        </>
    );
};

export default AllReviews;