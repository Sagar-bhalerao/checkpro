import "preline/preline";
import "./App.css"
import { IStaticMethods } from "preline/preline";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/homepage/Homepage";
import NotFoundPage from "./components/NotFoundPage";
import ManagerFAQ from "./pages/transaction/ManagerFAQ/ManagerFAQ";
import SignIn from "./pages/authentication/SignIn";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Logout from "./pages/authentication/Logout";
import ViewProgress from "./pages/master/ViewProgress";
import FilledChecklist from "./pages/master/FilledChecklist";
import AdminFAQ from "./pages/transaction/AdminFAQ/AdminFAQ";
import MemberView from "./pages/master/MemberView";
import Profile from "./pages/Profile/Profile";
import ViewFAQ from "./pages/master/ViewFAQ";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();
  const {isAuthenticated} = useSelector((state:RootState)=>state.auth);

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (<>
    <Routes>
    
      {isAuthenticated ? (
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="/transaction/managerfaq" element={<ManagerFAQ />} />
          <Route path="/transaction/adminfaq" element={<AdminFAQ />} />
          <Route path="/master/viewprogress" element={<ViewProgress />} />
          <Route path="/master/filledchecklist/:loc_id" element={<FilledChecklist />} />
          <Route path="/master/memberview" element={<MemberView />} />
          <Route path="/master/questionview" element={<ViewFAQ/>} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFoundPage />} />
          
        </Route>
      ) : (<>
      
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to={"/auth/signin"} />} />
        </>
      )}
      <Route path="/auth/logout" element={<Logout />} />
    </Routes>
    </>
  );
}

export default App;
