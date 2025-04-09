import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Products from './Products';

export function ProductsRoute() {
    const { type } = useParams();
    const [fetchedProducts, setFetchedProducts] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:3007/products?gender=${type}`)
        .then((res) => res.json())
        .then((data) => setFetchedProducts(data))
        .catch((err) => {
          console.error("Error fetching products:", err);
          setFetchedProducts([]);
        });
    }, [type]);
  
    return <Products products={fetchedProducts} />;
  }
  