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
      <Footer/>
    </div>
  )
}

//{product.title}