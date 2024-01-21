import Card from "./Card"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components"
export default function CardSlider(props){
    const [showControls,setShowControls]=useState(false)
    const [sliderPosition,setSliderPosition ]=useState(0)
    const divRef=useRef(null)

   


const handleDirection = (direction)=>{
   
    let distance = divRef.current.getBoundingClientRect().x ;

    if (direction === "left" && sliderPosition > 0) {
     divRef.current.style.transform = `translateX(${270 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }

    if (direction === "right" && sliderPosition < 4) {
     divRef.current.style.transform = `translateX(${-270 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }

}
return(
    <Container className="flex column">
        <h1> {props.title} </h1>
       <div className="wrapper"> 
       <div className={`slider-action left ${!showControls? "none":"" }  flex j-center a-center    ` }> <AiOutlineLeft  onClick={()=>handleDirection("left")}   /> </div>
   
   


        <div className=" slider flex" ref={divRef}  onMouseEnter={()=>setShowControls(true) } onMouseLeave={()=>setShowControls(false)} >  
        {
        props.data.map((movie,index)=>{ return( <Card movies={movie} index={index} key={movie.id} />)})
      
        } 
        </div>

        <div className={`slider-action right ${!showControls? "none":"" } flex j-center  a-center  ` }>  <AiOutlineRight onClick={ ()=>handleDirection("right")} /></div>
        <div>

</div>
        </div>

    </ Container>
)
}
const Container = styled.div`
gap: 1rem;
position: relative;
padding: 2rem 0;

h1{
    margin-left: 50px;
}
.wrapper{
    position:relative;
    .slider{
        width:max-content;
       gap:1rem;
       transition: 0.3s ease-in-out;
    }
    .slider-action{
      position:absolute;
          z-index:99;
          height:100%;
          top:0;
          bottom:0;
          background-color:red;
       
        svg {
            font-size: 2rem;
          }
    }
    .none{
      display:none; 
    }
   .right{
    right:0;
   }
   .left{
    left:0;
   }
         
}



`