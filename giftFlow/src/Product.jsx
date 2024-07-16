import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton,Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles/product.css'
export default function ProductCard({ id, name, description, image, isLiked, onLikeToggle }) {
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Card className="product-card transparentBackground">
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image}
          className="product-image transparentBackground"
        />
        <CardContent className="card-content transparentBackground">
          <Typography gutterBottom variant="h5" component="div" className="product-name transparentBackground">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="product-description transparentBackground">
            {description}
          </Typography>
          {/* <div className="icon-container transparentBackground">
            <IconButton aria-label="add to favorites" onClick={onLikeToggle}>
              <FavoriteIcon color={isLiked ? "error" : "default"} />
            </IconButton>
          </div> */}
        </CardContent>
      </Card>
    </Grid>
  );
}