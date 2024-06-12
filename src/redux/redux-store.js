import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = configureStore({ reducer: reducers });

window.store = store;

export default store;
