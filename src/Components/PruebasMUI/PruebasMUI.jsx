import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";
const PruebasMUI = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: "none" }}
        // disabled={true}
      >
        Este es un boton
      </Button>


      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Nombre" variant="outlined" color="secondary" size="small"/>
    </Box>
    </div>
  );
};

export default PruebasMUI;
