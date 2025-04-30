import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetails = ({data}) => {
    const {id}=useParams(); 
    console.log(id);
  return (
    <div style={{display:"flex", marginLeft:"225px",gap:"150px"}}>
        <div className='img'>
            <img style={{height:"500px",width:"400px"}} src={data[id].img} alt='detailed-img'/>
        </div>
        <div className='details' style={{fontSize:"30px",width:"500px"}}>
            <h1 style={{}}>{data[id].title}</h1>
            <p>Price: {data[id].price} Rs</p>
            <h3>Desc:</h3>
            <p>{data[id].desc}</p>
            <Link to="/" style={{borderRadius:"3px",padding:"7px",marginLeft:"250px",backgroundColor:"gray",color:"white"}}>Other Products</Link>
        </div>
      
    </div>
  );
}

export default ProductDetails;