import "./searchItem.css"
import { useNavigate } from "react-router-dom"
const SearchItem=()=>{
    const navigate=useNavigate()

    const handleAva=()=>{
        navigate("/hotels/id")
        }
    return(
        <div className="searchItem"> 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOz_GgVyBg0bhU3e-uqaKgvFij_IPrpp_r6OQvDtCiI0qgYEEL-9h5XxVdZOCQEH7gxT0&usqp=CAU" alt="" 
className="siImg"/>
<div className="siDesc">
    <h1 className="siTitle">Tower Street Apartment</h1>
    <span className="siDistance">500m from center</span>
    <span className="siTaxiOp">Free airport taxi</span>
    <span className="siSubtitle">Studio Apartment with AC</span>
    <span className="siFeatures">
        Entire studio 1 bathroom 21m 1 full bed</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancleOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>

</div>
<div className="siDetails">
<div className="siRating">
    <span>Excellent</span>
    <button>8.9</button>
</div>
<div className="siDeatilTexts">
    <span className="siPrice">1023RS/-</span>
    <span className="siTaxOp">Including taxes and fees</span><br></br>
<button className=" siCheckBtn" onClick={handleAva} > See Availability</button>
</div>

</div>


        </div>
       
    )
}
export default SearchItem