import { configureStore } from "@reduxjs/toolkit";

// Reducers
import sectionPresenterDataReducer from './sectionPresenter/sectionPresenterDataSlice';
import sideMenuShowReducer from './sideMenu/sideMenuShowSlice';

export default configureStore({
	reducer: {
		// sectionPresenter
		sectionPresenterData: sectionPresenterDataReducer,

		// sideMenu
		sideMenuShow: sideMenuShowReducer
	}
})