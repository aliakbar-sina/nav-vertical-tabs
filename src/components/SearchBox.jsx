import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Here..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <button type="button" class="btn btn-primary">
          Search
        </button>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
