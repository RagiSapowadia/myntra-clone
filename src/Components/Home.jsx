import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [newUser, setNewUser] = useState([]);
  const [banner, setBanner] = useState([]);
  const [worthyBrands, setWorthyBrands] = useState([]);
  const [globalBrands, setGlobalBrands] = useState([]);
  const [shopByCategory, setShopByCategory] = useState([]);
  const carouselRef = useRef(null);

  // newUserBanner
  useEffect(() => {
    fetch("http://localhost:3007/newUserBanner")
      .then((res) => res.json())
      .then(setNewUser)
      .catch((err) => console.error("Error:", err));
  }, []);

  // main carousel
  useEffect(() => {
    fetch("http://localhost:3007/Carousal")
      .then((res) => res.json())
      .then(setBanner)
      .catch((err) => console.error("Error:", err));
  }, []);

  // worthyBrands
  useEffect(() => {
    fetch("http://localhost:3007/worthyBrands")
      .then((res) => res.json())
      .then(setWorthyBrands)
      .catch((err) => console.error("Error:", err));
  }, []);

  // globalBrands
  useEffect(() => {
    fetch("http://localhost:3007/globalBrands")
      .then((res) => res.json())
      .then(setGlobalBrands)
      .catch((err) => console.error("Error:", err));
  }, []);

  // shopByCategory
  useEffect(() => {
    fetch("http://localhost:3007/shopByCategory")
      .then((res) => res.json())
      .then(setShopByCategory)
      .catch((err) => console.error("Error:", err));
  }, []);

  const getSafeLink = (brandName, fallbackLabel = "Unknown") => {
    if (!brandName) {
      console.warn(`Missing brandName for item:`, fallbackLabel);
      return null;
    }
    return `/products/${encodeURIComponent(brandName.trim().toLowerCase())}`;
  };

  return (
    <div>
      {/* New User Banner */}
      {newUser.map((el, i) => (
        <div key={i} style={{ cursor: "pointer" }}>
          <img style={{ width: "100%" }} src={el.newUserImg} alt="New User Banner" />
        </div>
      ))}

      {/* Main Carousel */}
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
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
                <Link to={getSafeLink(el.brandName)}>
                  <img src={el.imageUrl} alt={`Brand ${index + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Worthy Brands */}
      <div className="carousel-container mt-5">
        <h4 className="m-5 pb-3" style={{ color: "#3e4152", textTransform: "uppercase", fontWeight: "700" }}>
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
                <Link to={getSafeLink(image.brandName)}>
                  <img src={image.brand} alt={`Brand ${index + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global Brands */}
      <div className="carousel-container mt-5">
        <h4 className="m-5 pb-3" style={{ color: "#3e4152", textTransform: "uppercase", fontWeight: "700" }}>
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
                <Link to={getSafeLink(image.brandName)}>
                  <img src={image.brand} alt={`Brand ${index + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Shop By Category */}
      <div className="shop-by-category mt-5">
        <h4 className="m-5 pb-3" style={{ color: "#3e4152", textTransform: "uppercase", fontWeight: "700" }}>
          Shop By Category
        </h4>
        <div className="container-fluid d-flex justify-content-center">
          {shopByCategory.map((category, index) => (
            <div key={index} className="category-item">
              <Link to={getSafeLink(category.brandName)}>
                <img src={category.Img} alt={`Category ${index + 1}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
