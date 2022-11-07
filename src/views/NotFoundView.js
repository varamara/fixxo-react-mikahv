import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const NotFoundView = () => {
  return (
    <>
      <MainMenuSection />
      <div className="container d-flex justify-content-center align-items-center" style={ { height: "700px" } }>
        <h1>404 - Page Not Found</h1>
      </div>
        <FooterSection />
    </>
  )
}

export default NotFoundView