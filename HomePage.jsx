import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules"; // ✅ Correct import

import "./Home.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [newUser, setNewUser] = useState([]);
  const [banner, setBanner] = useState([]);
  // const[type, setType] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [worthyBrands, setWorthyBrands] = useState([]);
  const [globalBrands, setGlobalBrands] = useState([]);
  const [shopByCategory, setShopByCategory] = useState([]);
  const carouselRef = useRef(null);

  // first banner
  useEffect(() => {
    fetch("http://localhost:3007/newUserBanner")
      .then((response) => response.json())
      .then((data) => setNewUser(data))
      .catch((error) => console.log("Error: " + error));
  }, []);

  // first carousal
  useEffect(() => {
    fetch("http://localhost:3007/Carousal")
      .then((response) => response.json())
      .then((data) => {
        setBanner(data)
       
      })
      .catch((error) => console.error("Error: " + error));
  }, []);

  // useEffect(() => {
  //   if (carousal.length === 0) return;

  //   const interval = setTimeout(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === carousal.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [carousal]);

  // worthyBrands products carousal
  useEffect(() => {
    fetch("http://localhost:3007/worthyBrands")
      .then((response) => response.json())
      .then((data) => {
        setWorthyBrands(data);
      })
      .catch((error) => console.error("Error: " + error));
  }, []);

  // globalBrands products carousal
  useEffect(() => {
    fetch("http://localhost:3007/globalBrands")
      .then((response) => response.json())
      .then((data) => setGlobalBrands(data))
      .catch((error) => console.error("Error: " + error));
  }, []);

  //  shopByCategory products
  useEffect(() => {
    fetch("http://localhost:3007/shopByCategory")
      .then((response) => response.json())
      .then((data) => setShopByCategory(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {newUser.map((el, i) => {
        return (
          <div style={{ cursor: "pointer" }}>
            <img
              style={{ width: "100%" }}
              src={el.newUserImg}
              alt="New User Banner"
            />
          </div>
        );
      })}

      {/* first carousal */}
      <div className="carousel-container">
        <div
          className="carousel"
         
          ref={carouselRef}
        >
          <Swiper
            className="sample-slider"
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            slidesPerGroup={1}
          >
            {banner.map((el, index) => (
              <SwiperSlide key={index}>
                
                <Link  to={`/products/${el.type}`}>
                <img src={el.imageUrl} alt={`Brand ${index + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* WorthyBrands */}
      <div className="carousel-container mt-5">
        <h4
          className="m-5 pb-3"
          style={{
            color: "#3e4152",
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          Medal Worthy Brands To Bag
        </h4>
        <div className="carousel">
          <Swiper
            className="sample-slider"
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={6}
            slidesPerGroup={6}
          >
            {worthyBrands.map((image, index) => (
              <SwiperSlide key={index}>
                <Link>
                <img
                 
                  src={image.brand}
                  alt={`Brand ${index + 1}`}
                />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* globalBrands */}
      <div className="carousel-container mt-5">
        <h4
          className="m-5 pb-3"
          style={{
            color: "#3e4152",
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          Grand Global Brands
        </h4>
        <div className="carousel">
          <Swiper
            className="sample-slider"
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={6}
            slidesPerGroup={6}
          >
            {globalBrands.map((image, index) => (
              <SwiperSlide key={index}>
               <Link>
               <img
                  src={image.brand}
                  alt={`Brand ${index + 1}`}
                />
               </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* shop by category */}
      <div className="shop-by-category mt-5">
        <h4
          className="m-5 pb-3"
          style={{
            color: "#3e4152",
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          Shop By Category
        </h4>
        <div className="container-fluid  d-flex justify-content-center  ">
          {shopByCategory.map((category, index) => (
            <div key={index} className="category-item  ">
              <Link>
              <img src={category.Img} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
