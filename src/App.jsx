import React from "react"
import "./index.css"
import Navbar from "./Navbar"
import Banner from "./Banner"
import Categories from "./Categories"
import Promo from "./Promo"
import About from "./About"
import Menu from "./Menu"
import Review from "./review"
import Contact from "./Contact"
import Footer from "./Footer"

const App = () => {
    return(
        <>
            <Navbar/>
            <Banner/>
            <Categories/>
            <Promo/>
            <About/>
            <Menu/>
            <Review/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App