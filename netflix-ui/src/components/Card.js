
import { useState } from "react"
import styled from "styled-components"
import src from "../assets/playerVideo.mp4"
import { useNavigate } from "react-router-dom"
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
export default function Card(props){
    const navigate=useNavigate()
    const [isHovered,setIsHovered]=useState(false)
    return(
        <Container onMouseOver={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
            <img src={`https://image.tmdb.org/t/p/w500${props.movieData.image}`} /> 
            
             {isHovered&&(

                <div className="hover">
                <div className="image-video-container">
                  <img src={`https://image.tmdb.org/t/p/w500${props.movieData.image}`} /> 
                 <video src={src} autoPlay loop controls muted > </video>
                 <div className="info-container flex column">
                     <h3 className="name" onClick={() => navigate("/player")}> {props.movieData.name} </h3>  
                </div>
                 
                 <div className="icons flex j-between"> 
                 <div className="controls flex">
                <IoPlayCircleSharp title="Play"/>
                <RiThumbUpFill title="Like"/>
                <RiThumbDownFill title="Dislike"/>
                <AiOutlinePlus title="Add to my list"/>
                    </div> 
                    <div className="genres flex">
                       <ul className="flex">
                        {props.movieData.genre.map(genres => {
                          return ( <li> {genres}</li>)
                        })} 
                       </ul>
                    </div>
                  </div>
                 </div>
                </div>
             )
             
             }
            
            
        </Container>
    )
    }
    
    const Container =styled.div `
    max-width:230px;
    background-color:red;
    width:230px;
    height:100%;
    cursor:pointer;
    position:relative;
    img{
        border-radius:0.2 rem;
        background-color:white;
        width:100%;
        height:100%;
        z-index:19;

    }
    `