import axios from "axios";
import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Keyboard, EffectFade, Navigation, Pagination } from 'swiper/modules';






const HomeSlider = () => {


    const [sliders, setSliders] = useState()

    axios.get('http://localhost:5000/sliders')
        .then(res => setSliders(res.data))


    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                keyboard={{
                    enabled: true,
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Keyboard, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    sliders?.slice(0, 4).map(slider => <SwiperSlide key={slider._id}>
                        <div>
                            <img src={slider.img} alt="" />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default HomeSlider;