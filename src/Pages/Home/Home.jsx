import { Helmet } from "react-helmet-async";
import TopProducts from "./TopProducts";
import HomeSlider from "./HomeSlider";
import About from "./About";

const Home = () => {
    return (
        <div className=" ">
            <Helmet>
                <title>Eater Zone | Home</title>
            </Helmet>
            
            <HomeSlider></HomeSlider>
            <TopProducts></TopProducts>


            <div id="about">
            <About></About>
            </div>
        </div>
    );
};

export default Home;