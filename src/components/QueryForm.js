import React, { useState } from "react";

const QueryForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const submit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div>
      <textarea
        rows="3"
        cols="40"
        placeholder="Type your query..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={submit}>Submit Query</button>
    </div>
  );
};

export default QueryForm;
