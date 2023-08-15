import React, { useEffect, useState } from 'react'
import styles from '../styles/Checkout.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Checkout() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=6&skip=3')
    .then(res => {
      return res.json()
    })
    .then(function(jsonData){
      setProducts(jsonData.products)
    });
  },[])

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.cartList}>
        <h1 className={styles.heading}>My Cart</h1>
        <div className={styles.items}>
          {
            products.map((product)=>(
              <div className={styles.product}>
                <div className={styles.left}>
                  <img src={product.images[1]} alt="product image" />
                </div>
                <div className={styles.right}>
                  <p className={styles.brand}>Brand: <span>{product.brand}</span></p>
                  <p className={styles.name}>Name: <span>{product.title}</span></p>
                  <p className={styles.price}>Price: <span>${product.price}</span></p>
                </div>
              </div>
            ))
          }
        </div>   
        <div className={styles.bill}>
          <h3 className={styles.billHeading}>Bill Section</h3>
          <div className={styles.top}>
            <p className={styles.discount}>Discount: <span>$15.00</span></p>
            <p className={styles.tax}>Tax: <span>$21.00</span></p>
            <p className={styles.total}>Total: <span>$6,890.00</span></p>
          </div>
          <div className={styles.bottom}>
            <button className={styles.viewButton}>
              <a href="/success">Checkout Now</a>
            </button>
          </div>
        </div>  
      </div>
      <Footer/>
    </div>
  )
}
