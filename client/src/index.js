import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ConnectedRouter } from "connected-react-router";
import App from "./components/App";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import configureStore, { history } from "./redux/configureStore";

// change global config
import { message } from "antd";
import axios from "axios";
axios.defaults.baseURL =
  process.env.REACT_APP_HEROKU_URL || "http://localhost:3001/";
message.config({ maxCount: 2, duration: 1 });

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);
