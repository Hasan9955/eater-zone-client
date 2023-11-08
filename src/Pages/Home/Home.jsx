import { Helmet } from "react-helmet-async";
import TopProducts from "./TopProducts";
import HomeSlider from "./HomeSlider";

const Home = () => {
    return (
        <div className=" ">
            <Helmet>
                <title>Eater Zone | Home</title>
            </Helmet>
            
            <HomeSlider></HomeSlider>
            <TopProducts></TopProducts>


            
        </div>
    );
};

export default Home;