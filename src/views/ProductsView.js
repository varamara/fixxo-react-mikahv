import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'

const ProductsView = () => {

  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products"/>
    <FooterSection />
    </>
  )
}

export default ProductsView