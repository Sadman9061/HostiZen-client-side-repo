import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import MealSection from "../MealSection/MealSection";
import Membership from "../Membership/Membership";
import Testimonials from "../Testimonials/testimonials";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <MealSection></MealSection>
           <Testimonials></Testimonials>
           <Facilities></Facilities>
           <Membership></Membership>
        </div>
    );
};

export default Home;