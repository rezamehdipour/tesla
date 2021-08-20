import { createSlice } from "@reduxjs/toolkit";

const sideMenuShowSlice = createSlice({
	name: 'sideMenuShow',
	initialState: false,
	reducers: {
		toggleSideMenuShow: (state, action) => {
			return !state;
		}
	}
})

export const { toggleSideMenuShow } = sideMenuShowSlice.actions;

export default sideMenuShowSlice.reducer;