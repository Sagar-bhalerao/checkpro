import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Siderbar from "../components/Sidebar";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <div className="flex h-screen">
      {/* <!-- Sidebar --> */}
      <div className="lg:w-64 bg-gray-800 text-white flex h-screen overflow-hidden">
        <Siderbar />
      </div>
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
        {/* <!-- Header --> */}
        <div className="bg-white shadow-md z-10 sticky top-0 ">
          <Header />
        </div>

        {/* <!-- Main Content --> */}
        <main className=" bg-gray-50 dark:bg-neutral-900">
          <div className="p-4 bg-white text-black dark:bg-neutral-800 dark:border-neutral-700 dark:text-white overflow-x-auto mx-auto max-w-screen">
            <Outlet />
          </div>
        </main>        
          <Footer/>        
      </div>
    </div>
  );
};

export default DefaultLayout;
