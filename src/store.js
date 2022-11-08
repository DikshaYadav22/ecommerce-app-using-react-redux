import { legacy_createStore } from "redux";
import rootRed from './redux/reducers/main';

const store = legacy_createStore(
    rootRed
)

export default store;