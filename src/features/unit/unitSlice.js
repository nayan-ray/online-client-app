import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  units: [],
}
export const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    setUnits: (state, action) => {
        state.units = action.payload;
    },
    clearUnits : (state) => {
        state.units = []
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setUnits , clearUnits} = unitSlice.actions

export default unitSlice.reducer