import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImg from '../assets/images/GridImage.jpg'

const ProductCard = () => {
  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={TempImg} alt="" />
                <div className="card-menu">
                    <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to="/products" className="btn-theme btn-card-theme">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    QUICK VIEW
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">Category</p>
                    <h5 className="card-title">Modern Black Blouse</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </p>
                <div className="card-price">
                    <p className="card-new-price">$35.00</p>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard