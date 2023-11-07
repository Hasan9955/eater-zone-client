import axios from "axios";
import {useState} from 'react'

const HomeSlider = () => {


    const [sliders, setSliders] = useState()

    axios.get('http://localhost:5000/sliders')
    .then(res => setSliders(res.data))


    return (
        <div>
            {
                sliders?.map(slider => <div key={slider._id}>
                    <img src={slider.img} alt="" />
                </div>)
            }
        </div>
    );
};

export default HomeSlider;