import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path= "/login" element={<Login/>} />
    <Route path= "/signup" element={<Signup/>}  />
    <Route path= "/netflix" element={<Netflix/>} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
