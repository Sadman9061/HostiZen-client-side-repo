import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Membership = () => {
    const silver =
        <>
            <div className="relative  flex w-full  flex-col rounded-xl bg-gradient-to-tr from-[#AEBBC3] to-[#d2d3d3] bg-clip-border p-8  shadow-2xl drop-shadow-2xl border-2">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center  bg-transparent border-b rounded-none shadow-none bg-clip-border">
                    <div className="flex  items-center gap-2 text-center justify-center">
                        <img src="https://th.bing.com/th/id/OIG.jQFC9xGJJzu0exy5RcXc?pid=ImgGn" className="w-10 rounded-full shadow-2xl drop-shadow-2xl " alt="" />
                        <p className="block font-sans text-sm antialiased font-normal leading-normal  uppercase">                  silver         </p>
                    </div>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal  text-7xl">
                        <span className="mt-2 text-4xl">$</span>29
                        <span className="self-end text-4xl">/</span><span className="text-sm self-end">Yearly</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Exclusive Accommodation
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Wi-Fi Network Access
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"                           >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Study Space
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3" >
                                    <path d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Free Health Services
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            5% Discount
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="p-0 mt-12">
                    <div className="card-actions">
                        <Link to={"/dashboard/Silver"}><button className="form-control block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-[#72797d] border-none hover:bg-[#676c70] text-white   normal-case">Buy Now!</button></Link>
                    </div>
                </div>
            </div>
        </>
    const gold =
        <>


            <div className="relative  flex w-full  flex-col rounded-xl bg-gradient-to-tr from-[#E8BF84] to-[#ffe0b5] bg-clip-border p-8  shadow-2xl drop-shadow-2xl border-2">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center  bg-transparent border-b rounded-none shadow-none bg-clip-border">
                    <div className="flex  items-center gap-2 text-center justify-center">
                        <img src="https://th.bing.com/th/id/OIG.T4gCA8nces.lAWa491NT?pid=ImgGn" className="w-10 rounded-full shadow-2xl drop-shadow-2xl " alt="" />
                        <p className="block font-sans text-sm antialiased font-normal leading-normal  uppercase">                  gold         </p>
                    </div>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal  text-7xl">
                        <span className="mt-2 text-4xl">$</span>59
                        <span className="self-end text-4xl">/</span><span className="text-sm self-end">Yearly</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Exclusive Accommodation
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Wi-Fi Network Access
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"                           >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Study Space
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3" >
                                    <path d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Free Health Services
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                           10% Discount
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="p-0 mt-12">
                    <div className="card-actions">
                       <Link to={"/dashboard/Gold"}> <button className="form-control block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-[#c68e40] border-none hover:bg-[#a67838] text-white   normal-case">Buy Now!</button></Link>
                    </div>
                </div>
            </div>
        </>
    const platinum =
        <>
            <div className="relative  flex w-full  flex-col rounded-xl bg-gradient-to-tr from-[#6091ac] to-[#97d1f1] bg-clip-border p-8  shadow-2xl border-2">
                <div className="rela drop-shadow-2xltive pb-8 m-0 mb-8 overflow-hidden text-center  bg-transparent border-b rounded-none shadow-none bg-clip-border">
                    <div className="flex  items-center gap-2 text-center justify-center">
                        <img src="https://th.bing.com/th/id/OIG.JVy4GBjRaz7pIp58raY7?w=1024&h=1024&rs=1&pid=ImgDetMain" className="w-10 rounded-full shadow-2xl drop-shadow-2xl " alt="" />
                        <p className="block font-sans text-sm antialiased font-normal leading-normal  uppercase">                  platinum         </p>
                    </div>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal  text-7xl">
                        <span className="mt-2 text-4xl">$</span>99
                        <span className="self-end text-4xl">/</span><span className="text-sm self-end">Yearly</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Exclusive Accommodation
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Wi-Fi Network Access
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"                           >
                                    <path
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            Study  Space
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3" >
                                    <path d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                              Free Health Services
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                           15% Discount
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="p-0 mt-12">
                    <div className="card-actions">
                       <Link to={"/dashboard/Platinum"}> <button className="form-control block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-[#4fb2e7] border-none hover:bg-[#4a9dca] text-white   normal-case">Buy Now!</button></Link>
                    </div>
                </div>
            </div>
        </>
    return (
        <section>
            <SectionTitle heading='Membership' subHeading='Become A Part of Us!'></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3  gap-20 mx-6 md:mx-28 lg:mx-26   mb-40">
                {
                    silver
                }
                {
                    gold
                }
                {
                    platinum
                }

            </div>
        </section>
    );
};

export default Membership;