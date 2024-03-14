import Slider from "@/_ui/slider/slider";
import useMediumRssFeed from "@/helpers/hooks/useMediumFeed";
import React from "react";

const NewsSection = ({ variant = "box" }) => {
  const isMobile = variant !== "box";
  const { data, isLoading, error } = useMediumRssFeed();
  return (
    <div
      className={` z-0 relative  ${
        isMobile ? "h-[150px] " : "max-h-[400px] h-[400px]"
      }`}>
      {/* <div className="relative max-h-[400px] h-[400px] z-0 "> */}

      {/* <div className="relative  z-0 "> */}
      {/* carousel */}
      {/* news on dekstop */}
      <Slider
        // variant={"slide"}
        variant={variant}
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
