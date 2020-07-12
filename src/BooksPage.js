import React, { useState, useEffect } from "react";
import BooksList from "./BooksList";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/books").then((response) => {
      setIsLoading(false);
      if (response.ok) {
        setBooks(response.json());
      } else {
        setError(response.status);
      }
    });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : error == null ? (
    <BooksList books={books} />
  ) : (
    <div>API error code: {error}</div>
  );
}
