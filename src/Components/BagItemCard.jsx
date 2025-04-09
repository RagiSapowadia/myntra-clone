import React from 'react';
import './BagItemCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { setQuantity, setSize, removeItemFromBag } from '../actions/bag';
import { addItemToWishlist, removeItemFromWishlist } from '../actions/wishlist';
import { isInWishList } from '../helpers/general';

export default function BagItemCard({ item }) {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlistStore);
    const isWishListed = isInWishList(wishlist, item);
    const sizes = [38, 40, 42, 44, 46];

    return (
        <div className="bag-item">
            <div className="bag-item-left">
                <img src={item.images[0]} alt={item.productName} />
            </div>
            <div className="bag-item-center">
                <h4>{item.productName}</h4>
                <p>Sold by: RetailNet</p>
                <div className="price">
                    <span>₹{item.price}</span>
                    <span className="original">₹{item.originalPrice}</span>
                    <span className="discount">({item.discountPercent}% OFF)</span>
                </div>
                <div className="selectors">
                    <label>
                        Size:
                        <select onChange={e => dispatch(setSize(item, +e.target.value))} value={item.size || ''}>
                            <option value="" disabled>Select</option>
                            {sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Qty:
                        <select onChange={e => dispatch(setQuantity(item, +e.target.value))} value={item.quantity}>
                            {[1, 2, 3, 4, 5].map(q => (
                                <option key={q} value={q}>{q}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <p className="return-text">14 days return available</p>
            </div>
            <div className="bag-item-right">
                <button onClick={() => dispatch(removeItemFromBag(item))}>✕</button>
                <button
                    className={`wishlist-button ${isWishListed ? 'added' : ''}`}
                    onClick={() => isWishListed
                        ? dispatch(removeItemFromWishlist(item))
                        : dispatch(addItemToWishlist(item))}
                >
                    {isWishListed ? '♥' : '♡'}
                </button>
            </div>
        </div>
    );
}
