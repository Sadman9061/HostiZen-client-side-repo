// import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";
// import { useForm } from "react-hook-form";
// import { FaUtensils } from "react-icons/fa";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const AddMeals = () => {
//     const { register, handleSubmit, reset } = useForm(); 
//     const {user}=useContext(AuthContext);  
//     const onSubmit = async (data) => {
//         console.log(data)
//         // image upload to imgbb and then get an url
//         const imageFile = { image: data.image[0] }
//         const res = await axios.post(image_hosting_api, imageFile, {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         });
//         // console.log(res.data);
//         if (res.data.success) {              
//                 const date = new Date();
//                 const displayCurrentDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();                              
//             // now send the menu item data to the server with the image url
//             const menuItem = {
//                 mealTitle: data.mealTitle,
//                 mealType: data.category,
//                 rating: data.rating,
//                 ingredients: [data.ingredients],
//                 mealImage: res.data.data.display_url,
//                 price: parseFloat(data.price),
//                 likes:0,
//                 reviews:0,
//                 dateTime:displayCurrentDate,
//                 adminName:user?.displayName,
//                 adminEmail:user?.email,
//             }
//             // 
//             const menuRes = await axios.post('https://hostizen-server-side.vercel.app/meals', menuItem);
//             // console.log(menuRes.data)
//             if(menuRes.data.insertedId){
//                 // show success popup
//                 reset();
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: `${data.mealTitle} is added to the menu.`,
//                     showConfirmButton: false,
//                     timer: 1500
//                   });
//             }
//         }

//     };

//     return (
//         <div className="mx-4 md:mx-8 lg:mx-20 mb-20">
//            <DashboardSectionTitle heading='Add Meals'></DashboardSectionTitle>
//             <div>
//                 <form 
//                 onSubmit={handleSubmit(onSubmit)}
//                 >
//                     <div className="form-control w-full my-6">
//                         <label className="label">
//                             <span className="label-text">Meal Title*</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Meal Title"
//                             {...register('mealTitle', { required: true })}
//                             required
//                             className="input input-bordered w-full" />
//                     </div>
//                     <div className="form-control w-full my-6">
//                         <label className="label">
//                             <span className="label-text">Ingredients*</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Ingredients"
//                             {...register('ingredients', { required: true })}
//                             required
//                             className="input input-bordered w-full" />
//                     </div>
//                     <div className="flex gap-6">
//                         {/* category */}
//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">Category*</span>
//                             </label>
//                             <select defaultValue="default" {...register('category', { required: true })}
//                                 className="select select-bordered w-full">
//                                 <option disabled value="default">Select a category</option>
//                                 <option value="breakfast">Breakfast</option>
//                                 <option value="lunch">Lunch</option>
//                                 <option value="dinner">Dinner</option>
//                             </select>
//                         </div>
//                         {/* price */}
//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">Price*</span>
//                             </label>
//                             <input
//                                 type="number"
//                                 placeholder="Price"
//                                 {...register('price', { required: true })}
//                                 className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control w-full my-6">
//                             <label className="label">
//                                 <span className="label-text">Rating*</span>
//                             </label>
//                             <input
//                                 type="number"
//                                 placeholder="Rating"
//                                 {...register('rating', { required: true })}
//                                 className="input input-bordered w-full" />
//                         </div>

//                     </div>
//                     {/* recipe details */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Recipe Details</span>
//                         </label>
//                         <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
//                     </div>

//                     <div className="form-control w-full my-6">
//                         <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
//                     </div>

//                    <div className="flex gap-4">
//                    <button className="btn ">
//                         Add Meal <FaUtensils ></FaUtensils>
//                     </button>
//                     <button  className="btn ">
//                         Add to upcoming <FaUtensils ></FaUtensils>
//                     </button>
//                    </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddMeals;




import React, { useContext } from "react";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddMeals = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = async (data, addToUpcoming) => {
        const imageFile = { image: data.image[0] };

        try {
            // image upload to imgbb and then get a URL
            const res = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            if (res.data.success) {
                const date = new Date();
                const displayCurrentDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();

                const menuItem = {
                    mealTitle: data.mealTitle,
                    mealType: data.category,
                    rating: data.rating,
                    description: data.description,
                    ingredients: [data.ingredients],
                    mealImage: res.data.data.display_url,
                    price: parseFloat(data.price),
                    likes: 0,
                    reviews: 0,
                    dateTime: displayCurrentDate,
                    adminName: user?.displayName,
                    adminEmail: user?.email,
                };
console.log(menuItem);
                const endpoint = addToUpcoming ?'https://hostizen-server-side.vercel.app/upComingMeals'  : 'https://hostizen-server-side.vercel.app/meals';

                const menuRes = await axios.post(endpoint, menuItem);

                if (menuRes.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.mealTitle} is added to ${addToUpcoming ? 'upcoming' : 'the'} menu.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="mx-4 md:mx-8 lg:mx-20 mb-20">
            <DashboardSectionTitle heading='Add Meals'></DashboardSectionTitle>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit((data) => onSubmit(data, false))(e);
                    }}
                >

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Meal Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Meal Title"
                            {...register('mealTitle', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Ingredients*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ingredients"
                            {...register('ingredients', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Rating*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Rating"
                                {...register('rating', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>


                    {/* ... (other form elements) */}
                    <button type="submit" className="btn">
                        Add Meal <FaUtensils></FaUtensils>
                    </button>
                </form>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit((data) => onSubmit(data, true))(e);
                    }}
                >                 
                    {/* ... (other form elements) */}
                    <button type="submit" className="btn">
                        Add to upcoming <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMeals;
