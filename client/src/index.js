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
axios.defaults.baseURL = process.env.DATABASE_URL || "http://localhost:3001/";
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

// // get preloadedState based on user's token
// Works but has bugs; app is rendered before store is initialized
// Needed thunk functionality before it could be applied
// const initializeStore = async () => {
//   const cookies = new Cookies();
//   const token = cookies.get("token");
//   const res = await axios.post("/verify-token", null, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     }
//   });
//   const data = res.data;
//   console.log(data);
//   const error = data.error;
//   const store = error ? createStore() : createStore(data);

//   await ReactDOM.render(
//     <Provider store={store}>
//       <CookiesProvider>
//         <ConnectedRouter history={history}>
//           <App />
//         </ConnectedRouter>
//       </CookiesProvider>
//     </Provider>,
//     document.getElementById("root")
//   );
// };

// initializeStore();
