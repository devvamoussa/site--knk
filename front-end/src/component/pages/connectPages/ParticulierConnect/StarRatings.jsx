import React from 'react'
import { FaStar } from 'react-icons/fa';
import "../../../css/connectePageCss/ConnectParticulierCss/StarRating.css"

const colors = {
    orange : "#FFA500",
    grey : "#a9a9a9"
}

function StarRatings() {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0)
    const [hoverValue, setHoverValue] = React.useState(undefined)
    // const [rating, setRating] = useState(null);

    const handleClick = value =>{
        setCurrentValue(value)
    }

    const handleMouseOver = value =>{
        setHoverValue(value)

    }

    const handelMouseLeave = () =>{
        setHoverValue(undefined)
    }
    
    
    
    




  return (
    <>

        <div className="starDixplay">
            {stars.map((_, index)=>{
                return(
                    <div className="starDixplayNone">
                        <label>
                            {/* <input type="radio" name="" id="" onClick={() => setRating(ratingValue)} value={ratingValue} /> */}
                        <FaStar key={index}
                            style={{
                            cursor: "pointer"
                            }}
                        
                            color= {(hoverValue || currentValue) > index ? colors.orange : colors.grey }
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={()=> handleMouseOver(index + 1)}
                            onMouseLeave={()=> handelMouseLeave(index + 1)}
                        
                        />
                        </label>
                    </div>
                    
                )
            })}
        </div>
        
    
    </>
  )
}

export default StarRatings