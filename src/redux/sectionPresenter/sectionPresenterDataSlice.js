import { createSlice } from "@reduxjs/toolkit";

const sectionPresenterDataSlice = createSlice({
	name: 'sectionPresenterData',
	initialState: {
		title: "model s",
		subtitle: "Order Online for <a href='https://www.tesla.com/support/taking-delivery?redirect=no' target='_blank'>Touchless Delivery</a>",
		buttons: [
			{
				title: "custom order",
				url: "https://www.tesla.com/models/design",
			},
			{
				title: "existing inventory",
				url: "https://www.tesla.com/inventory/new/ms",
			},
		],
	},
	reducers: {
		setSectionPresenterData: (state, action) => {
			return action.payload;
		}
	}
})

export const { setSectionPresenterData } = sectionPresenterDataSlice.actions;

export default sectionPresenterDataSlice.reducer;