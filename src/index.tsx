import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./i18next/i18next";
import "./index.css";
import { HashRouter } from "react-router-dom";

import App from "./components/App";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);
