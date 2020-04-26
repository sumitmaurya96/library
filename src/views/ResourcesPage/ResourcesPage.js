import React from "react";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//sections
import FilterSection from "./Sections/FilterSection";
import BookList from "./Sections/BookList";

//Database
import bookDatabase from "views/virtualDB/books/books";

const ResourcesPage = (props) => {
  const fetchBookData = (pages, startIndex, category) => {
    console.log(pages, startIndex, category);

    let bookCategory;
    let counter = 0;
    const Books = {
      booksData: [],
      totalPages: 100,
      category: category,
    };

    if ("Magazines".localeCompare(category) === 0) {
      bookCategory = "Java";
    }
    if ("Journals".localeCompare(category) === 0) {
      bookCategory = "Web Development";
    }
    if ("Departmental".localeCompare(category) === 0) {
      bookCategory = "Internet";
    }
    if ("Story".localeCompare(category) === 0) {
      bookCategory = "Python";
    }
    if ("Others".localeCompare(category) === 0) {
      bookCategory = 0;
    }

    for (let i = 0; i < bookDatabase.length; i++) {
      const book = bookDatabase[i];

      if (Books.booksData.length >= pages) {
        break;
      }

      if (book && book.isbn) {
        //console.log(book);
        if (bookCategory === 0) {
          if (!book.categories.length) {
            if (counter >= startIndex) Books.booksData.push(book);
            counter++;
          }
        } else {
          book.categories.forEach((cat, index) => {
            const Category = cat.trim();
            if (bookCategory.localeCompare(Category) === 0) {
              counter++;
              if (counter >= startIndex) Books.booksData.push(book);
              return;
            }
          });
        }
      }
    }
    console.log(Books);
    return Books;
  };

  const fetchPageData = (pageNumber, category) => {
    const totalPagesToReturn = 20;
    const startIndex = (pageNumber - 1) * 20;
    //console.log(pageNumber, category);
    return fetchBookData(totalPagesToReturn, startIndex, category);
  };

  return (
    <div>
      <Navbar {...props} />
      <div
        className="py-1 px-5"
        style={{ minHeight: "80vh", marginTop: "80px" }}
      >
        <BookList {...props} fetchPageData={fetchPageData} />
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
