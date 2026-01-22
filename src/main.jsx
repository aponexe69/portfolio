import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./components/Preloader.jsx";

function Root() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <BrowserRouter>
      <StrictMode>
        <Preloader onComplete={() => setIsLoaded(true)} />
        <App />
      </StrictMode>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
