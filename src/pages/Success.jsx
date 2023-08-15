import React from 'react'
import styles from '../styles/Success.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Success() {
  return (
    <div className={styles.container}>
        <Navbar/>
        <div className={styles.message}></div>
        <Footer/>
    </div>
  )
}
