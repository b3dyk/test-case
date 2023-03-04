import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./i18next/i18next";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="test-case">
      <App />
    </BrowserRouter>
  </Provider>
);
