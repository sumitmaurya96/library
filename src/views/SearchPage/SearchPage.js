import React from "react";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//sections
import FilterSection from "./Sections/FilterSection";

const SearchPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <div className="py-5 px-3" style={{ minHeight: "80vh" }}>
        <FilterSection />
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
