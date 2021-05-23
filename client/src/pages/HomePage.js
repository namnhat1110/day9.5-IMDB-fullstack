import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavigationBar } from "../components/NavigationBar";
import { Card, Col, Row } from 'react-bootstrap'
import { movieActions } from "../redux/actions";

function HomePage() {
  // const [movies, setMovies] = useState([]);
  const { movies } = useSelector((s) => s.movie)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll());
  }, [dispatch]);

  return (
    <div>
      <NavigationBar />
      <Row>
        <Col lg="3">
        </Col>
        <Col lg="9">

          <Row>
            {movies?.map((m) => {
              return (
                <Col>
                  <Card className="m-3" style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title
                        style={{
                          height: 50,
                        }}
                      >{m.title}</Card.Title>
                      <hr className="solid"></hr>
                      <Card.Text
                        style={{
                          height: 120,
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        {m.description}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text>
                        Genre: {m.genre}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text>
                        Average vote: {m.avg_vote} from {m.votes} votes
                      </Card.Text>
                      <Card.Text
                        style={{
                          height: 120,
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        Cast: {m.actors}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text> Director: {m.director}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export { HomePage };
