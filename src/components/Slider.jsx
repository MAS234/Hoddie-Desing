// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { buzo1, buzo2, buzo3, buzo4 } from "../assets/img";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={buzo1} alt="buzo1" className="rounded-lg h-52 w-52" /></SwiperSlide>
        <SwiperSlide><img src={buzo2} alt="buzo1" className="rounded-lg h-52 w-52" /></SwiperSlide>
        <SwiperSlide><img src={buzo3} alt="buzo1" className="rounded-lg h-52 w-52" /></SwiperSlide>
        <SwiperSlide><img src={buzo4} alt="buzo1" className="rounded-lg h-52 w-52" /></SwiperSlide>

      </Swiper>
    </>
  );
}