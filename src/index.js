import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store , persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store = { store }>
      <PersistGate loading={null} persistor={ persistor }>
        <App />
      </PersistGate>
    </Provider>
  
  </BrowserRouter>
);
