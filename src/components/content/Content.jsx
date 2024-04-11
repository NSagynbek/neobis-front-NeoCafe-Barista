import OrdersContent from "../ordersContent/OrdersContet";
import MenuContent from "../menuContent/MenuContent";
import ProfileContent from "../profileContent/ProfileContent";

const Content = ({selectedMenuItem}) => {
    
  
   switch (selectedMenuItem) {
    case 'orders':
       return <OrdersContent/>;
    case "menu":
      return <MenuContent/> 
    case "profile":
      return <ProfileContent/>  
     default:
       return null;
   }
};

export default Content;