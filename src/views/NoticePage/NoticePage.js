import React from "react";
import axios from "axios";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";
import Pagination from "./Sections/Pagination";
import ManageNoticeSection from "./Sections/ManageNoticeSection";
import { GoPlus } from "react-icons/go";

//Image
import Loading from "assets/img/loading/loading.gif";

//Role
import { admin, librarian, student, faculty } from "Helpers/Roles";

const NoticePage = (props) => {
  const { apiLink } = props;

  const pageSize = 20;

  const { role } = props.user.userData;

  const [loading, setLoading] = React.useState(false);

  //true if new notice is to be added, false if notice to be edited
  const [dataToBeEdited, setDataToBeEdited] = React.useState({
    flag: false,
    data: null,
  });

  const [showNewNoticePage, setShowNewNoticePage] = React.useState(false);

  const [notices, setNotices] = React.useState({
    totalPages: 1,
    pageNumber: 1,
    data: [],
  });

  const toggleNewNoticePage = () => {
    setShowNewNoticePage((state) => {
      return !state;
    });
  };

  const setCurrentNoticePage = (pageNumber) => {
    setNotices((state) => {
      const Notice = { ...state };
      Notice.pageNumber = pageNumber;
      return Notice;
    });
  };

  const editClicked = (data) => {
    setDataToBeEdited((state) => {
      const DataToBeEdited = { ...state };
      DataToBeEdited.flag = true;
      DataToBeEdited.data = { ...data };
      return DataToBeEdited;
    });
    toggleNewNoticePage();
  };

  const manageNotice = (operation, data) => {
    if (operation !== "add" && operation !== "edit" && operation !== "delete") {
      return null;
    }

    setLoading(true);

    if ("add" === operation) {
      if (data && data.title && data.details) {
        axios
          .post(`${apiLink}/notices`, data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((result) => {
            console.log(result);
            axios
              .get(
                `${apiLink}/notices/library-notices/dateDesc=true&pageNumber=${notices.pageNumber}&pageSize=${pageSize}`
              )
              .then((results) => {
                console.log(results);
                setNotices((state) => {
                  const Notices = { ...state };
                  Notices.totalPages = results.data.total;
                  Notices.data = [...results.data.notices];
                  setLoading(false);
                  return Notices;
                });
              })
              .catch((err) => {
                console.log(err);
              });
            toggleNewNoticePage();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("More Fields required");
        return null;
      }
    } else if ("edit" === operation) {
      axios
        .patch(`${apiLink}/notices/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((result) => {
          console.log(result);
          axios
            .get(
              `${apiLink}/notices/library-notices/dateDesc=true&pageNumber=${notices.pageNumber}&pageSize=${pageSize}`
            )
            .then((results) => {
              console.log(results);
              setNotices((state) => {
                const Notices = { ...state };
                Notices.totalPages = results.data.total;
                Notices.data = [...results.data.notices];
                setLoading(false);
                return Notices;
              });
            })
            .catch((err) => {
              console.log(err);
            });
          toggleNewNoticePage();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if ("delete" === operation) {
      console.log(data);

      axios
        .delete(`${apiLink}/notices/${data._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((result) => {
          console.log(result);
          axios
            .get(
              `${apiLink}/notices/library-notices/dateDesc=true&pageNumber=${notices.pageNumber}&pageSize=${pageSize}`
            )
            .then((results) => {
              console.log(results);
              setNotices((state) => {
                const Notices = { ...state };
                Notices.totalPages = results.data.total;
                Notices.data = [...results.data.notices];
                setLoading(false);
                return Notices;
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return 1;
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${apiLink}/notices/library-notices/dateDesc=true&pageNumber=${notices.pageNumber}&pageSize=${pageSize}`
      )
      .then((results) => {
        console.log(results);
        setNotices((state) => {
          const Notices = { ...state };
          Notices.totalPages = results.data.total;
          Notices.data = [...results.data.notices];
          setLoading(false);
          return Notices;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [notices.pageNumber]);

  return (
    <div>
      <Navbar {...props} apiLink={props.apiLink} logOut={props.logOut} />
      {loading ? (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="align-self-center w-100 text-center">
            <img width="64px" height="64px" src={Loading} />
          </div>
        </div>
      ) : (
        <div style={{ paddingTop: "40px" }}>
          {!showNewNoticePage ? (
            <React.Fragment>
              <div className="jumbotron m-0 pb-2">
                <p className="h1 text-dander py-3 text-center">
                  Library Notice Board
                </p>
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col" style={{ width: "2%" }}>
                        Sl. No.
                      </th>
                      <th scope="col" style={{ width: "65%" }}>
                        Details
                      </th>
                      <th
                        scope="col"
                        style={{
                          width: `${role === librarian ? "28" : "33"}%`,
                        }}
                      >
                        Title
                      </th>
                      {(role === librarian || role === admin) && (
                        <th scope="col" colSpan="2" style={{ width: "5%" }}>
                          Modify
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {notices.data.map((data, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">
                            {index + 1 + pageSize * (notices.pageNumber - 1)}
                          </th>
                          <td>{data.details}</td>
                          <td>
                            {data.link ? (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`${data.link}`}
                              >
                                {data.is_downloadable ? "Download" : data.title}
                              </a>
                            ) : (
                              <p className="">{data.title}</p>
                            )}
                          </td>
                          {(role === librarian || role === admin) && (
                            <React.Fragment>
                              <td>
                                <button
                                  className="btn btn-sm btn-outline-warning"
                                  onClick={() => {
                                    editClicked(data);
                                  }}
                                >
                                  Edit
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => {
                                    manageNotice("delete", data);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </React.Fragment>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {(role === librarian || role === admin) && (
                  <div className="text-center py-2">
                    <button
                      className="btn btn-md btn-info"
                      onClick={toggleNewNoticePage}
                    >
                      <GoPlus className="h5" />
                      <span className="h5 pl-2">New Notice</span>
                    </button>
                  </div>
                )}
              </div>
              <Pagination
                currentPage={notices.pageNumber}
                totalPages={Math.ceil(notices.totalPages / pageSize)}
                setCurrentPage={setCurrentNoticePage}
              />
            </React.Fragment>
          ) : (
            <div>
              <ManageNoticeSection
                dataToBeEdited={dataToBeEdited}
                manageNotice={manageNotice}
                cleanDataToBeEdited={() => {
                  setDataToBeEdited((state) => {
                    const DataToBeEdited = { ...state };
                    DataToBeEdited.flag = false;
                    DataToBeEdited.data = null;
                    return DataToBeEdited;
                  });
                }}
              />
              <div className="text-center py-4 bg-light">
                <button
                  className="btn btn-md btn-info"
                  onClick={toggleNewNoticePage}
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default NoticePage;
