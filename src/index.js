import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";   // ✅ import HelmetProvider
import App from "./App";
import {store} from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider> 
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </HelmetProvider> 
);
