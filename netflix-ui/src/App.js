import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path= "/login" element={<Login/>} />
    <Route path= "/signup" element={<Signup/>}  />
    <Route path= "/" element={<Netflix/>} />
    <Route path= "/player" element={<Player/>} />
    <Route path= "/movies" element={<Movies/>} />
    <Route path= "/tv" element={<TVShows/>} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
