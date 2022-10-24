import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log(`${e.target} added to wishlist`)
    }
    const addToCompare = (e) => {
        console.log(`${e.target} added to compare`)
    }
    const addToCart = (e) => {
        console.log(`${e.target} added to cart`)
    }

  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={`../assets/images/${product.img}`}  alt={product.name} />
                <div className="card-menu">
                    <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare}className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToCart}className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    QUICK VIEW
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </p>
                <p className="card-price">{product.price}</p>   
            </div>
        </div>
    </div>
  )
}

export default ProductCard