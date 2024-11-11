
import React from 'react';
import { useParams} from 'react-router-dom';
import { tvs } from '../Data/TVslice';

const MobileView = () => {
  const { id } = useParams();
 
  const tv = tvs.find((t) => t.id === Number(id));

  
  return (
    <div className="view-page">
      <div className="view-img">
        <img src={tv.image} alt={tv.name} height="300px" />
      </div>
      <h1>{tv.name}</h1>
      <p>Price: {tv.price}</p>
  
      <button className='btn btn-warning'>ADD TO CART</button>


    </div>
  );
};

export default MobileView;
