import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

function Filter({ value, onChange }) {
  const filterInputId = uuid();
  return (
    <label htmlFor={filterInputId}>
      Find contacts by name
      <input
        id={filterInputId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
