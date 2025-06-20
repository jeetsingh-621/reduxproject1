import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { asynccurrentuser } from "../store/actions/Useractions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
  }, []);

  return (
    <div className="w-full px-4 py-2 min-h-screen bg-black text-white">
      <Navbar />
      <Mainroutes />

      {/* Toast container at the end of the app so it doesn’t block anything */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="!bg-zinc-800 !text-white !rounded-lg !shadow-lg !px-4 !py-2 text-sm sm:text-base max-w-[90vw] sm:max-w-sm md:max-w-md"
        bodyClassName="flex items-center gap-2"
        progressClassName="!bg-blue-400 !h-1 !rounded-b-lg"
      />
    </div>
  );
};

export default App;
