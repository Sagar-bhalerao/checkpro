
import "preline/preline";
import "./App.css"
import { IStaticMethods } from "preline/preline";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/homepage/Homepage";

import NotFoundPage from "./components/NotFoundPage"
import ManagerFAQ from "./pages/transaction/ManagerFAQ/ManagerFAQ";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return <>
  
  <Routes>
      {/* Default layout for all routes */}
      <Route element={<DefaultLayout />}>
        {/* Homepage route */}
        <Route index path="/" element={<Homepage />} />
        <Route path="/transaction/managerfaq" element={<ManagerFAQ />} />
        
   
        {/* Catch-all route for unmatched pages */}
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>

  </>;
}

export default App;
