import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { delete_movie } from "../../actions/actions";
import Rating from "../Rating/Rating";
import MovieEdit from "../Movie_Edit/Movie_Edit";

function MovieCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.movie.image} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>

        <Link to={`/Description/${props.movie.id}`}>
          <Button variant="outline-danger">Description</Button>
        </Link>
        <Rating rate={props.movie.rating} />
      </Card.Body>
      <Button
        variant="outline-secondary"
        onClick={() => props.delete_movie(props.movie.id)}
      >
        Remove
      </Button>
      <MovieEdit movie={props.movie} />
    </Card>
  );
}

const mapDispatchToprops = {
  delete_movie
};

export default connect(null, mapDispatchToprops)(MovieCard);
