import React, { useState } from 'react';
import {
    Button,
    Container,
    Form,

} from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { authActions } from '../redux/actions/user.actions';


function UpdateUserPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user);
    const [username, setUsername] = useState(``)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const onUpdateUser = (e) => {
        e.preventDefault();
        dispatch(authActions.update(id));
    };

    if (currentUser.isRedirect) {
        return <Redirect to="/" />;
    }

    return (
        <Container>
            <h1>Update</h1>

            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

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

                <Button onClick={onUpdateUser} variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export { UpdateUserPage };