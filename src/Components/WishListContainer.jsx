import React from 'react'
import './WishListContainer.css'
import {useSelector} from 'react-redux';
import WishListItemCard from './WishListItemCard';
export default function WishListContainer() {
    const products = useSelector(state => state.wishlistStore);
    return (
        <div className="wishlist-container flex-row " >
            {
                products.length == 0 ?
                // <Empty />
                <h1>Empty WishList</h1>
                :
                products.map((product,index) =>{
                    return (
                        <WishListItemCard item={product} />
                    )
                })
            }
        </div>
    )
}