import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { FaUtensils } from "react-icons/fa";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMeal = () => {
    const {mealTitle,mealType, rating, ingredients,price,description,_id } = useLoaderData()       
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = async (data) => {
        // console.log(data);
        const imageFile = { image: data.image[0] };

        try {
            // image upload to imgbb and then get a URL
            const res = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            if (res.data.success) {

                const menuItem = {
                    mealTitle: data.mealTitle,
                    mealType: data.category,
                    rating: data.rating,
                    description: data.description,
                    ingredients: [data.ingredients],
                    mealImage: res.data.data.display_url,
                    price: parseFloat(data.price),  
                    adminName: user?.displayName,
                    adminEmail: user?.email,
                };
                console.log(menuItem);
            
                const menuRes = await axios.patch(`https://hostizen-server-side.vercel.app/updateMeals/${_id}`, menuItem);
                console.log(menuRes.data);

                if (menuRes.data.modifiedCount>0) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.mealTitle} is added to .`,
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
            <DashboardSectionTitle heading={`${mealTitle}`} ></DashboardSectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Meal Title*</span>
                        </label>
                        <input
                        defaultValue={mealTitle}
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
                        defaultValue={ingredients}
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
                            <select defaultValue={mealType} {...register('category', { required: true })}
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
                            defaultValue={price} 
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
                            defaultValue={rating} 
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
                        <textarea defaultValue={description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input  {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>


                    {/* ... (other form elements) */}
                    <button type="submit" className="btn">
                        Update Meal <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMeal;