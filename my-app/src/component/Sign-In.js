
import { Link, Navigate, useNavigate} from "react-router-dom"
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, Card } from "react-bootstrap";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const SignIn = () =>
{
    const[signInForm , setSignInForm] = useState({
        emailAddress:"",
        passWord:""
    })
   const[errorAuth , setErrorAuth] = useState("")
   const navigate = useNavigate()
    const handleSubmit = async(event) => {
        event.preventDefault();
      try{
              await signInWithEmailAndPassword(auth,signInForm?.emailAddress,signInForm?.passWord)
              .then((res)=>{
                console.log(res)
              })
              navigate("/home")
      }
      catch(err){
          setErrorAuth(err.message)
      }

        setSignInForm({ 
        emailAddress:"",
        passWord:""})
        
    }
    return(
        <Card style={{ width: '30rem' ,margin:"6rem auto",background:"#333"}}>
              <Card.Body>
                <h2 className="text-center mb-5">Sign In</h2>

            {errorAuth && <Alert variant="danger">{errorAuth}</Alert>}
   <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"className="input" 
           value={signInForm.emailAddress} onChange={e => {
            setSignInForm({
              ...signInForm,
              emailAddress: e.target.value
            })
        }}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="input"  
          value={signInForm.passWord} onChange={e => {
            setSignInForm({
              ...signInForm,
              passWord: e.target.value
            })}}/>
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100 button"> 
          Submit
        </Button>
        <Link to="/sign-up" style={{textDecoration:"none",color:"white"}}> 
        <div className="text-center mt-2" > Create an account</div></Link> 
      </Form>
      </Card.Body>
      </Card>
      
    )
}