import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  student: {},
}
export const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setStudent: (state, action) => {
        state.student = {
            ...state.student, [action.payload.field] : action.payload.value
        }
    },
    clearStudent : (state) => {
        state.student = {}
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { setStudent , clearStudent} = signUpSlice.actions

export default signUpSlice.reducer