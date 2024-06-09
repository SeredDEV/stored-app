import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrums'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'

const Product = () => {

  const { all_products } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_products.find((e) => e.id === Number(productId));
  console.log(product)
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox description={product.description} />
    </div>
  )
}

export default Product
