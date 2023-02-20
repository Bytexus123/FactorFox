import React from "react";
import { Button, Input, InputGroup } from "reactstrap";

const Search = () => {
  return (
    <div className="search-section d-none d-md-block px-4">
      <InputGroup size="sm">
        <Input placeholder="Search" />
        <Button>
          <i className="fa-regular fa-magnifying-glass fa-lg fa-fw"></i>
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
