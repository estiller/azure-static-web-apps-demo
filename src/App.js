import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Header from "./Header";
import { Route } from "react-router-dom";
import BooksPage from "./BooksPage";

function App() {
  const [principal, setPrincipal] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/.auth/me");
      if (response.ok) {
        const content = await response.json();
        setPrincipal(content.clientPrincipal);
      } else {
        setPrincipal(null);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header principal={principal} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/books" component={BooksPage} />
    </>
  );
}

export default App;
