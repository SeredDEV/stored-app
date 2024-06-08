import React from 'react'
import Cartshop from '../components/Cartshop/Cartshop'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Pruebas from '../components/NewCollections/NewCollections'

const Shop = () => {
    return (
        <div>
            <Cartshop />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop
