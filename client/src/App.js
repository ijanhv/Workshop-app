import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./compeonents/Create";
import Display from "./compeonents/Display";
import Edit from "./compeonents/Edit";
import Home from "./compeonents/Home";
import Sidebar from "./compeonents/Sidebar";

function App() {
  return (
    
    <div className="App sm:flex">
      
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route exact path="/edit/:id" element={<Edit />}/>
          <Route exact path="/" element={<Display />}/>
          <Route exact path="/create" element={<Create />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
