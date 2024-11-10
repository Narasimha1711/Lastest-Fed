import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './card_med.css'


const Card_med = ({ image, price, content}) => {
  return (
    <>
        <Card sx={{ maxWidth: 345, borderRadius: '10px'}}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        style={{objectFit: "cover"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {content}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.primary' }}>
          {price}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </>
  )
}

export default Card_med
