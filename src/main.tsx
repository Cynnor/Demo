import { createRoot } from "react-dom/client";
import TodoApp from "./App";
import "./main.scss";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
