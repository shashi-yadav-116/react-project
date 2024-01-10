import "./featuredProperties.css"

const FeaturedProperties=()=>{
    return(
        <div className="fp">
             <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/501022272.jpg?k=7c51aa018fee1ac07e453d6833cd806b97c5ab7f7c186d050f2f43fb11abce6c&o=&hp=1" height={295}  alt="" className="fpImg"/>
 <span className="fpName">Hotel Krishna</span><br/>
 <span className="fpCity">Nizamabad</span><br/>
 <span className="fpPrice">Starting from 5000Rs/-</span>
 <div className="fpRating">
    <button>8.9</button>
    <span>Excellent </span>
 </div>
 </div>
 <div className="fpItem">
            <img src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg" height={295} alt="" className="fpImg"/>
 <span className="fpName">Hotel Swapna</span><br/>
 <span className="fpCity">Nizamabad</span><br/>
 <span className="fpPrice">Starting from 6000Rs/-</span>
 <div className="fpRating">
    <button>8.9</button>
    <span>Excellent </span>
 </div>
 </div>
 <div className="fpItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f5/5b/94/lobby--v17452003.jpg?w=700&h=-1&s=1"height={295} alt="" className="fpImg"/>
 <span className="fpName">Park Hayat Hotel</span><br/>
 <span className="fpCity">Hyderabad</span><br/>
 <span className="fpPrice">Starting from 15000Rs/-</span>
 <div className="fpRating">
    <button>9.5</button>
    <span>Excellent </span>
 </div>
 </div>
 <div className="fpItem">
            <img src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1435096439/Domestic%20Hotels/Hotels_Nizamabad/Hotel%20Nikhil%20Sai%20International/Enterance.jpg" height={295} alt="" className="fpImg"/>
 <span className="fpName">Nikhil Sai International</span><br/>
 <span className="fpCity">Nizamabad</span><br/>
 <span className="fpPrice">Starting from 5000Rs/-</span>
 <div className="fpRating">
    <button>8.9</button>
    <span>Excellent </span>
 </div>
 </div>
        </div>
    )
}
export default FeaturedProperties