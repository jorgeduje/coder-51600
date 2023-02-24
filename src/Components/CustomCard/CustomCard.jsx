import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CustomCard = ( {title} ) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://res.cloudinary.com/dnqfh2chg/image/upload/v1677198880/1_h2pldAQbHdBLnjgVTaCOAg_wybjit.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Aca va la descripcion del producto o de lo que sea
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Share</Button>
        <Button size="small" variant="outlined">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
