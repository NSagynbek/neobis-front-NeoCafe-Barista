import "./menuContentStyles.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import MenuCard from "../menuCard/MenuCard";
import {useDispatch} from "react-redux";
import { openCart } from "../../redux";

function MenuContent(){

  const dispatch = useDispatch()

    const [pageCount,setPageCount]=useState(1)
    const [activeSection,setactiveSection]=useState("coffee");
    
    const menu = [1, 2, 3,4,5,6];
    const pageControl = (event, p) => {
        setPage(p);
      };
    const handleClick = (section)=>{
        setactiveSection(section===activeSection?null:section);
    }  

    const isActive = (section) =>(section===activeSection);  

    const openCartDetails = ()=>{
      dispatch(openCart())
    }

    return(
        <div className="menu-content-container">
         <div className="menu-categories-container">
            <button 
              className={`menu-categories-btn ${isActive("coffee")?"active":""}`}
              onClick={()=> handleClick ("coffee")}
            >
                <img src="" alt="" />
              Кофе
            </button>
            <button 
              className={`menu-categories-btn ${isActive("bakery")?"active":""}`}
              onClick={()=> handleClick ("bakery")}
              >
                <img src="" alt="" />
            Выпечка
            </button>
            <button 
              className={`menu-categories-btn ${isActive("dessert")?"active":""}`}
              onClick={()=> handleClick ("dessert")}
            >
                <img src="" alt="" />
            Десерты
            </button>
            <button 
              className={`menu-categories-btn ${isActive("beverages")?"active":""}`}
              onClick={()=> handleClick ("beverages")}
              >
                <img src="" alt="" />
            Напитки
            </button>
         </div>

         <main className="menu-content">
          
            {menu.map((item, index) => (
                <MenuCard key={index} />
               ))}
         </main>
        <button 
          className="menu-cart-btn"
          onClick={openCartDetails}
        >
          <span>Заказ на вынос</span>
          <span>0 сом</span>
        </button>
         <div className="pagination-container menu">
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

export default MenuContent;