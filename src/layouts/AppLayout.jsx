
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="bg-gray-800  text-white min-h-sc">
      <div className="container px-6 py-4 mx-auto">
        <Header/>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
