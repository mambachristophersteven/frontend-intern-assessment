import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({data}) {
  return (
    <Link to={`/products/${data.id}`}>
      <div>{data.title}</div>
      <div>{data.price}</div>
      <img src={data.images[1]} alt="" />
    </Link>
  )
}
