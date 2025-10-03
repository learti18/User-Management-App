import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import UserDetail from "./pages/userDetail";
import AddUser from "./pages/addUser";
import { Toaster } from "sonner";
import EditUser from "./pages/editUser";
import Layout from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
