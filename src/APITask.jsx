import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const APITask = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="product-list" style={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className="product-card" style={styles.productCard}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} style={styles.productImage} />
          <div className="product-details" style={styles.productDetails}>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


const styles = {
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  productCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '12px',
  },
  productDetails: {
    marginTop: '12px',
  },
};

export default APITask;
