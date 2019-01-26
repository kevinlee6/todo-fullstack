import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ConnectedRouter } from "connected-react-router";
import App from "./components/App";
import { Provider } from "react-redux";
import createStore, { history } from "./redux/store";

// change global config
import { message } from "antd";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";
message.config({ maxCount: 1, duration: 1 });

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
