import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({data}) => {
  return (
    <div>
      <div 
        style={{width:"80vw", display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",marginLeft:"100px",gap:"20px"}}
      >
        {
            data.map((item,id)=>{
                return <div style={{display:"flex", border:"1px solid black", width:"400px"}}>
                    <div key={id} className='mobile-img'>
                        <img style={{height:"150px",width:"150px"}} src={item.img} alt='img-src'/>
                    </div>
                    <div style={{marginLeft:"30px"}}>
                        <h1 style={{textAlign:"center"}}>{item.title}</h1>
                        <div>
                            <span>Price: {item.price}</span>
                            <Link style={{borderRadius:"3px",padding:"5px",marginLeft:"20px",backgroundColor:"gray",color:"white"}} 
                            to={`/products/${id}`}>Buy</Link>
                        </div>
                    </div>
                </div>
            })
        }
      </div>
    </div>
  );
}

export default ProductList;