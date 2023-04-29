import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Player from "./pages/Player";


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path= "/login" element={<Login/>} />
    <Route path= "/signup" element={<Signup/>}  />
    <Route path= "/" element={<Netflix/>} />
    <Route path= "/player" element={<Player/>} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
