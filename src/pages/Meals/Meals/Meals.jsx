// import Menu from "../../Home/MealSection/Memu/Menu";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import useMenu from "../../../hooks/useMenu";




// const Meals = () => {
//    const [menu]= useMenu([]);
//     console.log(menu);
//     return (
//         <div className="mx-4 md:mx-16 lg:mx-32 py-10">
//             <SectionTitle heading='Meals'></SectionTitle>
//             {/* search  */}
//             <form className="flex items-center -mt-10">
//                 <label className="sr-only">Search</label>
//                 <div className="relative w-full">
//                     <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
//                             <path stroke="currentColor" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
//                         </svg>
//                     </div>
//                     <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />


//                 </div>
//                 <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                         <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                     </svg>Search
//                 </button>
//             </form>
//             {/* filter by price and category  */}
//             <div className="flex flex-col md:flex-row justify-between gap-x-4 items-center">

//                 <div className="form-control w-full max-w-full md:max-w-xs">
//                     <label className="label">
//                         <span className="label-text">Filter by category</span>
//                     </label>
//                     <select className="select select-bordered">
//                         <option disabled selected>Pick one</option>
//                         <option>Star Wars</option>
//                         <option>Harry Potter</option>
//                         <option>Lord of the Rings</option>
//                         <option>Planet of the Apes</option>
//                         <option>Star Trek</option>
//                     </select>
//                     <label className="label">
//                     </label>
//                 </div>

//                 <div className="form-control w-full max-w-full md:max-w-xs mr-0 lg:mr-[102px]">
//                     <label className="label">
//                         <span className="label-text">Filter by price</span>
//                     </label>
//                     <select className="select select-bordered">
//                         <option disabled selected>Pick one</option>
//                         <option>Star Wars</option>
//                         <option>Harry Potter</option>
//                         <option>Lord of the Rings</option>
//                         <option>Planet of the Apes</option>
//                         <option>Star Trek</option>
//                     </select>
//                     <label className="label">
//                     </label>
//                 </div>

//             </div>

//             <div className="mt-20">
//             <Menu items={menu}></Menu>
//             </div>
//         </div>
//     );
// };

// export default Meals;

import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Menu from "../../Home/MealSection/Memu/Menu";
import getMeals from "../../../hooks/getMeals";




const Meals = () => {
  const [hasMoreData, setHasMoreData] = useState(true);
  
 
  
  


  const { data, fetchNextPage, hasNextPage, } = useInfiniteQuery({
      queryKey: ["meals"],
      queryFn:getMeals,
      getNextPageParam: (lastPage) => {
        const nextOffset = lastPage.prevOffset + 2;
        if (nextOffset >= lastPage.mealsCount) {
            console.log('Entering if statement');
            if (hasMoreData) {
              setHasMoreData(false); // Update state conditionally to avoid re-renders
            }
            return false;
        }
    
        return nextOffset;
    }
    
  });
  // Extract meals from the query result.
  const meals = data?.pages.reduce((acc, page) => {
      return [...acc, ...page.meals];
  }, []);
  
  // Render the component with an infinite scroll.
  return (
      <div>
          <InfiniteScroll
              dataLength={meals ? meals.length : 0}
              next={() => fetchNextPage()}
              hasMore={hasMoreData}
              loader={<div><div className="flex justify-center items-center h-[10vh]"><span className="loading loading-spinner loading-lg"></span></div>; </div>}
          >
              {/* Display the list of meals in a grid */}
              <div className="w-11/12 mx-auto  my-96">
                  {meals ?
                       <Menu   items={meals}></Menu>
                      :''
                  }
              </div>
          </InfiniteScroll>
      </div>
  );
};
export default Meals;