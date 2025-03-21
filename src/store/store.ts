import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reduser";


export const store = configureStore({
    reducer: {
        cosmetics: reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store