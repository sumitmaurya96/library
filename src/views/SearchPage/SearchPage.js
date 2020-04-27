import React from "react";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//Icons
import { MdSearch } from "react-icons/md";

//sections
import FilterSection from "./Sections/FilterSection";
import FilterStatus from "./Sections/FilterStatus";

const SearchPage = (props) => {
  const [filters, setFilters] = React.useState({
    show: false,
    checkbox: {
      contentType: [
        { id: "all", value: "All", isChecked: true },
        { id: "magazine", value: "Magazines", isChecked: false },
        { id: "journal", value: "Journals", isChecked: false },
        { id: "departmental", value: "Departmental", isChecked: false },
        { id: "story", value: "Story", isChecked: false },
      ],
      discipline: [
        { id: "all", value: "All", isChecked: true },
        { id: "it", value: "Information Technology", isChecked: false },
        { id: "instrumentation", value: "Instrumentation", isChecked: false },
        { id: "printing", value: "Printing", isChecked: false },
        { id: "power", value: "Power", isChecked: false },
        { id: "construction", value: "Construction", isChecked: false },
      ],
      language: [
        { id: "all", value: "All", isChecked: true },
        { id: "hindi", value: "Hindi", isChecked: false },
        { id: "english", value: "English", isChecked: false },
        { id: "bangla", value: "Bangla", isChecked: false },
      ],
    },
  });

  const toggleFilterSection = () => {
    setFilters((state) => {
      const Filters = { ...state };
      Filters.show = !Filters.show;
      return Filters;
    });
  };

  const setCheckboxStatus = (checkbox) => {
    setFilters((state) => {
      const Filters = { ...state };
      console.log(checkbox);
      Filters.checkbox = { ...checkbox };
      return Filters;
    });
    //also toggle
    toggleFilterSection();
  };

  const searchClick = (args) => {
    console.log(filters.checkbox);
  };

  return (
    <div>
      <Navbar {...props} />
      <div className="px-3" style={{ minHeight: "80vh", paddingTop: "80px" }}>
        <FilterStatus
          toggleFilterSection={toggleFilterSection}
          {...filters.checkbox}
        />
        {filters.show ? (
          <FilterSection
            setCheckboxStatus={setCheckboxStatus}
            checkbox={filters.checkbox}
          />
        ) : (
          <div
            style={{
              maxWidth: "500px",
              margin: "0px auto",
              paddingTop: "18vh",
              fontFamily: "serif",
            }}
          >
            <p
              className="text-info text-center"
              style={{
                fontSize: `${
                  16 + ((40 - 16) * (window.innerWidth - 300)) / (1600 - 300)
                }px`,
              }}
            >
              Library Search
            </p>
            <div
              className="input-group"
              style={{
                position: "relative",
              }}
            >
              <input
                type="text"
                className="form-control border-info rounded-0"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div
                style={{
                  position: "relative",
                  top: "4px",
                  right: "25px",
                  zIndex: "10",
                }}
              >
                <a
                  className="h4 text-info"
                  href="#"
                  onClick={() => searchClick("save")}
                >
                  <MdSearch />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
