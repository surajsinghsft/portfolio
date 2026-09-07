import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

import { useEffect } from "react";
import { PythonPage } from "@/pages/PythonPage";
import { CursorGlow } from "@/components/CursorGlow";


function App() {
  useEffect(() => {
  const hash = window.location.hash;

  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }
}, []);

  return (
    <>
      <CursorGlow />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/python" element={<PythonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
