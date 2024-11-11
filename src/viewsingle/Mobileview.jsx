
import React from 'react';
import { useParams} from 'react-router-dom';
import { mobiles } from '../Data/Mobileslice';

const MobileView = () => {
  const { id } = useParams();
 
  const mobile = mobiles.find((mob) => mob.id === Number(id));

  
  return (
    <div className="view-page">
      <div className="view-img">
        <img src={mobile.image} alt={mobile.name} height="300px" />
      </div>
      <h1>{mobile.name}</h1>
      <p>Price: {mobile.price}</p>
      <button className='btn btn-warning'>ADD TO CART</button>

    </div>
  );
};

export default MobileView;
