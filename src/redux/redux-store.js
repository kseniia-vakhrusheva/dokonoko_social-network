import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
});

let store = configureStore({reducer: reducers});

export default store;
