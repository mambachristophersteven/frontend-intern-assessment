import React from 'react'
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'

const Links = [
    {
        id:1,
        title: 'Home',
        url: '/',
    },
    {
        id:2,
        title: 'Products',
        url: '/Products',
    },
    {
        id:3,
        title: 'Checkout',
        url: '/Checkout',
    },
]

const Categories = [
    {
        id:1,
        name: 'Electronics',
    },
    {
        id:2,
        name: 'Sports',
    },
    {
        id:3,
        name: 'Furniture',
    },
    {
        id:4,
        name: 'Men',
    },
    {
        id:5,
        name: 'Women',
    },
    {
        id:6,
        name: 'Kids',
    },
    {
        id:7,
        name: 'Beverages',
    },
    
]

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="/logo.png" alt="logo" />
            <div className={styles.nameAndTagline}>
                <p className={styles.companyName}>Somma<span>Store</span></p>
                <p className={styles.companyTagline}>This is some store!</p>
            </div>
        </div>
        <div className={styles.categories}>
        <ul>
            {Categories.map(Category=>(
                    <a href='#' key={Category.id} className={styles.category}>{Category.name}</a>
                ))}
            </ul>
        </div>
        <div className={styles.links}>
            <ul>
            {Links.map(Link=>(
                    // <Link key={Link.id} to={Link.url}>{Link.title}</Link>
                    <a href={Link.url} key={Link.id} className={styles.link}>{Link.title}</a>
                ))}
            </ul>
        </div>
    </div>
  )
}
