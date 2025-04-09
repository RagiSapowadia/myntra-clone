import {
  ADD_TO_BAG,
  REMOVE_FROM_BAG,
  EMPTY_BAG,
  SET_QUANTITY,
  SET_SIZE,
} from "../actions/bag";

const defaultBagState = [];

export default function bag(state = defaultBagState, action) {
  switch (action.type) {
    case ADD_TO_BAG: {
        const newItem = action.item;
    
        // Check if same product with same size is already in the bag
        const existingIndex = state.findIndex(
            item => item.id === newItem.id && item.size === newItem.size
        );
    
        if (existingIndex !== -1) {
            // If found, update quantity
            const updatedState = [...state];
            updatedState[existingIndex] = {
                ...updatedState[existingIndex],
                quantity: updatedState[existingIndex].quantity + (newItem.quantity || 1),
            };
            return updatedState;
        }
    
        // If not found, add as new item
        return [...state, { ...newItem, quantity: newItem.quantity || 1 }];
    }
    

    case REMOVE_FROM_BAG:
      return state.filter((item) => item.id !== action.item.id);
    case EMPTY_BAG:
      window.alert("Checkout Successful");
      return [];
    case SET_QUANTITY:
      return state.map((item) => {
        if (item.id === action.item.id) {
          return {
            ...item,
            quantity: action.quantity,
          };
        }
        return item;
      });
    case SET_SIZE:
      return state.map((item) => {
        if (item.id === action.item.id) {
          return {
            ...item,
            size: action.size,
          };
        }
        return item;
      });
    default:
      return state;
  }
}
