import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function App({noOfStars = 5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

  return(
      <div className="star_rating">
          {
              [...Array(noOfStars)].map((_, index)=>{
                    return <FaStar
                        className={index+1 <= (hover || rating) ? 'active' : 'inactive'}
                        size={40}
                        key={index}
                        onClick={()=> handleClick(index + 1)}
                        onMouseEnter={()=> handleMouseEnter(index + 1)}
                        onMouseLeave={()=> handleMouseLeave()}
                    />
              })
          }
      </div>
  );
}

export default App;