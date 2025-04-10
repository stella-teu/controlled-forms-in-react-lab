import { useState } from "react";

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBooks, setNewBooks] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { name, value} = event.target;
    setNewBooks((prevBook) => ({
        ...prevBook,
        [name]: value,
    }));
    console.log(name, value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([ ...books, newBooks]);
    setNewBooks({ title: "", author: "" });
  };
  return (
    <>
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input 
          type="text"
            name="title"
            value={newBooks.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
          type="text"
            name="author"
            value={newBooks.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCards">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookShelf;
