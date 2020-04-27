import React from "react";
import { MdError } from "react-icons/md";

const ManageNoticeSection = (props) => {
  const { dataToBeEdited } = props;
  const operation = {
    add: "add",
    edit: "edit",
  };

  const titleRef = React.createRef();
  const linkRef = React.createRef();
  const detailsRef = React.createRef();

  const handleSubmit = (args) => {
    const data = {
      id: `${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()}${new Date().getTime()}`,
      title: null,
      details: null,
      link: null,
      date: `${new Date().toISOString()}`,
    };

    if (operation.add.localeCompare(args) === 0) {
      data.title = titleRef.current.value;
      data.details = detailsRef.current.value;
      data.link = linkRef.current.value;
    } else if (operation.edit.localeCompare(args) === 0) {
      data.id = dataToBeEdited.data.id;
      data.title = titleRef.current.value;
      data.details = detailsRef.current.value;
      data.link = linkRef.current.value;
    }

    const feedback = props.manageNotice(args, data);

    if (!feedback) {
      console.log("values cant be null");
    }
  };

  React.useEffect(() => {
    return () => {
      //component unmounting
      props.cleanDataToBeEdited();
    };
  }, []);

  return (
    <div className="jumbotron m-0" style={{ marginBottom: "0px" }}>
      <div className="bg-info py-1 my-2 rounded">
        <p className="h1 text-light text-center">
          {!dataToBeEdited.flag ? "New Notice" : "Edit Notice"}
        </p>
      </div>
      <form className="mx-auto rounded border border-info p-3">
        <div className="py-2" style={{ position: "relative" }}>
          <input
            ref={titleRef}
            defaultValue={!dataToBeEdited.flag ? "" : dataToBeEdited.data.title}
            type="text"
            placeholder="Title"
            id="title"
            className="login-form-control form-control"
          />
          {/* implement show error */}
          {/* <span
            className="h3 text-danger"
            style={{ position: "absolute", top: "20%", right: "5px" }}
          >
            <MdError />
          </span> */}
        </div>
        <div className="py-2" style={{ position: "relative" }}>
          <textarea
            ref={detailsRef}
            placeholder="Details"
            defaultValue={
              !dataToBeEdited.flag ? "" : dataToBeEdited.data.details
            }
            row="1"
            className="form-control login-form-control"
            id="details"
          />
          {/* <span
            className="h3 text-danger"
            style={{ position: "absolute", top: "5px", right: "5px" }}
          >
            <MdError />
          </span> */}
        </div>
        <div className="py-2">
          <input
            ref={linkRef}
            type="text"
            defaultValue={!dataToBeEdited.flag ? "" : dataToBeEdited.data.link}
            placeholder="Link(optional)"
            className="form-control login-form-control"
            id="link"
          />
        </div>
        <div className="text-center py-3">
          <button
            type="submit"
            className="btn btn-md btn-outline-info px-4"
            onClick={(e) => {
              e.preventDefault();
              !dataToBeEdited.flag ? handleSubmit("add") : handleSubmit("edit");
            }}
          >
            publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageNoticeSection;
