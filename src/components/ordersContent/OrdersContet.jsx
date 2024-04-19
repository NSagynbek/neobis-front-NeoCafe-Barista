import "./ordersContentStyles.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";
import OrderCard from "../orderCard/OrderCard";
import {useDispatch } from "react-redux";
import { openModal } from "../../redux";
import { getAllOrders } from "../../api";
import { useSelector } from "react-redux";
import { orderTypeConvert } from "../../utils";
import { getCookie } from "../../api/tokenService";


function OrdersContent (){


  
  const dispatch = useDispatch()
  const headerActiveSection = useSelector((state)=>state.headerActiveSection);
  const [orders, setOrders] = useState([]);
  const [pageCount,setPageCount]=useState(1)
  const [activeSection,setactiveSection]=useState("Новый");
  
   useEffect(()=>{
    const branch = localStorage.getItem('branch');
    const getOrders = async ()=>{
      try{
        const response = await getAllOrders(branch)
        setOrders(response.data);
        console.log(response.data)
      }catch(error){
        console.log(error.response.status)
      }  
    }
    getOrders()
   },[])


    const filterOrdersByStatus = (status,orderType) => {
      console.log("***************",status)
      return orders.filter(order => order.order_status === status&&order.order_type===orderType);
    };

   
  
    const pageControl = (event, p) => {
        setPage(p);
      };
    const handleClick = (section)=>{
        setactiveSection(section===activeSection?null:section);
    }  

    const handleOpenModal = (modalName) => {
      dispatch(
        openModal({
          name: modalName,
        })
      );
    };

    
    const isActive = (section) =>(section===activeSection);  

    return (
      <div className="orders-content">
        <header className="orders-header">
          {["Новый", "В процессе", "Готово", "Отменено", "Завершено"].map((status,index) => (
            <button
              key={status}
              className={`orderStatusBtns ${activeSection === status ? "active" : ""}`}
              onClick={() => handleClick(status)}
            >
              <span className={`status-icon-${index + 1}`}></span>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </header>
        <main className="orders-container">
          {filterOrdersByStatus(activeSection,orderTypeConvert(headerActiveSection)).map((order, index) => (
            <OrderCard 
              key={index} 
              order={order} />
          ))}
        </main>
        <div className="pagination-container">
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              variant="outlined"
              shape="rounded"
              onChange={pageControl}
            />
          </Stack>
        </div>
      </div>
    );
}

export default OrdersContent;