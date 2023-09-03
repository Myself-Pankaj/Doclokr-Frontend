import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { profileReducer, userReducer } from "./reducers/userReducer";
import {
  deleteReducer,
  docDetailsReducer,
  docssReducer,
  newPubDocReducer,
} from "./reducers/pubDocReducer";
import {
  infoDetailsReducer,
  infoReducer,
  newInfoReducer,
  newProjectReducer,
  projectDetailsReducer,
  projectReducer,
  updateBio,
  updateProject,
} from "./reducers/projectReducer";
import { addTxtFileReducer, showTextFile, txtDetailsReducer, updatetxt } from "./reducers/textFileReducer";

const reducer = combineReducers({
  //authentication
  auth: userReducer,
  role: profileReducer,

  //docs---public
  publicDoc: newPubDocReducer,
  mydoc: docssReducer,
  docDetail: docDetailsReducer,
  removeDoc: deleteReducer,

  //project
  bio: newProjectReducer,
  project: projectReducer,
  projectdetail: projectDetailsReducer,
  manager: updateProject,

  //info
  info: newInfoReducer,
  myinfo: infoReducer,
  manage: updateBio,
  details: infoDetailsReducer,

  //text file
  newtxt: addTxtFileReducer,
  showtxtfile:showTextFile,
  txtmanager:updatetxt,
  txtdetail:txtDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export const server = "https://loker.onrender.com/port/v1";
