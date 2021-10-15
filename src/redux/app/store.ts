import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'src/redux/features/auth/authSlice';
import { carsReducer } from '../features/auth/carsSlice'; 

const reducer = {authReducer, carsReducer}

export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
