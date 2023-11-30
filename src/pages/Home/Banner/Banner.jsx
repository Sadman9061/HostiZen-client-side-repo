
const Banner = () => {
    return (
        // ----------------------------------------------------banner section ----
        <div className="hero w-full h-full min-h-screen  " style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIG.l2Q4O28UT9NJoo6OY8iq?pid=ImgGn)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className=" text-center text-neutral-content">
                <div className="max-w-3xl space-y-8">                   
                    {/*-------------------------------------- ---- heading-----  */}
            <h1 className="mb-5 text-4xl md:text-5xl font-bold mx-4 text-white">Discover Your Adventure Hub  <span className=" font-black  bg-gradient-to-r from-[#8ABB6A] to-[#8ABB6A]  bg-clip-text text-transparent text-center  ">Hosti<span className="text-[#FFDB74]">Zen</span></span></h1>
                    {/* --------------------------------------------------------subheading------------ */}
                    <p className="mb-5 mx-4 text-white">Welcome to Hostizen, where your website finds a home that prioritizes reliability, speed, and personalized service. Elevate your online presence with Hostizen where hosting meets excellence.</p>
                    {/* --------------------------------------------------------Search input and button------------ */}
                    <div className="flex items-center justify-center mx-4 my-20">
                        <input type="text" placeholder="Search here" className="input text-black input-bordered  w-full max-w-sm rounded-l-lg rounded-r-none" />
                    <button className="form-control block w-1/4 select-none  py-3.5 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn  bg-gradient-to-l from-[#8ABB6A] to-[#8ABB6A] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-l-none  text-white   normal-case rounded-r-lg">Search</button>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;