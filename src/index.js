import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import configureStore from './store/store'
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={configureStore()}>
    <App />
    </Provider>
    

  </StrictMode>,
  rootElement
);
