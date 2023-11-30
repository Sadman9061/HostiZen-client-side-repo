import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { rating, price, mealImage, mealType, mealTitle, _id } = item;

    return (
        <div className="card  bg-base-100 shadow-2xl">
            <figure><img src={mealImage} className="w-full  transition duration-500 hover:scale-105" alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{mealTitle}</h2>
                <p>{rating}</p>
                <p>{mealType}</p>
                <div className="card-actions justify-end">
                    <Link to={`/meals/${_id}`}>
                        <button

                            className="form-control block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-green-500 border-none hover:bg-green-600 text-white   normal-case"                        >View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;