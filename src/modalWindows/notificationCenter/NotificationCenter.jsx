
import "./notificationCenter.css";
import CloseIcon from '@mui/icons-material/Close';
import { InputAdornment,IconButton } from "@mui/material";
import Notification from "../../components/notification/Notification";

function NotificationCenter({handleClick}){

  const closeNotificationModal=()=>{
    handleClick();
  }
  
    return (
        <div className="notification-main">
            <header className="notification-main__header">
                <p className="notification-main__title">Уведомления</p>
                <InputAdornment position="end" 
                  className="notification-main__icon_close"
                  onClick={closeNotificationModal}
                >
                  <IconButton>
                    <CloseIcon style={{color:"white"}}/>
                  </IconButton>
                </InputAdornment>
            </header>

           <div className="notification-content-container">
            <button className="notification-content__btn_clear">Очистить</button>
              <Notification/> 
           </div> 
        </div>
    )
}

export default NotificationCenter;