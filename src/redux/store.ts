import {createStore} from "redux";
import rootReducer from "./reducers";

/*@ts-ignore*/
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    rootReducer,
    composeEnhancers
)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch