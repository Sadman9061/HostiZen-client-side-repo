



const UserDashboard = () => {
    return (
        <div>
            <div className="hero w-full h-full min-h-screen" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIG.6r2KHMBDzQxDLduipex_?pid=ImgGn)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className=" text-center text-neutral-content">
                    <div className="max-w-3xl space-y-8">
                        {/*-------------------------------------- ---- heading-----  */}
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold mx-4 text-white">Discover Your Adventure Hub  <span className=" font-black  bg-gradient-to-r from-[#8ABB6A] to-[#8ABB6A]  bg-clip-text text-transparent text-center  ">Hosti<span className="text-[#FFDB74]">Zen</span></span></h1>
                        {/* --------------------------------------------------------subheading------------ */}
                        <p className="mb-5 mx-4 text-white">Welcome to Hostizen, where your website finds a home that prioritizes reliability, speed, and personalized service. Elevate your online presence with Hostizen where hosting meets excellence.</p>
                        {/* --------------------------------------------------------Search input and button------------ */}
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserDashboard;