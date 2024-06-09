import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrums'

const Product = () => {

  const { all_products } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_products.find((e)=> e.id === Number(productId));
  console.log(product)
  return (
    <div>
      <Breadcrum product={product} />
    </div>
  )
}

export default Product
