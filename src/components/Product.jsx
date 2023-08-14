import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Product.module.css'

export default function Product({data}) {
  return (
    <Link to={`/products/${data.id}`}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <img src={data.images[1]} alt="product image" className={styles.productImage}/>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.brand}>{data.brand}</p>
            <p className={styles.name}>{data.title}</p>
            <p className={styles.category}>{data.category}</p>
            <p className={styles.price}>${data.price}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <button className={styles.viewButton}>View Details</button>
        </div>
      </div>
    </Link>
  )
}
