import React, { useEffect, useState } from 'react'
import styles from '../styles/Products.module.css'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Footer from '../components/Footer'



export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
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
      <div className={styles.allProducts}>
        {
          products.map((product)=><Product key={product.id} data={product}/>)
        }
      </div>
      <Footer/>
    </div>
  )
}
