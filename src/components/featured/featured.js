 import "./featured.css"

 const Featured=()=>{
    return(
        <div className="featured">
           <div className="featuredItem">
            <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/oneday-trip-hyderabad.jpg" alt=" " className="featuredImg"/>
            <div className="featuredTitles">
                 <h1>Temples</h1>
            <h1>30 properties</h1>
            </div>
           </div>
          

           <div className="featuredItem">
            <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg" alt=" " className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Beach</h1>
            <h1>30 properties</h1>
            </div>
           </div> 
           
           
            <div className="featuredItem">
            <img src="https://static.toiimg.com/photo/54327403.cms" alt=" " className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Kerala</h1>
            <h1>30 properties</h1>
            </div>
           </div>
        </div>
    )
 }
 export default Featured