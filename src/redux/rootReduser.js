import {combineReducers} from "redux";
import {postReducer} from "./postsReduser";
import {appReducer} from "./appReducer";

export const rootReduser = combineReducers({
    posts: postReducer,
    app: appReducer
})