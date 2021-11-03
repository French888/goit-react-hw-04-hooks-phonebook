import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
