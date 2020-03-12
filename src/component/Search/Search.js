import React from 'react'
import {Form,Row,Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import {search_input} from '../../actions/actions'
import Rating from '../Rating/Rating'
function Search(props) {
    return (
        <Form>
  <Row>
    <Col>
      <Form.Control type="text" placeholder="Enter the name of Your Movie" onChange={(e)=>props.search_input(e.target.value)} />
      <Rating/>
    </Col>
    </Row>
    </Form>
    )
}


export default connect(null,{search_input})(Search)