import OrdersContent from "../ordersContent/OrdersContet";

const Content = ({selectedMenuItem}) => {
    
  
   switch (selectedMenuItem) {
    case 'orders':
       return <OrdersContent/>;
     
     default:
       return null;
   }
};

export default Content;