import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [profilePic, setProfilePic] = useState("");
const dispatch = useDispatch();  

  const loginToApp = (e) => {

      e.preventDefault();

  };


  const register = () => {
    if(!name){
        return alert('Please enter Full Name')
    }   
    
    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=> {
        userAuth.user.updateProfile({
            displayName:name,
            photoURL: profilePic,
        })
        .then(()=> {
            dispatch(login({
                 email: userAuth.user.email,
                 uid: userAuth.user.uid,
                 display: name,
                 photoUrl: profilePic,
            }))
        })
    }).catch(error => alert(error.message))

  };

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt="Linkedin Logo"
      />
      <form>
        <input
          value={name}
          onChange={e=> setName(e.target.value)}
          placeholder="Full Name (required if registaring)"
          type="text"
        ></input>

        <input
          value={profilePic}
          onChange={e=> setProfilePic(e.target.value)}
          placeholder="Profile Picture URL (optional) "
          type="text"
        ></input>

        <input value={email} onChange={ e => setEmail(e.target.value)} placeholder="Email" type="text"></input>
        <input value= {password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"></input>
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>

      <p> Not a member?</p>
      <span className="login__register" onClick={register}>
        {" "}
        Register Now
      </span>
    </div>
  );
}

export default Login;
