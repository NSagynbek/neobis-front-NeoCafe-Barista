import "./reminderStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch } from "react-redux";
import { closeModal } from "../../redux";

function Reminder (){

    const dispatch = useDispatch()

    const handleCloseModal = ()=>{
        dispatch(closeModal())
    }

    return(
        <div className="reminder">
            <div className="reminder-text-container">
            <p className="bold">Напоминание!</p>
            <p className="reminder-text">Примите заказ М-47</p>

            <InputAdornment 
              position="end"
              className="reminder-icon"
              onClick={handleCloseModal}
            >
              <IconButton>
                <CloseIcon/>
              </IconButton>
            </InputAdornment>
            </div>

        </div>
    )
}

export default Reminder;