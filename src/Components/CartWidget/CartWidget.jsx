import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css"
const CartWidget = ({numero}) => {
  
  return (
    <div className="container-cart">
    <BsFillCartCheckFill
      style={{
        fontSize: "2rem",
        color: "#e1d4c7",
      }}
    />
    <div className="bubble-counter">
      <span>0</span>
    </div>
  </div>
  );
};

export default CartWidget;
