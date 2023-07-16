import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, serachPost } = useGlobalContext();
  return (
    <>
      <h1 style={{ color: "white" }}>This is API from HN search API</h1>
      <form
        style={{ width: "50%" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="search-input"
          type="text"
          placeholder="Text here to Search"
          value={query}
          onChange={(e) => {
            serachPost(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default Search;
