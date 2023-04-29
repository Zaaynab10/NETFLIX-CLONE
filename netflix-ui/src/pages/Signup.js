
import React from "react" // Importation de React
import styled from "styled-components" // Importation de styled-components pour styliser les composants
import BackgroundImage from "../components/backgroundImage"; // Importation du composant BackgroundImage personnalisé
import Header from "../components/header"; // Importation du composant Header personnalisé
import {useState} from "react"; // Importation du hook useState de React
import {firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, reauthenticateWithPhoneNumber} from "firebase/auth"
import { useNavigate } from "react-router-dom";
// Définition du composant Signup
export default function Signup() { 
  // Initialisation de l'état showPassword à false avec le hook useState
  const [showPassword,setShowPassword] = useState(false) 
  // Initialisation de l'état formValues avec les champs email et password vides
  const [formValues,setFormValues]=useState({ 
    email:"",
    password:"",
  })
  const navigate=useNavigate()
  const [displayExistingUser,setDisplayExistingUser]=useState(false)
  const [displayWrongPassword,setDisplayWrongPassword]=useState(false)
// Fonction pour mettre à jour l'état formValues avec les valeurs des champs du formulaire
  // Cette fonction récupère les valeurs du formulaire en utilisant l'événement "onChange" et en utilisant le nom de l'élément ciblé comme clé pour mettre à jour les valeurs du formulaire stockées dans le state.
function getFormValues(e){ 
  setFormValues({...formValues,[e.target.name]:e.target.value})
}

// Cette fonction est appelée lorsque l'utilisateur soumet le formulaire de connexion.
const handleSignIn=(e)=>{
  e.preventDefault(); // Empêche la soumission du formulaire
  const {email,password}=formValues // Récupère les valeurs d'e-mail et de mot de passe du formulaire stockées dans le state
createUserWithEmailAndPassword(firebaseAuth,email,password).then(()=>{navigate("/")}).catch((error)=>{
  if(error.code==="auth/email-already-in-use"){
   setDisplayExistingUser(true)
  }
  if(error.code==="auth/weak-password"){
    setDisplayWrongPassword(true)
   }
console.log(error)

})
}

  return (
    <Container showPassword={showPassword}> {/* Utilisation d'un composant Container personnalisé avec la prop showPassword*/}
      <BackgroundImage/> {/* Utilisation du composant BackgroundImage personnalisé*/}
      <div className="content">
        <Header login={true} />{ /* Utilisation du composant Header personnalisé avec la prop login */}
        <div className="body flex column a-center j-center">
          <div className="text flex column ">
            <h1>Unlimited movies, TV shows, and more. </h1> 
          
            <h6>Ready to watch? Enter your email to create or restart your membership. </h6> 
          </div>
          <div className="form">
            <form> {/* Formulaire pour saisir l'adresse email et le mot de passe*/}
              <input type="email" name="email" placeholder="Email adress" onChange={getFormValues} /> {/*Champ email avec un écouteur d'événements onChange pour mettre à jour l'état formValues*/}
              {showPassword && <input type="password" name="password" placeholder="Add a password" onChange={getFormValues} /> } {/* Champ mot de passe conditionnel (s'affiche uniquement si showPassword est à true) avec un écouteur d'événements onChange pour mettre à jour l'état formValues*/}
              {!showPassword &&  <button onClick={()=>{setShowPassword(true)}} type="submit" >Get Started </button>} {/* Bouton pour afficher le champ mot de passe (lorsque showPassword est à false) avec un écouteur d'événements onClick pour mettre à jour l'état showPassword*/}
              {displayExistingUser&& <h6> This e-mail is already in use , please login* </h6>}
              {displayWrongPassword&& <h6> Password should be at least 6 characters *</h6>}
            </form>
          </div>
          <button onClick={handleSignIn} >Sign up </button> 
        </div>
      </div>
    </Container> // Fin du composant Container
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
    .body{
      gap:1rem;
    }
    .text{
      gap:1rem;
      text-align:center;
      font-size:2rem;
    }
    .form{
      form{
      display:grid;
    grid-template-columns:${({showPassword})=>showPassword?"1fr 1fr" :"2fr 1fr" }
    };
    h6{
      color:white;
    }
    width:60%;
    input{
      color:black;
      border:none;
      padding:1.5rem;
      font-Size:1.2rem;
      border:1px solid black ;
      &:focus{
        outline:none;
      }
    }
    button{
      padding: 0.5rem 1rem;
background-color: #e50914;
border: none;
cursor: pointer;
color: white;
border-radius: 0.2rem;
font-weight:bolder;
font-size:1;05rem;
    }
    }
    button{
      padding: 0.5rem 1rem;
background-color: #e50914;
border: none;
cursor: pointer;
color: white;
font-weight:bolder;
font-size:1;05rem;
    }
  }
  }
`;