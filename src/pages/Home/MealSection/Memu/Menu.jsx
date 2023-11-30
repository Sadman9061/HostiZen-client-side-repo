
// import { useEffect, useState } from "react";
// import FoodCard from "../../../../components/FoodCard/FoodCard";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";



// const Menu = ({ items }) => {
//     const [meals, setMeals] = useState([]);
//     const [input, setInput] = useState("");

//     const [filteredMeals, setFilteredMeals] = useState(items);

//     const [activeTab, setActiveTab] = useState(0);
//     const breakfast = filteredMeals.filter((item) => item.mealType === 'Breakfast');
//     const lunch = filteredMeals.filter((item) => item.mealType === 'Lunch');
//     const dinner = filteredMeals.filter((item) => item.mealType === 'Dinner');


//     const ten = filteredMeals.filter((item) => item.price <= 10);
//     const fifteen = filteredMeals.filter((item) => item.price <= 15);
//     const twonti = filteredMeals.filter((item) => item.price <= 20);
  


//     const handleChange = (value) => {
//         setInput(value);
//     };
//     useEffect(() => {
//         setMeals(items)
//         setFilteredMeals(items); // Initialize with the original items
//     }, [items]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
       
//         filterMeals(input);
//     }

//     // Highlighted the corrected part of the code
//     const filterMeals = (value) => {

//         const result = items.filter((item) => // Use 'items' instead of 'itemsInCategory'
//             value && item.mealTitle.toLowerCase().includes(value.toLowerCase())
//         );
//         console.log(result);
//         setFilteredMeals(result);

//     }
//     return (
//         <div className="mt-40">
//             <form onSubmit={handleSubmit} className="flex w-full items-center justify-center">
//                 <input
//                     value={input}
//                     onChange={(e) => handleChange(e.target.value)}
//                     type="text"
//                     placeholder="Search here...."
//                     className=" input text-black input-bordered  w-full max-w-sm rounded-l-lg rounded-r-none"
//                 />
//                 <input
//                     type="submit"
//                     className="form-control block w-1/4 select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-l-none  text-white   normal-case rounded-r-lg"
//                     value="Search"
//                 />
//             </form>

//             <div className='my-10 w-4/5 mx-auto' >
//                 <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
//                     <div className='flex justify-center'>
//                         <TabList className={`flex flex-wrap gap-20 border-2 rounded-lg px-5 py-2 mb-20`}>
//                             {/* --------------------------------------------------------different tabs------------ */}
//                             <Tab className={`${activeTab === 0 ? '  font-medium underline    ' : ''}`} >All</Tab>
//                             <Tab className={`${activeTab === 1 ? '   font-medium underline ' : ''}`} >Break fast</Tab>
//                             <Tab className={`${activeTab === 2 ? '  font-medium underline  ' : ''}`} >Lunch</Tab>
//                             <Tab className={`${activeTab === 3 ? '  font-medium underline ' : ''}`} >Dinner</Tab>

//                         </TabList>
//                     </div>
//                     <div  >
//                         {/* --------------------------------------------------------different tabs results------------ */}
//                         <TabPanel >
//                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                            {
//                                 filteredMeals?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
//                             }
//                            </div>
//                         </TabPanel>
//                         {/* --------------------------------------------------------different tabs results------------ */}
//                         <TabPanel >
//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                             {
//                                 breakfast?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
//                             }
//                             </div>
                            
                            
//                         </TabPanel>
//                         {/* --------------------------------------------------------different tabs results------------ */}
//                         <TabPanel >
//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                             {
//                                 lunch?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
//                             }
//                             </div>
                            
//                         </TabPanel>
//                         {/* --------------------------------------------------------different tabs results------------ */}
//                         <TabPanel >
//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                             {
//                                 dinner?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
//                             }
//                             </div>
                           
//                         </TabPanel>

//                     </div>
                   
//                 </Tabs>
//             </div>

//         </div>
//     );
// };

// export default Menu;






import { useEffect, useState } from "react";
import FoodCard from "../../../../components/FoodCard/FoodCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Menu = ({ items }) => {
  const [meals, setMeals] = useState([]);
  const [input, setInput] = useState("");
  const [filteredMeals, setFilteredMeals] = useState(items);
  const [activeTab, setActiveTab] = useState(0);

  const breakfast = filteredMeals.filter((item) => item.mealType === "Breakfast");
  const lunch = filteredMeals.filter((item) => item.mealType === "Lunch");
  const dinner = filteredMeals.filter((item) => item.mealType === "Dinner");

  const ten = filteredMeals.filter((item) => item.price <= 10);
  const fifteen = filteredMeals.filter((item) => item.price <= 15);
  const twenty = filteredMeals.filter((item) => item.price <= 20);

  const handleChange = (value) => {
    setInput(value);
  };

  useEffect(() => {
    setMeals(items);
    setFilteredMeals(items);
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterMeals(input);
  };

  const filterMeals = (value) => {
    const result = items.filter(
      (item) =>
        (value &&
          item.mealTitle.toLowerCase().includes(value.toLowerCase())) ||
        (value && item.price <= parseInt(value))
    );
    setFilteredMeals(result);
  };

  return (
    <div className="mt-40">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-center"
      >
        <input
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Search here...."
          className="input text-black input-bordered w-full max-w-sm rounded-l-lg rounded-r-none"
        />
        <input
          type="submit"
          className="form-control block w-1/4 select-none py-3 px-6 text-center align-middle font-sans text-xs font-bold shadow-xl transition-all hover:shadow-2xl active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-gradient-to-l from-[#5a3535] to-[#362929] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-l-none text-white normal-case rounded-r-lg"
          value="Search"
        />
      </form>

      <div className="my-10 w-4/5 mx-auto">
        <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
          <div className="flex justify-center">
            <TabList className={`flex flex-wrap gap-20 border-2 rounded-lg px-5 py-2 mb-20`}>
              <Tab className={`${activeTab === 0 ? "  font-medium underline  " : ""}`} >All</Tab>
              <Tab className={`${activeTab === 1 ? "   font-medium underline " : ""}`} >Breakfast</Tab>
              <Tab className={`${activeTab === 2 ? "  font-medium underline  " : ""}`} >Lunch</Tab>
              <Tab className={`${activeTab === 3 ? "  font-medium underline " : ""}`} >Dinner</Tab>
              <Tab className={`${activeTab === 4 ? "  font-medium underline  " : ""}`} >$10 or less</Tab>
              <Tab className={`${activeTab === 5 ? "  font-medium underline  " : ""}`} >$15 or less</Tab>
              <Tab className={`${activeTab === 6 ? "  font-medium underline  " : ""}`} >$20 or less</Tab>
            </TabList>
          </div>
          <div>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredMeals?.map((item) => 
                  <FoodCard key={item._id} item={item}></FoodCard>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {breakfast?.map((item) => 
                  <FoodCard key={item._id} item={item}></FoodCard>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {lunch?.map((item) => 
                  <FoodCard key={item._id} item={item}></FoodCard>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {dinner?.map((item) => 
                  <FoodCard key={item._id} item={item}></FoodCard>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {ten?.map((item) => 
                  <FoodCard key={item._id} item={item}></FoodCard>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {fifteen?.map((item) => 
                  <FoodCard key={item._id} item={item}></FoodCard>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {twenty?.map((item) =>
                  <FoodCard key={item._id} item={item}></FoodCard>
                )}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
