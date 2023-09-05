import "./index.css";
import {state} from "./redax/state";
import {rerenderEntireTree} from "./rerender";

rerenderEntireTree(state);

