import React from "react";

//Icons
import { MdSearch } from "react-icons/md";

const FilterSection = (props) => {
  const [views, setViews] = React.useState({ showFilters: false });
  return (
    <div
      className="px-4 pb-4"
      style={{ marginBottom: "0px", paddingTop: "50px" }}
    >
      <div className="jumbotron py-3" style={{ marginBottom: "0px" }}>
        <button
          style={{ backgroundColor: "inherit" }}
          className="btn dropdown-toggle"
          type="button"
          onClick={() => {
            const Views = { ...views };
            Views.showFilters = Views.showFilters === true ? false : true;
            setViews(Views);
          }}
        >
          Filters
        </button>
        <span className="text-muted" style={{ fontSize: "12px" }}>
          <span className="px-2">
            Content Type: <span className="text-danger"> All</span>
          </span>
          <span className="px-2">
            Discipline: <span className="text-danger"> All</span>
          </span>
          <span className="px-2">
            Language: <span className="text-danger"> All</span>
          </span>
        </span>
      </div>
      {views.showFilters && (
        <React.Fragment>
          <div className="row">
            <div className="col-md-4 p-5">
              <div
                className="rounded px-2 bg-muted text-center"
                style={{ backgroundColor: "#E9ECEF" }}
              >
                <p className="h3 text-dark">Content Type</p>
              </div>
              <div className="border border-secondary p-2 text-muted rounded">
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" checked />
                  <span className="px-2">All</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Magazine</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Journal</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Departmental</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Story</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div
                className="rounded px-2 bg-muted text-center"
                style={{ backgroundColor: "#E9ECEF" }}
              >
                <p className="h3 text-dark">Discipline</p>
              </div>
              <div className="border border-secondary p-2 text-muted rounded">
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" checked />
                  <span className="px-2">All</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Information Technology</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Instrumentation</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Printing</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Power</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Construction</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div
                className="rounded px-2 bg-muted text-center"
                style={{ backgroundColor: "#E9ECEF" }}
              >
                <p className="h3 text-dark">Language</p>
              </div>
              <div className="border border-secondary p-2 text-muted rounded">
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" checked />
                  <span className="px-2">All</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">English</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">Bengla</span>
                </div>
                <div className="">
                  <input type="checkbox" className="bg-dark ckeckbox" />
                  <span className="px-2">English</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-outline-danger mr-4">Save</button>
              <button className="btn btn-outline-danger">Reset Filters</button>
            </div>
          </div>
        </React.Fragment>
      )}
      {!views.showFilters && (
        <div
          style={{
            maxWidth: "500px",
            margin: "0px auto",
            paddingTop: "18vh",
            fontFamily: "serif",
          }}
        >
          <p className="h1 text-danger text-center">Library Search</p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-danger" type="button">
                <MdSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
