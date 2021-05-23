import React, { useState } from 'react';
import {
    Button,
    Nav,
    Container,
    Form,

} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authActions } from '../redux/actions';


function LoginPage() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const onSignin = (e) => {
        e.preventDefault();
        dispatch(authActions.signin(email, password));
    };

    if (currentUser.isRedirect) {
        return <Redirect to="/" />;
    }

    return (
        <Container>
            <h1>Login</h1>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Nav.Link as={Link} to={'/register'}>
                    Did not have account yet?
                </Nav.Link>

                <Button onClick={onSignin} variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

        </Container>
    );
}

export { LoginPage };