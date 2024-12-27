import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title :''
}

const BreadCrumbSlice = createSlice({
  name: 'BreadCrumb',
  initialState,
  reducers: {
    setTitle(state, action) {
      const {title} = action.payload
      state.title = title;
      },
      }        
})

export const {setTitle} = BreadCrumbSlice.actions;
export default BreadCrumbSlice.reducer;