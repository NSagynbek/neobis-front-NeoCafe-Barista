import "./cancelOrderStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import {useDispatch } from "react-redux";
import { closeModal } from "../../redux";

function CancelOrder(){
    const dispatch = useDispatch()
     
    const [activeSection, setActiveSection]=useState("yes")

    const handleCancelation = (answer)=>{
        setActiveSection(answer===activeSection?null:answer);
    }

    const handleCloseWindow = ()=>{
        dispatch(closeModal())
    }

    const isActive = (answer)=>(answer===activeSection);

    return(
        <div className="cancel-order-container">
            <header className="cancel-order-header">
                <p className="cancel-order-title">Отменить заказ</p>
                <InputAdornment 
                  position="end"
                  className="cancel-close-icon"
                  onClick={handleCloseWindow}
                >
                    <IconButton>
                        <CloseIcon style={{color:"#2A3440"}}/>
                    </IconButton>
                </InputAdornment>
            </header>
            <p className="cancel-order-text">
                Вы действительно хотите отменить заказ М-47?
            </p>
            <div className="cancel-order-buttons">
                <button
                className={`cancel-btn ${isActive("yes")?"active":""}`}
                onClick={()=>handleCancelation("yes")}
                >
                  Да
                </button>
                <button
                 className={`no-btn ${isActive("no")?"active":""}`}
                onClick={()=>{
                    handleCancelation("no")
                    handleCloseWindow()
                }}
                >
                  Нет
                </button>
            </div>
        </div> 
    )
}

export default CancelOrder;