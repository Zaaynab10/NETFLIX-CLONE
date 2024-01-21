import {useSelector,useDispatch} from "react-redux"
import { useEffect ,useState } from "react"
import { getGenres ,fetchMovies} from "../store"
import home from "../assets/home.jpg"
import homeTitle from "../assets/homeTitle.webp"
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { FaPlay } from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai"
import Slider from "../components/Slider"
import Navbar  from "../components/Navbar"
import SelectGenre from "../components/SelectGenre"
import NotAvailable from "../components/NotAvailable"
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
export default function  Movies (){
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
    const navigate=useNavigate()

    const movies= useSelector((state)=>state.netflix.movies)
   
    useEffect(()=>{
      onAuthStateChanged(firebaseAuth, (user) => {
        if(!user) {navigate('/login')
        }else{
  console.log(user.email)
        }
      })
    },[])

  
return(
    <Container>
      <div className="Navbar">
    <Navbar isScrolled={isScrolled} />
    </div>
    <SelectGenre type="movie" />
    <div className="data"> 
     {  movies.length ?   <Slider movies={movies} />  : <NotAvailable />}
    </div>
        </Container>
      
)

}
const Container = styled.div`
margin-top:10%;

`;
  
