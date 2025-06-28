import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Pages/Main";
import News from "./Pages/News";
import MyAdmin from "./Pages/MyAdmin";
import LayoutPanel from "./LayoutPanel.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx"

export default function App() {
  return (
    <Routes>
      {/* Главная часть */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="posts" element={<News />} />
      </Route>


      <Route path="/myAdmin" element={<MyAdmin />} />


      <Route
        path="/adminlogin"
        element={
          <ProtectedRoute>
            <LayoutPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
