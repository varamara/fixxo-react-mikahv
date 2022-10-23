import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = () => {
  return (
    <section className="product-grid">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>  
    </section>
  )
}

export default ProductGridSection