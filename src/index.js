import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import App from "./App";
// import Loader from "./Component/Loader";
import "./index.css";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
