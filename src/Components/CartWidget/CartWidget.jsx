import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = ({numero}) => {
  
  return (
    <div>
      <span>0</span>
      <BsFillCartCheckFill color="blue" size={30} />
    </div>
  );
};

export default CartWidget;
