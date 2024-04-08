import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_ORDER_DETAIlS,
    OPEN_CART,
  } from "./actionTypes";
  
  const initialState = {
    isAuthenticated: true,
    isOpen: false,
    modalData: {},
    isOrderDetails:false,
    isOpenCart:false,
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

      
      default:
        return state;
    }
  };
  
  export default reducer;