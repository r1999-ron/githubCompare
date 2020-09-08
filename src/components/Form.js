import React from 'react';
import { Row} from 'react-bootstrap';



const Form = (props) => {
  return (
    <Row className="show-grid" className="text-center">
    <form onSubmit={(event) => props.handleUserFormSubmit(event)}>
        Username:<span>   </span>
        <label>
          <input
            className="form-control"
            name="username"
            type="text"
            placeholder="Enter username"
            required
            value={props.formData.username}
            onChange={props.handleFormChange}
          />
        </label>
        <span>   </span>
          <input
            type="submit"
            value="Compare"
            className="btn btn-primary"
          />

    </form>
    </Row>
  )};

export default Form;