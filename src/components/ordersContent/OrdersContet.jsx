import "./ordersContentStyles.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import OrderCard from "../orderCard/OrderCard";

function OrdersContent (){

    const [pageCount,setPageCount]=useState(1)
    const [activeSection,setactiveSection]=useState("new");

    const pageControl = (event, p) => {
        setPage(p);
      };
    const handleClick = (section)=>{
        setactiveSection(section===activeSection?null:section);
    }  

    const isActive = (section) =>(section===activeSection);  
    return(
        <div className="orders-content">
            <header className="orders-header">
                <button 
                  className={`orderStatusBtns ${isActive("new")?"active":""}`}
                  onClick={()=>handleClick("new")}
                >
                    <span className="new"></span>
                    Новые
                </button>
                <button 
                  className={`orderStatusBtns ${isActive("on-process")?"active":""}`}
                  onClick={()=>handleClick("on-process")}
                >
                    <span className="on-process"></span>
                    В процессе
                </button>
                <button 
                  className={`orderStatusBtns ${isActive("ready")?"active":""}`}
                  onClick={()=>handleClick("ready")}
                >
                    <span className="ready"></span>
                    Готово
                </button>
                <button 
                  className={`orderStatusBtns ${isActive("canceled")?"active":""}`}
                  onClick={()=>handleClick("canceled")}
                >
                    <span className="canceled"></span>
                    Отменено
                </button>
                <button 
                  className={`orderStatusBtns ${isActive("complete")?"active":""}`}
                  onClick={()=>handleClick("complete")}
                >
                    <span className="complete"></span>
                    Завершено
                </button>
            </header>
            <main className="orders-container">
            { 
   
              Array.from({ length: 8 }).map((_, index) => (
                  <OrderCard key={index} />
              ))
            }

              

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
    )
}

export default OrdersContent;