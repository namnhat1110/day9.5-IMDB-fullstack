import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from 'react-bootstrap'
import { authActions } from '../redux/actions/user.actions'

function AuthPage() {
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)

  const { user } = useSelector((state) => state);

  const dispatch = useDispatch()

  const onSignup = (e) => {
    e.preventDefault()
    dispatch(authActions.register(email, password))
  }

  if (user.loading) return <h1>Registering.....</h1>;
  if (user.redirectToHomePage) return <Redirect to="/" />;

  return (
    <div>
      <Container>
        <h1>Auth Page</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <br></br>
          <Button onClick={onSignup} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export { AuthPage };
