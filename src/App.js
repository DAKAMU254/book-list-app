import React from "react";
import BookList from "./Components/BookList";
import "./App.css"
import"./Components/Form"
import LoginForm from "./Components/Form";
import ColorSwitcher from "./ColorSwitcher";
const App = () => {
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 4, title: "Moby Dick", author: "Herman Melville", year: 1851 },
    { id: 5, title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
  ];

  return (
    <div className="App">
      <h1>My Book Collection</h1>
      <BookList books={books} />
      <LoginForm>Form</LoginForm>
      <ColorSwitcher>ColorSwitcher</ColorSwitcher>
    </div>
  );
};

export default App;
