import { Typography } from "@mui/material";
import CustomCard from "./Components/CustomCard/CustomCard";
import CustomNavbar from "./Components/CustomNavbar/CustomNavbar";
import Main from "./Components/Main/Main";
import PruebasMUI from "./Components/PruebasMUI/PruebasMUI";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Main />
      <Typography variant="h2" align="center" color="primary">
        Aca el nombre de la empresa
      </Typography>
      <CustomCard title="titulo 1" />
      <PruebasMUI />
    </div>
  );
}

export default App;
