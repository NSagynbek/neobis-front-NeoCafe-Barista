import "./coffeeOptionsStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,Checkbox} from "@mui/material"
import { useState } from "react";
import { coffeeOptionsStyles,coffeeOptionsSecondStyles } from "../../utils";

function CoffeeOptions (){

    const [value, setValue] = useState("");

   const handleChange = (event)=>{
    setValue(event.target.value)
   }
console.log(value)
      
    return(
        <div className="coffee-options">
            <header className="coffee-options-header">
                <p className="coffee-options-title">Выберите опции</p>
                <InputAdornment 
                  position="end"
                  className="coffee-options-close-icon"
                 >
                  <IconButton>
                    <CloseIcon style={{color:"#2A3440", width:"30px", height:"30px"}}/>
                  </IconButton>
                </InputAdornment> 
            </header>
            <div className="coffee-milk-selection">
                <FormControl>
                    <FormLabel id="example">
                    </FormLabel>
                    <RadioGroup 
                      name="example" 
                      aria-labelledby="example"
                      value={value}
                      onChange={handleChange}
                    >
                        <p className="coffee-options-section">Молоко</p>
                        <div className="radio-buttons-container">
                            <div className="rado-button-subContainer">
                            <FormControlLabel 
                              control={<Radio color="warning"/>} 
                              label={
                              <span style={coffeeOptionsStyles}>
                                Коровье <span style={coffeeOptionsSecondStyles}>+0 с</span>
                            </span>}
                              value="Коровье +0 с" 
                              className="custom-form-control-label"
                            />
                            </div>

                            <div className="rado-button-subContainer">
                            <FormControlLabel 
                              control={<Radio color="warning" />} 
                              label={<span 
                                style={coffeeOptionsStyles}
                              >
                                Овсяное <span style={coffeeOptionsSecondStyles}> +0 с</span> </span> }
                              value="Овсяное +0 с"
                            />
                            </div>
                        
                        
                        </div>

                        <div className="radio-buttons-container">
                            <div>
                              <FormControlLabel 
                                control={<Radio color="warning"/>} 
                                label={<span
                                style={coffeeOptionsStyles}
                                >Соевое <span style={coffeeOptionsSecondStyles}> +0 с</span></span>}
                                value="Соевое +0 с" 
                              />
                            </div>
                       
                        </div>
                        <p className="coffee-options-section">Сиропы</p>
                        <div className="radio-buttons-container">
                            <div className="rado-button-subContainer">
                            <FormControlLabel 
                              control={<Checkbox 
                              color="warning"/>} 
                              label={
                                <span style={coffeeOptionsStyles}>
                                Клубничный 
                                <span style={coffeeOptionsSecondStyles}> +30 с
                                </span>
                                </span>
                                } 
                              value="Клубничный +30 с"
                            />
                            </div>
                            <div className="rado-button-subContainer">
                            <FormControlLabel 
                              control={<Checkbox 
                              color="warning"/>} 
                              label={
                              <span style={coffeeOptionsStyles}>Карамельный 
                              <span style={coffeeOptionsSecondStyles}> +30 с
                              </span>
                              </span>} 
                              value="Карамельныйный +30 с"
                            />
                            </div>
                        
                       
                        </div>
                       
                    </RadioGroup>
                </FormControl> 

            </div>

            <div className="coffee-options-buttons-container">
                    <div className="coffee-options-buttons">
                        <button className="increment">+</button>
                        <p className="coffee-options-buttons-text">1</p>
                        <button className="decriment">-</button>
                    </div>
                    <button className="coffee-options-add-btn">Добавить</button>
                </div>

        </div>
    )
}

export default CoffeeOptions;