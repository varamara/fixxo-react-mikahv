import React from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const ProductDetailsView = () => {

  const params = useParams()

  return (
    <>
    <MainMenuSection />
      <div className="container mt-5">
        <h1>{params.name}</h1>
      </div>
    <FooterSection />
    </>
  )
}

export default ProductDetailsView