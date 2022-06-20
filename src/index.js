import { StrictMode } from "react"
import reactDOM from "react-dom/client"
import App from "./App.js"

const root = reactDOM.createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
