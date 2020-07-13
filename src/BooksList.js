import React from "react";

export default function BooksList({ books }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          return (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
