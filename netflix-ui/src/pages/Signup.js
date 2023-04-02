import React from "react"
import styled from "styled-components"
import BackgroundImage from "../components/backgroundImage";
import Header from "../components/header";
export default function Signup() {
    return (
        <Container>
            <BackgroundImage/>
            <Header/>
            <div className="content">
      <div className="body flex column a-center j-center">
     <div className="text flex column ">
        <h1>Unlimited movies, TV shows, and more. </h1>
        <h4> Plans now start at USD2.99/month.</h4>
        <h6>Ready to watch? Enter your email to create or restart your membership. </h6>
        </div>
        <div className="form">
        <form>
        <input type="email" name="email" placeholder="Email adress" />
        <input type="password" name="password" placeholder="Add a password" /> 
        <button type="submit" >Get Started </button>
        </form>
        <button >Login </button>
        </div>
        </div>
      </div>
      </Container>
    );
  }
  
  const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
`;