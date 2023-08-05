import React from "react";

const Search = ({ searchText, onChange }) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by Order ID"
    />
  );
};

export default Search;
