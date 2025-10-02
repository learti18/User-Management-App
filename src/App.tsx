import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import UserDetail from "./pages/userDetail";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AddUser from "./pages/addUser";
import { Toaster } from "sonner";
import EditUser from "./pages/editUser";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
