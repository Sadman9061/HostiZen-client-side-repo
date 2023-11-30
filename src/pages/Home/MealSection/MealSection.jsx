import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { Link } from 'react-router-dom';



const MealSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const [menu] = useMenu([]);
    console.log(menu);
    const breakfast = menu.filter(item => item.mealType === 'Breakfast');
    const lunch = menu.filter(item => item.mealType === 'Lunch');
    const dinner = menu.filter(item => item.mealType === 'Dinner');

    return (
        <section>
            {/* --------------------------------------------------------section title------------ */}
            <SectionTitle
                heading={'Meals By Category'}
                subHeading={'little bit of text here'}>

            </SectionTitle>
            <div className='my-40 w-4/5 mx-auto' >
                <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                    <div className='flex justify-center'>
                        <TabList className={`flex flex-wrap gap-20 border-2 rounded-lg px-5 py-2 mb-20`}>
                            {/* --------------------------------------------------------different tabs------------ */}
                            <Tab className={`${activeTab === 0 ? '  font-medium underline    ' : ''}`} >All</Tab>
                            <Tab className={`${activeTab === 1 ? '   font-medium underline ' : ''}`} >Break fast</Tab>
                            <Tab className={`${activeTab === 2 ? '  font-medium underline  ' : ''}`} >Lunch</Tab>
                            <Tab className={`${activeTab === 3 ? '  font-medium underline ' : ''}`} >Dinner</Tab>

                        </TabList>
                    </div>
                    <div className='max-h-screen rounded-lg overflow-auto  border-green-500 border-2 p-2 md:p-14 lg:p-10 shadow-md drop-shadow-2xl' >
                        {/* --------------------------------------------------------different tabs results------------ */}
                        <TabPanel >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {
                                    menu?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                                }
                            </div>


                        </TabPanel>
                        {/* --------------------------------------------------------different tabs results------------ */}
                        <TabPanel >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {
                                    breakfast?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        {/* --------------------------------------------------------different tabs results------------ */}
                        <TabPanel >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {
                                    lunch?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        {/* --------------------------------------------------------different tabs results------------ */}
                        <TabPanel >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {
                                    dinner?.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>

                    </div>
                    <div className='flex justify-center mt-4 '>
                        <Link to={'/meals'} className="form-control block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-green-500 border-none hover:bg-green-600 text-white   normal-case">See All</Link>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default MealSection;