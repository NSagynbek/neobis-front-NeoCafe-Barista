import "./menuItemDetailsStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import cheeseCake from "../../assets/cheeseCake.png"
import {useDispatch} from "react-redux"
import {closeModal} from "../../redux"

function MenuItemDetails(){
  const dispatch = useDispatch();

  const handleCloseModal = ()=>{
    dispatch(closeModal())
  }
    
    return(
        <div className="menu-item-details">
             <header className="menu-item-detais-header">
                <p className="menu-item-details-name">Чизкейк</p>
                <InputAdornment 
                  position="end"
                  className="menu-item-details-close-icon"
                  onClick={handleCloseModal}
                 >
                  <IconButton>
                    <CloseIcon style={{color:"#2A3440", width:"30px", height:"30px"}}/>
                  </IconButton>
                </InputAdornment> 
            </header>

            <div className="menu-item-detais-subContainer">
              <div className="menu-item-details-container">
                <img 
                  src={cheeseCake} 
                  alt="menu item image"
                  className="menu-item-details-image" 
                />
              </div>
              <div className="details-description-container">
                <p className="details-description">Чизкейк - сладкий десерт, состоящий из одного или нескольких слоев.</p>
              </div>
            </div>

            <div className="menu-item-ingredients-container">
                <p className="menu-item-ingredients-title">Основные ингредиенты:</p>
                <ul className="menu-item-ingredients-title-list">
                    <li className="menu-item-ingredients">печенье (песочное) – 300 гр;</li>
                    <li className="menu-item-ingredients">масло – 100 гр;</li>
                    <li className="menu-item-ingredients">мускатный орех</li>
                </ul>
            </div>

            <button className="menu-item-details-add-btn">
              Добавить
            </button>


        </div>
    )
}

export default MenuItemDetails;