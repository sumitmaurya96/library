import React from "react";

const FilterSection = (props) => {
  const { checkbox } = props;
  const { contentType, discipline, language } = checkbox;

  //console.log(checkbox);

  const refs = {
    contentType: [],
    discipline: [],
    language: [],
  };

  const setRef = (contentType, field, ref) => {
    const obj = {};
    obj[field] = React.createRef();
    obj[field] = ref;
    refs[contentType].push(obj);
  };

  const handleClick = (args) => {
    const Checkbox = { ...checkbox };
    for (const ref in refs) {
      for (let i = 0; i < refs[ref].length; i++) {
        for (const field in refs[ref][i]) {
          //console.log(refs[ref][i][field].checked);
          if ("save".localeCompare(args) === 0) {
            Checkbox[ref][i].isChecked = refs[ref][i][field].checked;
          } else if ("reset".localeCompare(args) === 0) {
            Checkbox[ref][i].isChecked = false;
          }
        }
      }
    }

    props.setCheckboxStatus(Checkbox);
    return;
  };

  return (
    <div
      className={`px-${Math.floor(
        (5 * (window.innerWidth - 300)) / (1600 - 300)
      )}`}
      style={{ marginBottom: "0px", paddingTop: "50px" }}
    >
      <div className="row">
        <div className="col-md-4 p-5">
          <div
            className="rounded px-2 bg-muted text-center"
            style={{ backgroundColor: "#E9ECEF" }}
          >
            <p className="h3 text-dark">Content Type</p>
          </div>
          <div className="border border-secondary p-2 text-muted rounded">
            {contentType.map((val, index) => {
              return (
                <div key={val.id} className="">
                  <input
                    ref={(ref) => setRef("contentType", val.id, ref)}
                    type="checkbox"
                    className="ckeckbox"
                    defaultChecked={val.isChecked}
                  />
                  <span className="px-2">{val.value}</span>
                </div>
              );
            })}
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
            {discipline.map((val, index) => {
              return (
                <div key={val.id} className="">
                  <input
                    ref={(ref) => setRef("discipline", val.id, ref)}
                    type="checkbox"
                    className="ckeckbox"
                    defaultChecked={val.isChecked}
                  />
                  <span className="px-2">{val.value}</span>
                </div>
              );
            })}
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
            {language.map((val, index) => {
              return (
                <div key={val.id} className="">
                  <input
                    ref={(ref) => setRef("language", val.id, ref)}
                    type="checkbox"
                    className="ckeckbox"
                    defaultChecked={val.isChecked}
                  />
                  <span className="px-2">{val.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <button
            className="btn btn-outline-danger mr-4"
            onClick={() => handleClick("save")}
          >
            Save
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleClick("reset")}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
