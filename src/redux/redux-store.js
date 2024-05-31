import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
});

let store = configureStore({reducer: reducers});

export default store;
