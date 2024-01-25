import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './Reducer'

const store=configureStore({
    reducer:{
        custom:reducer
    }
})

export default store