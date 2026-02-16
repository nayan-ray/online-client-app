import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  unitDetails: [],
  unitResults: {}
}
export const unitDetailsSlice = createSlice({
  name: 'unitDetail',
  initialState,
  reducers: {
    setUnitDetails: (state, action) => {
        state.unitDetails = action.payload;
    },
    setUnitResults: (state, action) => {
        state.unitResults = action.payload;
    },
    clearUnitDetails : (state) => {
        state.unitDetails = []
        state.unitResults = {}
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setUnitDetails , setUnitResults, clearUnitDetails} = unitDetailsSlice.actions

export default unitDetailsSlice.reducer