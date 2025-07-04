import React from "react";

const QueryList = ({ queries }) => {
  return (
    <ul>
      {queries.map((q) => (
        <li key={q.id} style={{ marginBottom: "10px" }}>
          <strong>Query:</strong> {q.text}
        </li>
      ))}
    </ul>
  );
};

export default QueryList;
