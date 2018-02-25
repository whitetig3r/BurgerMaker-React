import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
    salad: 45,
    cheese: 20,
    meat: 85,
    bacon: 60
};
const initialState = {
    ingredients: {
        salad: 0,
        meat:0,
        cheese:0,
        bacon:0
    },
    totalPrice: 30,
    purchasable: false
};

const reducer = (state=initialState,action) => {
        switch(action.type){
            case actionTypes.ADD_INGREDIENT:
               return {
                     ...state,
                     ingredients: {
                         ...state.ingredients,
                         [action.ingredientName]:state.ingredients[action.ingredientName]+1
                     },
                     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                     purchasable: state.totalPrice > 0 ? true : false
               };
            case actionTypes.REMOVE_INGREDIENT:
               return {
                   ...state,
                   ingredients: {
                       ...state.ingredients,
                       [action.ingredientName]:state.ingredients[action.ingredientName]-1
                   },
                   totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                   purchasable: state.totalPrice > 0 ? true: false
               };
            default:
             return state;
        
      }
};

export default reducer;