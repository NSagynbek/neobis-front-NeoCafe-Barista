import "./sideBarStyles.css";
import { useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { sideBarIconsStyles } from "../../utils";
import Create from "@mui/icons-material/Create";
import { removeCookie } from "../../api/tokenService";
import {useNavigate} from "react-router-dom";

function SideBar({onSelct}) {

  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
     onSelct(section);
    setActiveSection(section === activeSection ? null : section);
  };

  const isActive = (section) => section === activeSection;

 
 const handleExit = ()=>{
   removeCookie("tokenData");
   navigate("/")
 }

  return (
    <main className="sideBar">
      <header className="sideBar__logo-text">
        <span className="sideBar-neo">neo</span>
        <span className="cafe">cafe</span>
      </header>

      <section className="admin-sections">
        <div className="admin-sections__container">
          <label htmlFor="menuBtn">
            <button
              onClick={() => handleButtonClick("orders")}
              className={`section-btn ${isActive("orders") ? "active" : ""}`}
              id="menuBtn"
            >
              Заказы
            </button>
          </label>
          <InputAdornment 
            className="section-icons" 
            position="start"
          >
            <IconButton onClick={() => handleButtonClick("orders")}>
              <CreateIcon style={sideBarIconsStyles} />
            </IconButton>
          </InputAdornment>         
        </div>

        <div className="admin-sections__container">
          <label htmlFor="menuBtn">
            <button
              onClick={() => handleButtonClick("menu")}
              className={`section-btn ${isActive("menu") ? "active" : ""}`}
              id="menuBtn"
            >
              Меню
            </button>
          </label>
          <InputAdornment 
            className="section-icons" 
            position="start"
          >
            <IconButton onClick={() => handleButtonClick("menu")}>
              <ImportContactsIcon style={sideBarIconsStyles}/>
            </IconButton>
          </InputAdornment>
        </div>
        <div className="admin-sections__container">
          <label htmlFor="menuBtn">
            <button
              onClick={() => handleButtonClick("profile")}
              className={`section-btn ${isActive("profile") ? "active" : ""}`}
              id="menuBtn"
            >
              Профиль
            </button>
          </label>
          <InputAdornment 
            className="section-icons" 
            position="start"
          >
            <IconButton onClick={() => handleButtonClick("profile")} >
              <PermIdentityIcon style={sideBarIconsStyles} />
            </IconButton>
          </InputAdornment>
        </div>
       

        <footer >
          <div className="exit-icon-container" onClick={handleExit}>             
               <button 
                 className="exit-icin__btn" 
                 id="exit-icon"
                >
                 Выйти
               </button>           
             <InputAdornment 
               className="exit-icon-icon" 
               position="start"
             >
               <IconButton>
                 <ExitToAppIcon style={sideBarIconsStyles}/>
               </IconButton>
             </InputAdornment>
           </div>
        </footer>
      </section>
    </main>
  );
}

export default SideBar;