import React from "react";
import { Col, Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import { connect } from "react-redux";


function MovieList(props) {
  return (
    <Row md={12}>
      <div className="movie_card">

        {(props.rate_search>1
      ? props.movieItems.filter(el=>el.rating>=props.rate_search)
      : props.input_search
      ? props.movieItems.filter(el=>el.title.toLowerCase().includes(props.input_search.toLowerCase().trim()))
        
        : props.movieItems)
        .map((el, key) => (
          <Col>
          <MovieCard movie={el} key={key} />
          </Col>
        )
        )
    }
      </div>
    </Row>
  );
}

const MapStateToProps = state => {
  return { movieItems: state.movieItems ,
    input_search:state.input_search,
    rate_search:state.rate_search
  
  };
};

export default connect(MapStateToProps)(MovieList);
