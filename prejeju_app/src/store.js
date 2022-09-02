import { createStore } from 'redux'
import rootReducer from "./reducers/rootReducer"
import storage from 'redux-persist/lib/storage';


const store = createStore(rootReducer);



export default store;
