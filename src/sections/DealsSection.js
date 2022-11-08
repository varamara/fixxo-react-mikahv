import React from 'react'
import ProductCard from '../components/ProductCard'

const DealsSection = ({ items = []}) => {

  return (
    <section className="deals-section">
      <div className="flash-sale">
          <div className="flash-info">
              <h1>2 FOR USD $29</h1>
              <button className="btn-theme">
                  <div className="corner-left"></div>
                  FLASH SALE
                  <div className= "corner-right"></div>
              </button>
          </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          items.map( product => <ProductCard key={product.articleNumber} item={product} />)
        }
      </div>

    </section>
  )
}

export default DealsSection