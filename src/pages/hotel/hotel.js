
import "./hotel.css"
import Header from "../../components/navbar/header/header"
import Navbar from "../../components/navbar/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faDirections, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/mailLst"
import Footer from "../../components/footer/footer"
import { useState } from "react"
const Hotel = () => {
    const[slideNumber,setSlideNumber]=useState(0);
    const[open,setOpen]=useState(false);

    const photos = [
        {
            src: "https://images.squarespace-cdn.com/content/v1/57c9a72c15d5dbf908c5bfb3/716812ed-c46d-42d3-857e-d04b8a73be59/elmBNAEW.811012.jpg?format=1000w"
        },
        {
            src: "https://cdn2.hubspot.net/hubfs/4129352/hotel%20bathroom%20mayfair%20king%20suite.jpg"
        },
        {
            src: "https://media.istockphoto.com/id/184618876/photo/hotel-corridor.jpg?s=612x612&w=0&k=20&c=FO4KKa2zZJS36numdrFyUKtw6DIRoosrX6eikyfZTNs="
        },
        {
            src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
        },
        {
            src: "https://media.gettyimages.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=170667a&w=gi&k=20&c=hFxNza2_jdqaqPdFP0fwG2ZmFzURC8KdRjA1PO4DAos="
        },
        {
            src: "https://images.adsttc.com/media/images/63a2/51af/a452/0844/834f/402a/newsletter/theros-all-suite-hotel-mastrominas-architecture_40.jpg?1671582238"
        },
    ]
    const handleOpen=(i)=>{
setSlideNumber(i);
setOpen(true);
    }
    const handleMove=(direction)=>{
        let newSlideNumber;
        if(direction=="l"){
            newSlideNumber=slideNumber==0?5:slideNumber-1
        }else{
            newSlideNumber=slideNumber==5?0:slideNumber+1

        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
              { open && <div className="slider">
               <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
               <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
               <div className="sliderWrapper"> 
               <img src={photos[slideNumber].src} alt=""  className="sliderImg"/></div>
               <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>

                     </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAdress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Nizamabad , Telangana</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in heart of Krishna</h1>
                            <p className="hotelDesc">Hotel Sri Krishna is a good choice for travellers looking for a budget accomodation in Hyderabad. It is located in Lakdikapul. Hotel is rated 3.2 out of 5, which is considered as average.

From all the Budget hotels in Hyderabad, Hotel Sri Krishna is very much popular among the tourists. A smooth check-in/check-out process, flexible policies and friendly management garner great customer satisfaction for this property. The Hotel has standard Check-In time as 12:00 PM and Check-Out time as 11:00 AM.
</p>
                        </div>
                        <div className="hotelDetailsPrice">
<h1>Perfect for a 9-night stay!</h1><br/>
<span>
    Located in the real heart of Krishna, this property has an 
    excellent location score of 9.8!
</span>
<h2>
    <b>$945</b>(9 nights)
</h2>
<button>Reserve or Book Now!</button>
</div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default Hotel