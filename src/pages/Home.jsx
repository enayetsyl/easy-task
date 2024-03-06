import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import FeaturedServices from "../Components/FeaturedServices";
import Review from "../Components/Review";

const Home = () => {
  return (
    <div className="">
<Banner/>    
{/* <SwiperCard/> */}
<FeaturedServices/>
<AboutUs></AboutUs>
<Review/>
    </div>
  );
};

export default Home;