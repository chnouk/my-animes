import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnimesPageState {
    animesSearchText: string
}

export const initialAnimesPageState: AnimesPageState = {
    animesSearchText: ''
}

const animesPageSlice = createSlice({

    name: 'animesPage',

    initialState: initialAnimesPageState,

    reducers: {

        setAnimesSearchText(state: AnimesPageState, action: PayloadAction<string>) {
            state.animesSearchText = action.payload
        },     

    }
})

export const {
    setAnimesSearchText,
} = animesPageSlice.actions
  
export const animesPageReducer = animesPageSlice.reducer