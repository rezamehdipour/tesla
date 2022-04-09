import { createSlice } from "@reduxjs/toolkit";

const sideMenuShowSlice = createSlice({
	name: "sideMenu",
	initialState: false,
	reducers: {
		toggleSideMenu: (state, action) => {
			return !state;
		},
	},
});

export const { toggleSideMenu } = sideMenuShowSlice.actions;

export default sideMenuShowSlice.reducer;
