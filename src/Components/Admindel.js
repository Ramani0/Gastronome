
import './Admindel.css'

import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
const Admindel = () => {

    const [products, setProducts] = useState([]);

  

    useEffect(() => {
      // Fetch products data from the API
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);
  
    const handleDelete = async (productId) => {
      try {
        await fetch(`http://localhost:5000/api/product/${productId}`, {
          method: 'DELETE'
        });
        alert("successfully deleted!!!!!!!!!!")
        // Filter out the deleted product from the products array
        setProducts(products.filter(product => product._id !== productId));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };

  return (
    <div>
         <div className='row'>
        {products.map(product => ( 


        <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card mb-3" style={{width: '20rem'}}>
      <img class="card-img-top"  src={product.picture}  style={{height:'350px'}} alt="Card image cap" />
      <div class="product-detail">
        <h5 class="card-title heading text-center">{product.name}</h5>
        <span class="subheading">Good Foods</span>
        <blockquote>
          <p>{product.description}</p>
          <p class="card-text"><strong>Price: {product.price}</strong></p>
        </blockquote>
        <Link to="/Order"><button type="button" class="btn btn-outline-dark">BUY NOW</button></Link>

       <button class="btn btn-danger delete-button"onClick={() => handleDelete(product._id)}>Delete</button> 
              
      </div>
    </div>
  </div>))}
    </div>
    </div>
  )
}

export default Admindel