import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "testQuiz",
  initialState: {
    list: []
  },
  reducers: {
    upsertItem: (state, action) => {
      const { newItem, key } = action.payload;

      const index = state.list.findIndex(
        item => item[key] === newItem[key]
      );

      if (index === -1) {
        // ADD
        state.list.push(newItem);
      } else {
        // UPDATE
        state.list[index] = {
          ...state.list[index],
          ...newItem
        };
      }
    },
   clearList : (state) => {
      state.list  = [];
   }



  }

});

export const { upsertItem, clearList } = itemsSlice.actions;
export default itemsSlice.reducer;
