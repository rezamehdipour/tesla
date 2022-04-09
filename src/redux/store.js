import { configureStore } from "@reduxjs/toolkit";

// Reducers
import sectionPresenterDataReducer from "./sectionPresenter/sectionPresenterDataSlice";
import sideMenuReducer from "./sideMenu/sideMenuSlice";

export default configureStore({
	reducer: {
		// sectionPresenter
		sectionPresenterData: sectionPresenterDataReducer,

		// sideMenu
		sideMenu: sideMenuReducer,
	},
});
