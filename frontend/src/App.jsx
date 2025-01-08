import Banner from "./componenets/Banner/Banner"
import Banner2 from "./componenets/Banner/Banner2"
import Blogs from "./componenets/Blogs/Blogs"
import Category from "./componenets/Category/Category"
import Category2 from "./componenets/Category/Category2"
import Hero from "./componenets/Hero"
import Navbar from "./componenets/Navbar"
import Partner from "./componenets/Partner/Partner"
import Product from "./componenets/Product/Product"
import Service from "./componenets/Service/service"
import Footer from "./componenets/Footer"
import Popup from "./componenets/Popup/Popup"
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"



const App = () => {

  const [orderPopup, setOrderPopup] = useState(false)

  const handlePopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh()
  })
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handlePopup={handlePopup} />
      <Hero handlePopup={handlePopup} />
      <Category />
      <Category2 />
      <Service />
      <Banner />
      <Product />
      <Banner2 />
      <Blogs />
      <Partner />
      <Footer />
      <Popup orderPopup={orderPopup} handlePopup={handlePopup} />
    </div>
  )
}

export default App
