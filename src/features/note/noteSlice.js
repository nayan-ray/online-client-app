import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  note: [],
}
export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNote: (state, action) => {
        state.note = action.payload;
    },
    clearNote : (state) => {
        state.note = []
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setNote , clearNote} = noteSlice.actions

export default noteSlice.reducer