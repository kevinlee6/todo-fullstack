import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

// change global config
import axios from 'axios';
import { message } from 'antd';
axios.defaults.baseURL = 'http://localhost:3001/api';
message.config({ maxCount: 1, duration: 0.8 });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
