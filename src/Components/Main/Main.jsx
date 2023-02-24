import React from "react";
// import Box from "@mui/material/Box";
import { Grid, Box, Typography } from "@mui/material";
const Main = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: { xs: "red", sm: "blue" },
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} lg={3} border={2} borderColor="red">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1rem", sm: "3rem" },
            }}
          >
            Hijo 1
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} border={2} borderColor="red">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1rem", sm: "3rem" },
            }}
          >
            Hijo 2
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} border={2} borderColor="red">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1rem", sm: "3rem" },
            }}
          >
            Hijo 3
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} border={2} borderColor="red">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1rem", sm: "3rem" },
            }}
          >
            Hijo 4
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;

