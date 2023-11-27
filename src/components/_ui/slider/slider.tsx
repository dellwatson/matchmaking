// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

const Slider = ({ id = "default", data = [], isLoading }) => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect={"cube"}
      grabCursor={true}
      //   cubeEffect={{
      //     shadow: true,
      //     slideShadows: true,
      //     shadowOffset: 20,
      //     shadowScale: 0.94,
      //   }}
      pagination={true}
      modules={[Autoplay, EffectCube, Pagination]}
      className="mySwiper"
    >
      {!!data.length &&
        data?.map((item, i) => (
          <SwiperSlide key={`slider-news-${i}`}>
            <div className="absolute  w-[300px] h-[300px]  border-red-500 rounded-md overflow-hidden">
              {/* <div className="absolute w-full border"> title here</div> */}
              <div>
                <img
                  className="absolute w-[300px] h-[300px] "
                  style={{ objectFit: "cover" }}
                  src={item?.thumbnail}
                />
                <div className="absolute  w-full h-full bg-black opacity-75"></div>
              </div>
              <div
                onClick={() => {
                  window.open(item?.link, "_blank");
                }}
              >
                <div className=" relative text-white flex  px-4 pt-4 ">
                  <div className="bg-red-500 p-2 rounded-sm">
                    NEWS
                    {/* UPDATE */}
                  </div>
                </div>
                <div className="relative  h-full text-white p-4 font-bold">
                  {item?.title}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;

const NewsItem = () => {
  return <div></div>;
};

const SliderItem = () => {
  return (
    <SwiperSlide>
      {/* <div className="w-[300xpx] border border-green-400 h-[400px] bg-red-400"> */}
      Slider 1{/* </div> */}
    </SwiperSlide>
  );
};

const SliderTest = () => {
  return (
    <>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </>
  );
};
