import React from "react";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//sections
import FilterSection from "./Sections/FilterSection";
import BookList from "./Sections/BookList";

const ResourcesPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <div
        className="py-5 px-3"
        style={{ minHeight: "80vh", marginTop: "80px" }}
      >
        <BookList listLabel="Magazine" />
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
