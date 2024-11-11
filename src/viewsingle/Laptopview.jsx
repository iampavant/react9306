
import React from 'react';
import { useParams} from 'react-router-dom';

import { laptops } from '../Data/Laptopslice';

const Laptopview = () => {
  const { id } = useParams();
 
  const laptop = laptops.find((lap) => lap.id === Number(id));

  
  return (
    <div className="view-page">
      <div className="view-img">
        <img src={laptop.image} alt={laptop.name} height="300px" />
      </div>
      <h1>{laptop.name}</h1>
      <p>Price: {laptop.price}</p>
      <button className='btn btn-warning'>ADD TO CART</button>


    </div>
  );
};

export default Laptopview;
