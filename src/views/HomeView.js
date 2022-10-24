import React, {useState} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: ""},
    { id: 2, name: "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: ""},
    { id: 3, name: "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: ""},
    { id: 4, name: "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: ""},
  ])
  const [topProducts, setTopProducts] = useState([
    { id: 1, name: "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: ""},
    { id: 2, name: "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: ""},
    { id: 3, name: "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: ""},
    { id: 4, name: "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: ""},
  ])



  return (
    <>
    <MainMenuSection />
    <ProductGridSection title="Featured Products" products={featuredProducts} />
    <ProductGridSection title="Top Products" products={topProducts} />
    <FooterSection />
    </>
  )
}

export default HomeView