import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
};

export default SearchBar;
