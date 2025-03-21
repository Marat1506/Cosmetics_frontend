import { createSlice } from "@reduxjs/toolkit"

interface Cosmetics {
    gg: string
}
const initialState: Cosmetics = {
    gg: "w"
}

const cosmeticsSlice = createSlice({
    name: "cosmetics",
    initialState,
    reducers: {
        change: () => {

        }
    }
})

export const {change} = cosmeticsSlice.actions
export default cosmeticsSlice.reducer
