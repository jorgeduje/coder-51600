import React from "react";

import styles from "./Item.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 350,
        backgroundColor: "black",
        color: "white",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <CardMedia
        sx={{ height: 160, backgroundColor: "whitesmoke" }}
        image={element.img}
        title="green iguana"
      />
      <CardContent sx={{ height: 130 }}>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body2">{element.description}</Typography>
        <Typography variant="body">${element.price}.-</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button size="small" variant="contained" color="primary">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
