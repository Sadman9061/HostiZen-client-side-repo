import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { PiCoffee } from "react-icons/pi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { PiLockers } from "react-icons/pi";
import { LuConciergeBell } from "react-icons/lu";

import { FaWifi } from "react-icons/fa6";


import { FiMonitor } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { TbIroningSteam } from "react-icons/tb";
import { PiShower } from "react-icons/pi";





const Facilities = () => {
    return (
        <section className=" mx-6 md:mx-20 lg:mx-32 ">
            <SectionTitle heading='Facilities' subHeading='What We Offer For Free'></SectionTitle>
            <div className="flex flex-wrap justify-center gap-20">
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <PiCoffee className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">TEA & COFFEE</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <PiShower   className="text-6xl text-gray-600" />
                    </div>
                    <h1 className="font-semibold text-lg">HOT SHOWERS</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <MdOutlineLocalLaundryService  className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">LAUNDRY</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <TbToolsKitchen2  className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">KITCHEN</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center ">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <TbAirConditioningDisabled  className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">AIR CONDITIONER</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <PiLockers  className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">LOCKERS</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <LuConciergeBell   className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">24/7 RECEPTION</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <FaWifi   className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">FREE WIFI</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <FiMonitor  className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">TV</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <FaRegMap  className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">CITY MAP</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <GiVacuumCleaner  className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">WEEKLY CLEANING</h1>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="bg-[#FFDB74]  rounded-full p-6 shadow-2xl  ">
                        <TbIroningSteam  className="text-6xl text-gray-600  " />
                    </div>
                    <h1 className="font-semibold text-lg">IRON</h1>
                </div>
            </div>
        </section>
    );
};

export default Facilities;