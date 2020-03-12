import React from "react";
import { Button, Form } from "react-bootstrap";

import Modal from "react-modal";
import { connect } from "react-redux";
import { add_movie } from "../../actions/actions";

class AddMovie extends React.Component {
  state = {
    modalIsOpen: false,

    title: "",
    image: "",
    rating: ""
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button
          className="Add_Button"
          variant="outline-dark"
          onClick={this.openModal}
        >
          ADD
        </Button>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <h2>Add A New Movie</h2>
          <Form.Group>
            <Form.Label>Name OfMovie</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Enter The Name Of Your Movie"
              onChange={this.handelChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Poster Of Your Movie</Form.Label>
            <Form.Control
              name="image"
              type="text"
              placeholder="Enter The Link Of Your Movie"
              onChange={this.handelChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating Of Your Movie</Form.Label>
            <Form.Control
              name="rating"
              type="text"
              placeholder="Enter The Rating Of Your Movie"
              onChange={this.handelChange}
            />
          </Form.Group>

          <Button
            variant="outline-primary"
            onClick={() =>
              this.props.add_movie({
                id: Date.now(),
                title: this.state.title,
                rating: this.state.rating,
                image: this.state.image
              })
            }
          >
            Submit
          </Button>
          <Button variant="outline-danger" onClick={this.closeModal}>
            Cancel
          </Button>
        </Modal>
      </div>
    );
  }
}
export default connect(null, { add_movie })(AddMovie);
