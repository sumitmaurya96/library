import React from "react";

const FilterSection = (props) => {
  const { initialFilter, defaultFilter } = props;

  const [views, setViews] = React.useState({
    showFilters: false,
    filters: defaultFilter,
  });

  const onInputChange = (field, subField, value) => {
    console.log(value);

    setViews((state) => {
      const Views = { ...state };

      for (const prop in Views.filters[field]) {
        Views.filters[field][prop] = false;
      }

      Views.filters[field][subField] = value;
      return Views;
    });
  };

  const getFilterLabel = (field) => {
    for (const prop in views.filters[field]) {
      if (views.filters[field][prop] === true) {
        return prop;
      }
    }
  };

  const handleFilterSubmitAction = (args) => {
    setViews((state) => {
      const Views = { ...state };
      if (args === "reset") {
        Views.filters = initialFilter;
      }
      Views.showFilters = false;
      return Views;
    });

    const viewsFilter = { ...views.filters };

    const fil = args === "reset" ? initialFilter : viewsFilter;

    props.setFilterHandler(fil);
  };

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
            Content Type:{" "}
            <span className="text-danger">
              {" "}
              {getFilterLabel("contentType")}
            </span>
          </span>
          <span className="px-2">
            Discipline:{" "}
            <span className="text-danger"> {getFilterLabel("discipline")}</span>
          </span>
          <span className="px-2">
            Language:{" "}
            <span className="text-danger"> {getFilterLabel("language")}</span>
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
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange("contentType", "all", event.target.checked)
                    }
                    checked={views.filters.contentType.all}
                  />
                  <span className="px-2">All</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange(
                        "contentType",
                        "magazine",
                        event.target.checked
                      )
                    }
                    checked={views.filters.contentType.magazine}
                  />
                  <span className="px-2">Magazine</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange(
                        "contentType",
                        "journal",
                        event.target.checked
                      )
                    }
                    checked={views.filters.contentType.journal}
                  />
                  <span className="px-2">Journal</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange(
                        "contentType",
                        "departmental",
                        event.target.checked
                      )
                    }
                    checked={views.filters.contentType.departmental}
                  />
                  <span className="px-2">Departmental</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange(
                        "contentType",
                        "story",
                        event.target.checked
                      )
                    }
                    checked={views.filters.contentType.story}
                  />
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
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange("discipline", "all", event.target.checked)
                    }
                    checked={views.filters.discipline.all}
                  />
                  <span className="px-2">All</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange("discipline", "it", event.target.checked)
                    }
                    checked={views.filters.discipline.it}
                  />
                  <span className="px-2">Information Technology</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange(
                        "discipline",
                        "instru",
                        event.target.checked
                      )
                    }
                    checked={views.filters.discipline.instru}
                  />
                  <span className="px-2">Instrumentation</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange(
                        "discipline",
                        "printing",
                        event.target.checked
                      )
                    }
                    checked={views.filters.discipline.printing}
                  />
                  <span className="px-2">Printing</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange("discipline", "power", event.target.checked)
                    }
                    checked={views.filters.discipline.power}
                  />
                  <span className="px-2">Power</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange(
                        "discipline",
                        "construction",
                        event.target.checked
                      )
                    }
                    checked={views.filters.discipline.construction}
                  />
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
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange("language", "all", event.target.checked)
                    }
                    checked={views.filters.language.all}
                  />
                  <span className="px-2">All</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange("language", "english", event.target.checked)
                    }
                    checked={views.filters.language.english}
                  />
                  <span className="px-2">English</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange("language", "bengla", event.target.checked)
                    }
                    checked={views.filters.language.bengla}
                  />
                  <span className="px-2">Bengla</span>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="bg-dark ckeckbox"
                    onChange={(event) =>
                      onInputChange("language", "hindi", event.target.checked)
                    }
                    checked={views.filters.language.hindi}
                  />
                  <span className="px-2">Hindi</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <button
                className="btn btn-outline-danger mr-4"
                onClick={() => handleFilterSubmitAction("okay")}
              >
                Okay
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleFilterSubmitAction("reset")}
              >
                Reset
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default FilterSection;
