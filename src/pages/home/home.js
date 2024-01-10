import Featured from "../../components/featured/featured"
import FeaturedProperties from "../../components/featuredProperties/featuredProperties"
import Footer from "../../components/footer/footer"
import MailList from "../../components/mailList/mailLst"
import Header from "../../components/navbar/header/header"
import Navbar from "../../components/navbar/navbar"
import PropertyList from "../../components/propertyList/propertyList"
import "./home.css" 
import React from "react"

const Home=()=>{
    return(
        <div>
        
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
<FeaturedProperties/>
<MailList/>
<Footer/>
        </div>
        </div>
    )
}
export default Home 