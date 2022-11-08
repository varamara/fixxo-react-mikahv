import React, {useContext} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductsContext } from '../contexts/contexts'


const ProductsView = () => {

  window.top.document.title = 'Products | Fixxo.'

  const productsContext = useContext(ProductsContext);

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products"/>
    <ProductGridSection title="Products" items={productsContext.all}/>
    <FooterSection />
    </>
  )
}

export default ProductsView