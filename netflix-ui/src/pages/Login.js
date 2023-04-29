import React from "react" // Importation de React
import styled from "styled-components" // Importation de styled-components pour styliser les composants
import BackgroundImage from "../components/backgroundImage"; // Importation du composant BackgroundImage personnalisé
import Header from "../components/header"; // Importation du composant Header personnalisé
import {useState} from "react"; // Importation du hook useState de React
import {firebaseAuth } from "../utils/firebase-config";
import {signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router-dom";
// Définition du composant Signup
export default function Login() { 

  
  // Initialisation de l'état formValues avec les champs email et password vides
  const [formValues,setFormValues]=useState({ 
    email:"",
    password:"",
  })
  const navigate=useNavigate()
  const [displayExistingUser,setDisplayExistingUser]=useState(false)

// Fonction pour mettre à jour l'état formValues avec les valeurs des champs du formulaire
  // Cette fonction récupère les valeurs du formulaire en utilisant l'événement "onChange" et en utilisant le nom de l'élément ciblé comme clé pour mettre à jour les valeurs du formulaire stockées dans le state.
function getFormValues(e){ 
  setFormValues({...formValues,[e.target.name]:e.target.value})
}

// Cette fonction est appelée lorsque l'utilisateur soumet le formulaire de connexion.
const handleLogIn = (e) => {
  e.preventDefault(); // Empêche la soumission du formulaire
  const { email, password } = formValues; // Récupère les valeurs d'e-mail et de mot de passe du formulaire stockées dans le state
signInWithEmailAndPassword(firebaseAuth,email,password).then(()=>{navigate("/")}).catch((error)=>{
if(error.code="auth/user-not-found"){
setDisplayExistingUser(true)
}
})
};
  return (
    <Container > {/* Utilisation d'un composant Container personnalisé avec la prop showPassword*/}
      <BackgroundImage/> {/* Utilisation du composant BackgroundImage personnalisé*/}
      <div className="content">
        <Header login={false} />{ /* Utilisation du composant Header personnalisé avec la prop login */}
        <div className="form-container flex column a-center j-center">
          <div className="form flex column">
          <div className="title">
              <h3>Login</h3>
            </div>
            <form > {/* Formulaire pour saisir l'adresse email et le mot de passe*/}
              <input type="email" name="email" placeholder="Email adress" onChange={getFormValues} /> 
              <input type="password" name="password" placeholder="Add a password" onChange={getFormValues} /> 
              {displayExistingUser&& <h6> Please check your e-mail/password or signup if you don't have account </h6>} {/* Affiche un message à l'écran si la variable "displayExistingUser" est évaluée à "true"*/}
            </form>
            <button onClick={handleLogIn} >Log In </button> 
          </div>
          
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
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  grid-template-rows: 15vh 85vh;
  .form{
    padding:1.5rem;
    align-items:center;
      background-color:red;
      width:30vw;
      height:85vh;
      form{
        width:100%;
        height:100%;
        input{
          display:grid;
           width:100%;
           height: 5%;
         }
      }
  }
 
}
`;
 