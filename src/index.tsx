import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./ui/components/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.tsx";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
