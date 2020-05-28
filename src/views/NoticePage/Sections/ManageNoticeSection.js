import React from "react";
import { MdError } from "react-icons/md";

const ManageNoticeSection = (props) => {
  const { dataToBeEdited } = props;

  const [noticeData, setNoticeData] = React.useState({
    title: "",
    details: "",
    link: "",
  });

  const onInputChange = (field, data) => {
    setNoticeData((state) => {
      const NoticeData = { ...state };
      NoticeData[field] = data;
      return NoticeData;
    });
  };

  const handleSubmit = (args) => {
    const data = { ...noticeData };
    if (args === "edit") {
      data["_id"] = dataToBeEdited.data._id;
    }
    const feedback = props.manageNotice(args, data);

    if (!feedback) {
      console.log("values cant be null");
    }
  };

  React.useEffect(() => {
    setNoticeData((state) => {
      const NoticeData = { ...state };
      NoticeData.title = dataToBeEdited.flag ? dataToBeEdited.data.title : "";
      NoticeData.details = dataToBeEdited.flag
        ? dataToBeEdited.data.details
        : "";
      NoticeData.link =
        dataToBeEdited.flag && dataToBeEdited.data.link
          ? dataToBeEdited.data.link
          : "";
      return NoticeData;
    });

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
            value={noticeData.title}
            onChange={(event) => onInputChange("title", event.target.value)}
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
            value={noticeData.details}
            onChange={(event) => onInputChange("details", event.target.value)}
            placeholder="Details"
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
            value={noticeData.link}
            onChange={(event) => onInputChange("link", event.target.value)}
            type="text"
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
