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
                   
                   sliders && <div>
                    <SwiperSlide>
                        <div><img src={sliders[0].img} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={sliders[1].img} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={sliders[2].img} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={sliders[3].img} alt="" /></div>
                    </SwiperSlide>
                   </div>
                }
            </Swiper>

        </div>
    );
};

export default HomeSlider;