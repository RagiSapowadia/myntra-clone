import React from 'react';
import './BagContainer.css';
import { useDispatch, useSelector } from 'react-redux';
import { emptyBag } from '../actions/bag';
import { findTotal } from '../helpers/general';
import BagItemCard from './BagItemCard';

export default function BagContainer() {
    const bag = useSelector(state => state.bagStore);
    const dispatch = useDispatch();

    function checkOutHandler() {
        let isValid = true;
        bag.forEach(product => {
            if (!product.size) {
                alert(`Please select size for ${product.productName}`);
                isValid = false;
            }
        });
        if (isValid) dispatch(emptyBag());
    }

    return (
        <div className="bag-wrapper container">
            <div className="bag-left">
                {bag.length === 0 ? <h2>Your bag is empty!</h2> : bag.map(item => <BagItemCard key={item.id} item={item} />)}
            </div>
            <div className="bag-right">
            <div className="price-details">
  <h5>PRICE DETAILS ({bag.length} Item{bag.length > 1 ? 's' : ''})</h5>
  <div className="price-line">
    <span>Total MRP</span>
    <span>₹{bag.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0)}</span>
  </div>
  <div className="price-line discount">
    <small>
      Discount on MRP <small className="know-more">Know More</small>
    </small>
    <span className="green">
      - ₹{bag.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0)}
    </span>
  </div>
  <div className="price-line coupon">
    <span>Coupon Discount</span>
    <span className="apply-coupon">Apply Coupon</span>
  </div>
  <div className="price-line">
    <span>
      Platform Fee <small className="know-more">Know More</small>
    </span>
    <span>₹20</span>
  </div>
  <div className="price-line">
    <span>
      Shipping Fee <small className="know-more">Know More</small>
    </span>
    <span className="green">FREE</span>
  </div>
  <p className="subtext">Free shipping for you</p>

  <div className="price-total justify-content-between">
    <span>Total Amount</span>
    <span>
      ₹
      {bag.reduce((sum, item) => sum + item.price * item.quantity, 0) + 20}
    </span>
  </div>

  <button className="place-order-btn" onClick={checkOutHandler}>
    PLACE ORDER
  </button>
</div>

            </div>
        </div>
    );
}
