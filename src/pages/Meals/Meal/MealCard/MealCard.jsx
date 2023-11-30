import { useContext, useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


const MealCard = ({ item }) => {
    const { mealImage, adminName, description, reviews, rating, dateTime, ingredients, price, mealTitle, mealType, likes, _id } = item
    const { user } = useContext(AuthContext)
    const [click, setClick] = useState(false);
    const location = useLocation();
    const checkLocation = location.pathname.split('/')[1]
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComment] = useState([])


    useEffect(() => {
        axios.get(`https://hostizen-server-side.vercel.app/comments/${_id}`)
            .then(res => {
                setComment(res.data)
            })
    }, [_id])



    const handlelikes = () => {
        if (user) {
            const like = {
                likes: likes
            }
            console.log(like);
            axios.patch(`https://hostizen-server-side.vercel.app/meals/${_id}`, like)
                .then(res => {
                    if (res.data.message === 'Application successful') {
                       
                        setIsLiked(true)
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Liked successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        })


                       window.location.reload() 
                    }
                })
        } else {
            Swal.fire({
                title: 'Oopps!',
                text: ' Please Login First',
                icon: 'error',
                confirmButtonText: 'Got it!'
            })
        }

    }

    const handleUpcomingLikes = () => {
        if (user) {
            const content = {
                likes: likes,
                email: user?.email
            }
            console.log(content);
            axios.post(`https://hostizen-server-side.vercel.app/upComingMeals/${_id}`, content)
                .then(res => {
                    if (res.data.message === 'Like successful') {
                        Swal.fire({
                            title: 'Success!',
                            text: '  Successfully',
                            icon: 'success',
                            confirmButtonText: 'okay',
                        })
                        window.location.reload()
                    } else if (res.data.message === 'Already liked') {
                        Swal.fire({
                            title: 'Oopps!',
                            text: ' Already Liked',
                            icon: 'error',
                            confirmButtonText: 'Got it!'
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Oopps!',
                text: ' Please Login First',
                icon: 'error',
                confirmButtonText: 'Got it!'
            })
        }

    }



    const handleComment = (e) => {
        e.preventDefault();
        if (user) {

            const form = event.target;

            const comment = form.comment.value;
            const mealId = _id;
            const name = user?.displayName;
            const email = user?.email;
            const photo = user?.photoURL
            // const mealTitle= mealTitle
            // const likes=likes
            const reviews=comments.length+1

            const commentData = { comment, mealId, name, email, photo,likes,mealTitle,reviews }
            console.log(commentData);

            axios.post('https://hostizen-server-side.vercel.app/comments', commentData)
                .then(res => {
                    if (res.data.insertedId) {                       
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `You have commented`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    window.location.reload()
                })
        } else {
            Swal.fire({
                title: 'Oopps!',
                text: ' Please Login First',
                icon: 'error',
                confirmButtonText: 'Got it!'
            })
        }

    }





    const requestedMeals = () => {
        if (user) {
            const meal = {
                email: user?.email,
                name: user?.displayName,
                likes: likes,
                reviews: comments.length,
                mealTitle: mealTitle,
                status: 'pending',
            }
            console.log(meal);
            axios.post(`https://hostizen-server-side.vercel.app/requestedMeals`, meal)
                .then(res => {
                    console.log(res.data);
                    if (res?.data?.insertedId) {

                        Swal.fire({
                            title: 'Success!',
                            text: '  Successfully',
                            icon: 'success',
                            confirmButtonText: 'okay',
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Oopps!',
                text: ' Please Login First',
                icon: 'error',
                confirmButtonText: 'Got it!'
            })
        }
    }

    return (
        <div className="mx-4 md:mx-16 lg:mx-32 py-32 space-y-20">
            <h1 className=" mb-20  text-3xl md:text-4xl   font-extrabold underline decoration-[#7dc44e]  italic bg-gradient-to-l from-[#7dc44e] to-[#88d455] text-center  bg-clip-text text-transparent  ">{mealTitle}</h1>
            <div className="card lg:card-side bg-base-100 ">
                <figure><img className="w-3/4 rounded-xl drop-shadow-2xl shadow-2xl" src={mealImage} alt="Album" /></figure>
                <div className="card-body font-bold">
                    <h2 className="card-title italic">"{adminName}"</h2>
                    <p className="card-title">${price}</p>
                    <p>● Created : {dateTime}</p>
                    <p>
                        ● Ingredients :
                        <div className="pl-4">
                            {
                                ingredients?.map((item, idx) =>
                                    <p key={idx}>
                                        <h1 >{idx + 1}. {item}</h1>
                                    </p>)
                            }
                        </div>
                    </p>
                    <p>● Time : {mealType}</p>
                    <p>● Rating : {rating}</p>
                    {/* <p>● Reviews : {reviews}</p> */}
                    <p>{description}</p>
                    <div className="flex justify-between gap-4 items-center">
                        {
                            checkLocation === 'upComingMeals' ?
                                <>
                                    {likes}
                                    <button onClick={handleUpcomingLikes} className="btn btn-outline btn-circle shadow-2xl drop-shadow-2xl"><BiSolidLike className="text-2xl"></BiSolidLike></button>
                                </>
                                :
                                <>
                                    {likes}
                                    <button disabled={isLiked} onClick={handlelikes} className="btn btn-outline btn-circle shadow-2xl drop-shadow-2xl"><BiSolidLike className="text-2xl"></BiSolidLike></button>
                                </>
                        }
                        {
                            checkLocation === 'upComingMeals' ? <button disabled className="form-control block  btn w-1/2 select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   drop-shadow-lg shadow-2xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  bg-green-500 border-none hover:bg-green-600 text-white  normal-case">Order</button>
                                :
                                <button onClick={requestedMeals} className="form-control block  btn w-1/2 select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   drop-shadow-lg shadow-2xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  bg-green-500 border-none hover:bg-green-600 text-white   normal-case">Order</button>

                        }

                    </div>
                </div>
            </div>
            {
                checkLocation === 'upComingMeals' ? '' :
                    <div>
                        <form onSubmit={handleComment}>
                            <h3 className="mb-4 text-lg font-semibold leading-none text-gray-900 dark:text-white py-4">{comments.length} Comments </h3>

                            <div className="flex gap-4 items-end justify-center w-full ">
                                <div className="chat-image avatar">
                                    <div className="w-12 rounded-full">
                                        {
                                            user?.email ? <img src={`${user?.photoURL}`} />
                                                :
                                                <img title="Profile" className=" rounded-full  border-[#8ABB6A] border-2" src='https://web.programming-hero.com/static/media/profileImage.934e5b10.png' alt="" />
                                        }
                                    </div>
                                </div>
                                <label
                                    className="relative block overflow-hidden w-full border-b border-black  bg-transparent pt-3 focus-within:border-blue-600">
                                    <input onClick={() => setClick(true)}
                                        type="text"
                                        name='comment'
                                        placeholder="text"
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                                    <span
                                        className="absolute start-0 top-2 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2  peer-focus:text-xs">
                                        Add a comment
                                    </span>
                                </label>
                            </div>
                            <div className="flex justify-end gap-4 mt-2">
                                {
                                    click &&
                                    <>
                                        <button onClick={() => setClick(false)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Cancel
                                        </button>
                                        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            value={'Comment'}
                                        />
                                    </>
                                }
                            </div>
                        </form>
                        {
                            comments?.map(item =>
                                <div className=" space-y-1 mt-8" key={item._id}>
                                    <div className="flex gap-4">
                                        <div className="avatar">
                                            <div className="w-12  rounded-full">
                                                <img src={`${item.photo}`} />
                                            </div>
                                        </div>
                                        <p >
                                            @{item.name}
                                        </p>
                                    </div>
                                    <p className="ml-16">{item.comment}</p>
                                </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default MealCard;