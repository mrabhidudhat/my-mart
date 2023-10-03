import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../Asset/banner/bannerImgOne.png";
import Carousel2 from "../Asset/banner/bannerImgTwo.png";
import Carousel3 from "../Asset/banner/bannerImgThree.png";
import sale1 from "../Asset/sale/saleImgOne.png";
import sale2 from "../Asset/sale/saleImgTwo.png";
import sale3 from "../Asset/sale/saleImgThree.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Component/Footer";

const Home = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleOnChange = (index) => {
    setSelectedSlide(index);
  };

  return (
    <>
      <Navbar />

      <Carousel
        className="pt-28"
        showThumbs={true}
        selectedItem={selectedSlide}
        onChange={handleOnChange}
      >
        <div>
          <img src={Carousel1} alt="Carousel 1" />
        </div>
        <div>
          <img src={Carousel2} alt="Carousel 2" />
        </div>
        <div>
          <img src={Carousel3} alt="Carousel 3" />
        </div>
      </Carousel>
      <div className="flex justify-between text-xl p-5 pb-5">
        <div className="p-2 rounded-lg  hover:shadow-xl">2 Year Warranty</div>
        <div className="p-2 rounded-lg  hover:shadow-xl">⛟ Free Shipping</div>
        <div className="p-2 rounded-lg  hover:shadow-xl">
          ↻ Return policy in 30 days
        </div>
      </div>
      <div className="border-[1px] opacity-10 w-full border-slate-500"></div>
      <div className="flex p-5">
        <div>
          <img src={sale1} alt="sale 1" />
        </div>
        <div className="pl-2">
          <img className="pb-2" src={sale2} alt="sale 2" />
          <img className="pt-2" src={sale3} alt="sale 3" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
