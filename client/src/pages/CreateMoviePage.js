import React, { useState } from 'react';
import {
    Button,
    Container,
    Form,

} from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { movieActions } from '../redux/actions/movie.actions';

function CreateMoviePage() {
    const [movie, setMovie] = useState({
        title: '',
        description: '',
        genre: '',
        director: '',
        writer: '',
        actors: '',
        date_published: '',
        budget: '',
        production_company: '',
        avg_vote: '',
        votes: '',
        reviews_from_users: '',
        reviews_from_critics: '',
    });

    const dispatch = useDispatch();

    const onCreateMovie = (e) => {
        e.preventDefault();
        dispatch(movieActions.createMovie(movie));
    };


    return (
        <Container>
            <h1>Create Movie</h1>

            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie title"
                        value={movie.title}
                        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie description"
                        value={movie.description}
                        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Genres</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie genres"
                        value={movie.genre}
                        onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Director</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie director"
                        value={movie.director}
                        onChange={(e) => setMovie({ ...movie, director: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Writer</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie genres"
                        value={movie.writer}
                        onChange={(e) => setMovie({ ...movie, writer: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Cast</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie cast"
                        value={movie.actors}
                        onChange={(e) => setMovie({ ...movie, actors: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Date published</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie date publish"
                        value={movie.date_published}
                        onChange={(e) => setMovie({ ...movie, date_published: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Budget</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie budget"
                        value={movie.budget}
                        onChange={(e) => setMovie({ ...movie, budget: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Production company</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie production company"
                        value={movie.production_company}
                        onChange={(e) => setMovie({ ...movie, production_company: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Average votes</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie average votes"
                        value={movie.avg_vote}
                        onChange={(e) => setMovie({ ...movie, avg_vote: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Votes count</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie votes count"
                        value={movie.votes}
                        onChange={(e) => setMovie({ ...movie, votes: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Review from users</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie user review"
                        value={movie.reviews_from_users}
                        onChange={(e) => setMovie({ ...movie, reviews_from_users: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Review from critics</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie critics review"
                        value={movie.reviews_from_critics}
                        onChange={(e) => setMovie({ ...movie, reviews_from_critics: e.target.value })}
                    />
                </Form.Group>

                <Button onClick={onCreateMovie} variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export { CreateMoviePage };