import React, { useState } from "react";

export default function SearchBar() {
  let [query, setQuery] = useState("");

  return {
    query,
    renderSearchBar: (
      <div className="d-flex">
        <span style={{ marginTop: '2px', fontWeight: 'bold' }}>
          Train Station:
        </span>
        <input
          style={{ marginLeft: '5px' }}
          type="text"
          placeholder="E.g King Albert Park"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
    ),
  };
}
