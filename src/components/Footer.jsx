import React from 'react'
import styles from '../styles/Footer.module.css'


const Links = [
  {
    id:1,
    name: 'Home'
  },
  {
    id:2,
    name: 'Products'
  },
  {
    id:3,
    name: 'About'
  },
  {
    id:4,
    name: 'Terms & Conditions'
  },
  {
    id:5,
    name: 'Blog'
  },
]
export default function Footer() {
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.nameAndTagline}>
          <p className={styles.name}>Somma<span>Store.</span></p>
          <p className={styles.tagline}>This be some store oh!</p>
        </div>
        <div className={styles.socials}>
          <img src="/facebook.svg" alt="facebook" />
          <img src="/twitter.svg" alt="twitter" />
          <img src="/instagram.svg" alt="instagram" />
          <img src="/whatsapp.svg" alt="whatsapp" />
        </div>
        <div className={styles.emailTelephone}>
          <p className={styles.email}>hr@sommalife@gmail.com</p>
          <p className={styles.telephone}>0244566789</p>
        </div>
      </div>
      <div className={styles.middle}>
        {Links.map(Link=>(
          <p key={Link.id} className={styles.link}>{Link.name}</p>
        ))}
      </div>
      <div className={styles.right}>
        <p className={styles.smallTalk}>
          This is the best store anywhere. Delivery on point and all that
        </p>
        <img src="/logo.png" alt="logo" />
      </div>
    </div>
  )
}
