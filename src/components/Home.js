import React, { useEffect, useState } from 'react';
import { API, Storage } from 'aws-amplify';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await API.get('bookstoreapi', '/books');
      setBooks(bookData);
    };
    fetchBooks();
  }, []);

  const downloadBook = async (key) => {
    const url = await Storage.get(key);
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>Book Store</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - <button onClick={() => downloadBook(book.pdfKey)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
