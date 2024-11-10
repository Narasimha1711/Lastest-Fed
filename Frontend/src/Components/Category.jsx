import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
 
export default function Category( {image, content}) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {/* Lizard */}
            {content}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}