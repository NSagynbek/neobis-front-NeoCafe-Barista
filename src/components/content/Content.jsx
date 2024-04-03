import OrdersContent from "../ordersContent/OrdersContet";
import MenuContent from "../menuContent/MenuContent";

const Content = ({selectedMenuItem}) => {
    
  
   switch (selectedMenuItem) {
    case 'orders':
       return <OrdersContent/>;
    case "menu":
      return <MenuContent/> 
     default:
       return null;
   }
};

export default Content;