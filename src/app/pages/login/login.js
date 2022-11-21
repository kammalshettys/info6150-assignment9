import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import axios from 'axios';

export default function Login(props) {
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    let onSubmitHandler = (e)=>{
        e.preventDefault();
        const param = {
            email:e.target.email.value,
            password:e.target.password.value
        }
        var url= 'http://localhost:3030/user/login'
        axios.post(url,param).then((response)=>{
            props.appCallBack(response.data);
            navigate(`/home`);

        }).catch((e)=>{
            setError("Some Error has occured")
            if(e.response.data.error.message){
                setError(e.response.data.error.message);
            }   
            
        })
        
    }


  return (
    <div className='loginForm'>
        <h4>Login</h4>
            <Form onSubmit={onSubmitHandler}>
            `   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password'/>
                </Form.Group>
                <Form.Group>
                <Form.Text type="invalid">
                    {error}
                </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                   Submit
                </Button>
                
        </Form>

    </div>
  )
}
