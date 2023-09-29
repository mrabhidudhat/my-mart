import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../Asset/banner/bannerImgOne.png";
import Carousel2 from "../Asset/banner/bannerImgTwo.png";
import Carousel3 from "../Asset/banner/bannerImgThree.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Component/Footer";

const Home = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleOnChange = (index) => {
    setSelectedSlide(index);
  };

  return (
    <>
      <div>
        <Navbar />
        <Carousel
          className="pt-20"
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
