import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Pages/Main";
import News from "./Pages/News";
import MyAdmin from "./Pages/MyAdmin";
import LayoutPanel from "./LayoutPanel.jsx"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="posts" element={<News />} />
        
      </Route>

        <Route path="/myAdmin" element={<MyAdmin />} />

      <Route path="/AdminPanel" element={<LayoutPanel />}>
        <Route index element={<LayoutPanel />} />
      </Route>
     
    </Routes>

    
  );
}
