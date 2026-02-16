import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  subjects: [],
}
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSubjects: (state, action) => {
        state.subjects = action.payload;
    },
    clearSubjects : (state) => {
        state.subjects = []
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setSubjects , clearSubjects} = dashboardSlice.actions

export default dashboardSlice.reducer