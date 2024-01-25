import { createReducer } from "@reduxjs/toolkit";
const initialState={
    color:'#fff',
    lightTheme:{
        background:'#fff',
        color:'#000',
        chatbg:'#9DB2BF',
        borderColor:'#393646',
        iconcolor:'#000'
    },
    darkTheme:{
        background:'#2D033B',
        color:'#E5B8F4',
        chatbg:'#C147E9',
        borderColor:'#662549',
        iconcolor:'#41b3a3'
    },
    curTheme:{
        background:'#fff',
        color:'#000',
        chatbg:'#9DB2BF',
        borderColor:'#393646',
        iconcolor:'#000',
        
    },
    image:[]
}
export const reducer=createReducer(initialState,{
    CHANGE_BG:(state,action)=>{
        return{
            ...state,color:action.payload
        }
    },
    CHANGE_THEME:(state,action)=>{
        return{
            ...state,curTheme:action.payload,color:action.payload.background
        }
    },
    CHANGE_IMG:(state,action)=>{
        console.log(action.payload)
    }
})