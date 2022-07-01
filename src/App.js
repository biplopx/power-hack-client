import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Billings from "./components/Billings/Billings";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />}></Route>
        <Route path="/login" element={<Layout children={<Login />}></Layout>}></Route>
        <Route path="/registration" element={<Layout children={<Registration />}></Layout>}></Route>
        <Route path="/billings/" element={<Layout isBilling={true} children={<Billings />}></Layout>}></Route>
        <Route path="*" element={<Layout children={<NotFound />}></Layout>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
