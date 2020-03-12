import React from "react";
import { Button, Form } from "react-bootstrap";

import Modal from "react-modal";
import { connect } from "react-redux";
import { edit_movie } from "../../actions/actions";

class MovieEdit extends React.Component {
  state = {
    modalIsOpen: false,
image:'',
title:'',
rating:''
    
  };

  componentDidMount = () => {
    this.setState({
      image:this.props.movie.image,
title:this.props.movie.title,
rating:this.props.movie.rating
    })
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
   
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

changeHandel = e => {
    this.setState({
     [ e.target.name]:e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button
          
          variant="outline-warning"
          onClick={this.openModal}
        >
          Edit
        </Button>
        
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <h2>Edit Movie</h2>
          <Form.Group>
            <Form.Label>Name Of Modified Movie</Form.Label>
            <Form.Control
              name="title"
              type="text"
              // placeholder={this.state.movie.title}
              value={this.state.title}
              onChange={this.changeHandel}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Poster Of Modified Movie</Form.Label>
            <Form.Control
              name="image"
              type="text"
              placeholder="Enter The Link Of Modified Movie"
              value={this.state.image}
              onChange={this.changeHandel}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating Of Modified Movie</Form.Label>
            <Form.Control
              name="rating"
              type="text"
              placeholder="Enter The Rating Of Modified Movie"
              value={this.state.rating}
              onChange={this.changeHandel}
            />
          </Form.Group>

          <Button
            variant="outline-primary"
              onClick={() =>
              this.props.edit_movie({
          
                image:this.state.image,
                title:this.state.title,
                rating:this.state.rating,
              id: this.props.movie.id
              },()=>this.closeModal)
            }
          >
            Save
          </Button>
          <Button variant="outline-danger" onClick={this.closeModal}>
            Cancel
          </Button>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps=state=>{
 return  {movieItems:state.movieItems}
}



export default connect(mapStateToProps, { edit_movie })(MovieEdit);