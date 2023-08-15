import React from 'react'
import styles from '../styles/Success.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Success() {
  return (
    <div className={styles.container}>
        <Navbar/>
        <div className={styles.message}>
            <img src="/check.svg" alt="checkmark" />
            <p className={styles.success}>Thanks for shopping with us</p>
            <button className={styles.viewButton}>
              <a href="/">Continue Shopping</a>
            </button>
        </div>
        <Footer/>
    </div>
  )
}
