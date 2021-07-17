import { render } from "react-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

const rootElement = document.getElementById("root");
render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  rootElement
);
