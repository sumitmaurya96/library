import React from "react";

const FilterStatus = (props) => {
  const { contentType, discipline, language } = props;

  return (
    <div className="jumbotron py-3" style={{ marginBottom: "0px" }}>
      <button
        style={{
          backgroundColor: "inherit",
          fontSize: `${
            10 + ((14 - 10) * (window.innerWidth - 300)) / (1600 - 300)
          }px`,
        }}
        className="btn dropdown-toggle"
        type="button"
        onClick={() => {
          props.toggleFilterSection();
        }}
      >
        Filters
      </button>
      <span
        className="text-muted"
        style={{
          fontSize: `${
            9 + ((14 - 9) * (window.innerWidth - 300)) / (1600 - 300)
          }px`,
        }}
      >
        <span className="px-2">
          Content Type:{" "}
          <span className="text-info">
            {contentType ? (
              <span>
                {contentType.map((val, index) => {
                  if (val.isChecked) {
                    return (
                      <span className="mr-1" key={index}>
                        {val.value}
                      </span>
                    );
                  }
                  return;
                })}
              </span>
            ) : (
              "all"
            )}
          </span>
        </span>
        <span className="px-2">
          Discipline:{" "}
          <span className="text-info">
            {" "}
            {discipline ? (
              <span>
                {discipline.map((val, index) => {
                  if (val.isChecked) {
                    return (
                      <span className="mr-1" key={index}>
                        {val.value}
                      </span>
                    );
                  }
                  return;
                })}
              </span>
            ) : (
              "all"
            )}
          </span>
        </span>
        <span className="px-2">
          Language:{" "}
          <span className="text-info">
            {language ? (
              <span>
                {language.map((val, index) => {
                  if (val.isChecked) {
                    return (
                      <span className="mr-1" key={index}>
                        {val.value}
                      </span>
                    );
                  }
                  return;
                })}
              </span>
            ) : (
              "all"
            )}
          </span>
        </span>
      </span>
    </div>
  );
};

export default FilterStatus;
