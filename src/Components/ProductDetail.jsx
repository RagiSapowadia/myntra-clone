import { React, useState } from "react";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../actions/wishlist";
import { nFormatter, isInWishList, isInBag } from "../helpers/general";
import { addItemToBag, setSize } from "../actions/bag";
import { openModal } from "../actions/modals";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails({ product }) {
  const sizes = [38, 40, 42, 44, 46];
  const dispatch = useDispatch();
  
  const { wishlist, bag } = useSelector((state) => {
    return {
      wishlist: state.wishlistStore,
      bag: state.bagStore,
    };
  });

  let isAddedToWishlist = isInWishList(wishlist, product);
  let isAddedToBag = isInBag(bag, product);
  const [selectedSize, setSelectedSize] = useState(null);

  if (isAddedToBag) {
    const itemInBag = bag.find((item) => item.id === product.id);
    if (itemInBag && selectedSize !== itemInBag.size) {
      setSelectedSize(itemInBag.size);
    }
  }
  

  return (
    <div className="product-detail-page   row  mt-5   container mx-auto">
      <div className="product-image-gallery col-lg-8 ">
        {product.images &&
          product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
               height = {500}
              alt={`product-${idx}`}
              className="product-image m-1"
            />
          ))}
      </div>

      <div className="product-details-container col-lg-4 ">
        <h2 className="product-brandname">{product.brandName}</h2>
        <p className="product-name">{product.productName}</p>

        <div className="product-rating-count">
          <span className="rating">{product.rating}</span>
          <span className="star-icon">
            <i className="fas fa-star"></i> |{" "}
          </span>
          <span className="no-of-reviews">
            {nFormatter(product.numberOfReviews, 1)} Ratings
          </span>
        </div>

        <div className="product-price-details">
          <span className="final-price"> Rs. {product.price} </span> &nbsp;
          <span className="original-price">Rs. {product.originalPrice}</span>{" "}
          &nbsp;
          <span className="discount-percentage">
            ({product.discountPercent}% OFF)
          </span>
          <p className="tax-detail"> inclusive of all taxes </p>
        </div>

        <div className="product-size-details">
          <p className="select-size-title"> SELECT SIZE </p>
          {sizes.map((size, index) => (
            <span key={index}>
              <input
                type="radio"
                name={`size-${product.id}`}
                value={size}
                className="size-radio-input"
                id={product.id + index}
                onClick={() => {
                  isAddedToBag
                    ? dispatch(setSize(product, size))
                    : setSelectedSize(size);
                }}
                checked={selectedSize === size}
              />
              <label className="detail-size-label" htmlFor={product.id + index}>
                <span className="detail-size-number">{size}</span>
              </label>
            </span>
          ))}
        </div>

        <div className="product-actions">
          <>
            <button
              style={{
                display: isAddedToBag ? "none" : "inline",
              }}
              className="bag-handler-button"
              onClick={() => {
                if (selectedSize === null) {
                  window.alert("Please select a size");
                } else dispatch(addItemToBag({ ...product, size: selectedSize, quantity: 1 }));

                
              }}
            >
              <i className="fas fa-shopping-bag"></i>
              &nbsp; ADD TO BAG
            </button>

          <Link to={`/bagContainer`}>
          <button
              style={{
                display: isAddedToBag ? "inline" : "none",
              }}
              className="bag-handler-button"
              onClick={() => {
                dispatch(openModal("bag"));
              }}
            >
              GO TO BAG &nbsp;
              <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
          </>

          <>
            <button
              style={{
                display: isAddedToWishlist ? "none" : "inline",
              }}
              className="wishlist-handler-button add-to-wishlist-button"
              onClick={() => dispatch(addItemToWishlist(product))}
            >
              <i className="far fa-heart"></i>
              &nbsp; WISHLIST
            </button>

            <button
              style={{
                display: isAddedToWishlist ? "inline" : "none",
              }}
              className="wishlist-handler-button remove-from-wishlist-button"
              onClick={() => dispatch(removeItemFromWishlist(product))}
            >
              <i className="fas fa-heart" style={{ color: "red" }}></i>
              &nbsp; WISHLISTED
            </button>
          </>
        </div>
      </div>
    </div>
  );
}
