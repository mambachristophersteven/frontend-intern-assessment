import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductDetails() {
  const [product, setProduct] = useState(null)
  const params = useParams();
  useEffect(()=>{
    fetch('https://dummyjson.com/products/'+params.id)
    .then(res => {
      return res.json()
    })
    .then(function(jsonData){
      setProduct(jsonData)
    });
  },[])

  if(product==null){
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.left}>
            <img src={product.images[1]} alt="product image"/>
            <p className={styles.description}>Description: <br /><span>{product.description}</span></p>
          </div>
          <div className={styles.right}>
            <p className={styles.brand}>Brand: <span>{product.brand}</span></p>
            <p className={styles.name}>Name: <span>{product.title}</span></p>
            <p className={styles.category}>Category: <span>{product.category}</span></p>
            <p className={styles.price}>Price: <span>${product.price}</span></p>
            <p className={styles.rating}>Rating: <span>{product.rating}</span></p>
            <p className={styles.stock}>Number In Stock: <span>{product.stock}</span></p>
            <p className={styles.discountPercentage}>Percentage Discount: <span>{product.discountPercentage}</span></p>
          </div>
        </div>
        <div className={styles.middle}>
          <p className={styles.middleText}>Other Images</p>
          <div className={styles.alternatives}>
            <img src={product.images[2]} alt="" />
            <img src={product.images[3]} alt="" />
          </div>
        </div>
        <div className={styles.bottom}>
          <button className={styles.viewButton}>
            <a href="/checkout">Add To Cart</a>
            </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

//{product.title}