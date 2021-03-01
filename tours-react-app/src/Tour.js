import React, { useState } from 'react';

//need to de structure all the properties from the object
const Tour = ({ id, image, info, name, price, removeTour }) => {

  //Boolean state to store the read more variable
  //used for the read more section , default needs to be false
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
    {/* Image of component */}
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {/* If readmore is true then display otherwise show just 200 elements  */}
        {readMore ? info : `${info.substring(0, 200)}...`}
        {/* Setting up read more here */}
        <button onClick={() => setReadMore(!readMore)}>
            
          {readMore ? 'show less' : '  read more'}
        </button>
      </p>
      {/* Remove button if not interested */}
      {/* need to pass id to remove tour function */}

      <button className="delete-btn" onClick={() => removeTour(id)}>
        not interested
      </button>
    </footer>
  </article>
  );
};

export default Tour;