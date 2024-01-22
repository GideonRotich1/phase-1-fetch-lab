function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      // Call renderBooks function with the JSON-ified data
      renderBooks(data);
      return data; // Return the data for testing purposes
    })
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const bookList = document.getElementById('bookList');
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}

// Call fetchBooks when index.html is loaded
document.addEventListener('DOMContentLoaded', fetchBooks);

// Export the fetchBooks function for testing purposes
export { fetchBooks };
