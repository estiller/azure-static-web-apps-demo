import React from "react";
import HomePage from "./HomePage";
import Header from "./Header";
import { Route } from "react-router-dom";
import BooksPage from "./BooksPage";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/books" component={BooksPage} />
    </>
  );
}

export default App;
