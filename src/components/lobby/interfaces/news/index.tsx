import Slider from "@/components/_ui/slider/slider";
import useMediumRssFeed from "@/helpers/hooks/useMediumFeed";
import React from "react";

const NewsSection = () => {
  const { data, isLoading, error } = useMediumRssFeed();
  return (
    <div className="relative max-h-[400px] h-[400px] ">
      {/* carousel */}
      {/* news on dekstop */}
      <Slider
        id="carousel-news-lobby"
        {...{
          data,
          isLoading,
          error,
        }}
      />
      {/* <div className="w-[300px] border">testx</div> */}
      {/* items */}
    </div>
  );
};
export default NewsSection;

const CarouselItem = () => {
  return (
    <div>
      <div>title</div>

      <div>icon sale</div>
    </div>
  );
};
