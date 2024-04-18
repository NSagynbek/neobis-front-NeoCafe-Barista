import "./ordersStyles.css";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerActiveSection } from "../../redux";

function Orders ({firstOption,secondOption}){

    const dispatch = useDispatch();

    const [activeSection, setActiveSection]=useState(firstOption)

    useEffect(()=>{
        setActiveSection(firstOption)
    },[firstOption])

    useEffect(()=>{
        dispatch(headerActiveSection(activeSection));
    },[activeSection])

    const handleClick = (section)=>{
        setActiveSection(section === activeSection ? null : section);
    }
    
    const isActive = (section)=>{
        return section===activeSection
    }
    

    return (
        <div className="orders">
            <button 
              className={`takeaway ${isActive(firstOption) ? "active" : "" }`}
              onClick={()=>handleClick(firstOption)}
            >
                {firstOption}
            </button>
            <button 
              className={`inhouse ${isActive(secondOption)? "active":""}`}
              onClick={()=>handleClick(secondOption)}
            >
                {secondOption}
            </button>
        </div>

    )
}

export default Orders;