import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "index.css";
import { App } from "components/App";
import { Provider } from "react-redux";
import { store } from "redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <BrowserRouter basename="/rental-cars">
        <App />
      </BrowserRouter>
   </Provider>
  </React.StrictMode>
);
