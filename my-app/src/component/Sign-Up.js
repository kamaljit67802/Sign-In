import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useUserAuth } from './context/UserAuthContext'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export const Sign = () =>

{
    const[signUpForm , setSignUpForm] = useState({
        name:"",
        emailAddress:"",
        passWord:""
    })
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(signUpForm)
       try{
        await createUserWithEmailAndPassword(auth,signUpForm.emailAddress,signUpForm.passWord).
        then((res)=>{
            console.log(res)
        })
       }
       catch(err){
 console.log("error",err)
       }
        setSignUpForm({ name:"",
        emailAddress:"",
        passWord:""})
        
    }
   
    return (
        <Card style={{ width: '30rem' ,margin:"6rem auto",background:"#333"}}>
        <Card.Body >
          <h2 className="text-center mb-5">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="label">Name</Form.Label>
           <Form.Control type="text"  className="input" placeholder="Enter name" value={signUpForm.name} onChange={e => {
            setSignUpForm({
              ...signUpForm,
              name: e.target.value
            })
        }}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label className="label">Email address</Form.Label>
    <Form.Control className="input" type="email" placeholder="Enter email" value={signUpForm.emailAddress} onChange={e => {
           setSignUpForm({
              ...signUpForm,
              emailAddress: e.target.value
            })
        }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="label">Password</Form.Label>
    <Form.Control type="password"className="input" placeholder="Password" value={signUpForm.passWord} onChange={e => {
           setSignUpForm({
              ...signUpForm,
              passWord: e.target.value
            })
        }}/>
  </Form.Group>
  
  <Button variant="primary" type="submit" className="w-100 button"> 
    SignUp
  </Button>
  
     <Link to="/" style={{textDecoration:"none", color:"white"}}> 
     <div className="text-center mt-2 " > Already have an account? LogIn </div>
     </Link> 

</Form>
</Card.Body>
</Card>
        
    )
}