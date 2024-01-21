import home from "../assets/home.jpg"
import homeTitle from "../assets/homeTitle.webp"
import styled from "styled-components";
import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaPlay } from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux"
import { getGenres } from "../store";
import { fetchMovies } from "../store";
import Slider from "../components/Slider"
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate=useNavigate()
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const genres= useSelector((state)=>state.netflix.genres)
  const movies= useSelector((state)=>state.netflix.movies)
  const dispatch=useDispatch()

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (user) => {
      if(!user) {navigate('/login')
      }
    })
  },[])

  useEffect(()=>{
   dispatch(getGenres())
  },[])


  useEffect(()=>{
dispatch(fetchMovies({type:"all"}))
 
})


    return (
      <Container>
  <Navbar isScrolled={isScrolled} />
  <div className="hero" >
  <img src={home} className="background-image"/>
 <div className="container ">

  <div className="logo">
    <img src={homeTitle}/>
  </div>

 <div className="buttons flex">
  <button  onClick={()=>{navigate("/player")}} className="flex j-center a-center"> <FaPlay/> Play</button>
  <button className="flex j-center a-center"> <AiOutlineInfoCircle/> More info </button>
 </div>

 </div>
  </div>
  
  <Slider movies={movies} />
      </Container>
    );
  }
  
  
  const Container = styled.div`
  background-color: black; /* Couleur de fond noire */

.hero {
  position: relative; /* Positionnement relatif */
  
  .background-image {
    filter: brightness(60%); /* Filtrage de la luminosité à 60% */
  }
  
  img {
    height: 100vh; /* Hauteur de 100% de la hauteur de la fenêtre (viewport) */
    width: 100vw; /* Largeur de 100% de la largeur de la fenêtre (viewport) */
  }
  
  .container {
    position: absolute; /* Positionnement absolu */
    bottom: 5rem; /* Marge basse de 5 rem */
    
    .logo {
      img {
        width: 100%; /* Largeur de 100% du conteneur parent */
        height: 100%; /* Hauteur de 100% du conteneur parent */
        margin-left: 5rem; /* Marge gauche de 5 rem */
      }
    }
    
    .buttons {
      margin: 5rem; /* Marge de 5 rem autour des boutons */
      gap: 2rem; /* Espacement de 2 rem entre les éléments du groupe */
      
      button {
        font-size: 1.4rem; /* Taille de police de 1.4 rem */
        gap: 1rem; /* Espacement de 1 rem entre les éléments du groupe */
        border-radius: 0.2rem; /* Rayon de bordure de 0.2 rem */
        padding: 0.5rem; /* Remplissage de 0.5 rem */
        padding-left: 2rem; /* Remplissage gauche de 2 rem */
        padding-right: 2.4rem; /* Remplissage droit de 2.4 rem */
        border: none; /* Pas de bordure */
        cursor: pointer; /* Curseur en forme de main au survol */
     
        &:hover {
          opacity: 0.8; /* Opacité de 0.8 au survol */
        }
        
        &:nth-of-type(2) {
          background-color: rgba(109, 109, 110, 0.7); /* Couleur de fond avec transparence */
          color: white; /* Couleur de texte blanche */
          
          svg {
            font-size: 1.8rem; /* Taille de police de l'icône de 1.8 rem */
          }
        }
      }
    }
  }
}

`;
  
