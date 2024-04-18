import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_ORDER_DETAIlS,
    OPEN_CART,
    HEADER_ACTIVE_SECTION,
    SET_EMAIL,
  } from "./actionTypes";
import { headerActiveSection } from "./actions";
  
  const initialState = {
    isAuthenticated: true,
    isOpen: false,
    modalData: {},
    isOrderDetails:false,
    isOpenCart:false,
    headerActiveSection:"Профиль",
    email:"",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state, 
          isAuthenticated: true,
          
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
         
        }
      
      case OPEN_MODAL:
        return {
          ...state,
          isOpen:true,
          modalData:action.payload,
        } 
      case CLOSE_MODAL:
        return {
          ...state,
          isOpen: false,
          modalData: {},
        }

      case OPEN_ORDER_DETAIlS:
        return {
          ...state,
          isOrderDetails:!state.isOrderDetails
        }  
      case OPEN_CART:
        return {
          ...state,
          isOpenCart:!state.isOpenCart
        }  
      
      case HEADER_ACTIVE_SECTION:
         return {
          ...state,
          headerActiveSection:action.payload,
        } 

      case SET_EMAIL:
        return {
          ...state,
          email:action.payload,
        }     

      
      default:
        return state;
    }
  };
  
  export default reducer;