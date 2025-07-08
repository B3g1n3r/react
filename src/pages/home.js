import React, { useState } from "react";
import QueryForm from "../components/QueryForm";
import QueryList from "../components/QueryList";

const Home = () => {
  const [queries, setQueries] = useState([]);

  const handleNewQuery = (query) => {
    setQueries([...queries, { id: Date.now(), text: query }]);
  };

  return (
    <div>
      <h2>Post a Query</h2>
      <QueryForm onSubmit={handleNewQuery} />
      <hr />
      <h3>All Queries</h3>
      <QueryList queries={queries} />
    </div>
  );
};

export default Home;
