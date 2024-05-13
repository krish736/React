import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal : 0},
    reducers:{
        increment : (state, action)=>{
            state.counterVal++;
        },
        decrement: (state, action)=>{
            state.counterVal--;
        },
        addition: (state, action)=>{
            state.counterVal += Number(action.payload);
        },
        substraction: (state, action)=>{
            state.counterVal -= Number(action.payload);
        }
    }
})

export const counterAction = counterSlice.actions
export default counterSlice