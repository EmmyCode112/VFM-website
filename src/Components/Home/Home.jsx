import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Float from '../Footer.jsx/Float'
import Footer from '../Footer.jsx/Footer'
import FAQs from '../FAQs/FAQs'
import Blog from '../Blog/Blog'
import Wishlist from '../Wishlist/Wishlist'
import About from '../About/About'
import Offers from '../Offers/Offers'
import Testimonials from '../Testimonials/Testimonial'
// import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Wishlist/>
      <Blog/>
      <Offers/>
      <Testimonials/>
      <FAQs/>
      {/* <Contact/> */}
      <Footer/>
      <Float/>
    </div>
  )
}

export default Home
