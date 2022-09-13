import { createSlice } from '@reduxjs/toolkit'
import alertify from "alertifyjs"

const initialState = {
    value: "10000",
    cart: []
  }

export const moneySlice = createSlice({
    name: "money",
    initialState,
    reducers: {
        buyProduct: (state,action) => {
            
            if(action.payload[0]>state.value){
                alert("you don't have enough money ")
            }else{
                state.value -= action.payload[0]
                state.cart = [...state.cart , action.payload[1]]
                alertify.success(`${action.payload[1]} has been added to your cart`)
            }
        },
        finishGame: (state) => {
            state.value = "10000"
            state.cart = []
            alertify.success("Your cart and money have been reset")
        }
    }
})

export const { buyProduct, finishGame } = moneySlice.actions

export default moneySlice.reducer