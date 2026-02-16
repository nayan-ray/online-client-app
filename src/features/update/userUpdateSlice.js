import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  updatedUser: {}
}
export const userUpdateSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
    },
    setUpdatedUser :(state, action) => {
        state.updatedUser = action.payload;
    },
    updateUser: (state, action) => {
        state.updatedUser = {
            ...state.updatedUser, [action.payload.field] : action.payload.value
        }
    },
    clearUser : (state) => {
        state.updatedUser = {}
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setUser, updateUser, clearUser, setUpdatedUser } = userUpdateSlice.actions

export default userUpdateSlice.reducer