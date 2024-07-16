import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Snackbar, Alert } from '@mui/material';

import './styles/Products.css';
import ProductCard from './Product';

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Lego Package', description: 'This is product 1', image: 'https://www.lego.com/cdn/cs/set/assets/blt61f68cd89d49cc06/11029_alt1.png', isLiked: false },
    { id: 2, name: 'Chess', description: 'This is product 2', image: 'https://5.imimg.com/data5/PG/LD/CL/SELLER-14274915/magnetic-chess-game.jpg', isLiked: false },
    { id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://m.media-amazon.com/images/I/71x1TrqgSmL._AC_UF894,1000_QL80_.jpg', isLiked: false },
    { id: 4, name: 'Lego Package', description: 'This is product 1', image: 'https://www.lego.com/cdn/cs/set/assets/blt61f68cd89d49cc06/11029_alt1.png', isLiked: false },
    { id: 5, name: 'Chess', description: 'This is product 2', image: 'https://5.imimg.com/data5/PG/LD/CL/SELLER-14274915/magnetic-chess-game.jpg', isLiked: false },
    { id: 6, name: 'Product 3', description: 'This is product 3', image: 'https://m.media-amazon.com/images/I/71x1TrqgSmL._AC_UF894,1000_QL80_.jpg', isLiked: false },
  ]);

  const [likedProducts, setLikedProducts] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const toggleLike = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, isLiked: !product.isLiked } : product
    );
    setProducts(updatedProducts);

    const likedProduct = updatedProducts.find(product => product.id === id);

    if (likedProduct.isLiked) {
      setLikedProducts([...likedProducts, likedProduct]);
    } else {
      setLikedProducts(likedProducts.filter(product => product.id !== id));
    }

    const message = likedProduct.isLiked ? `You have added ${likedProduct.name}` : `You have removed ${likedProduct.name}`;
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="container">
    <div className="home-content text-center mb-5">
        <h1>מוצרים נבחרים</h1>
        <div className="card-body">
          <Grid style={{backgroundColor:'transparent'}} container spacing={3}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                isLiked={product.isLiked}
                onLikeToggle={() => toggleLike(product.id)}
              />
            ))}
          </Grid>
        </div>
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Products;
