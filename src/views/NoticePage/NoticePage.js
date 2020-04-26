import React from "react";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";
import Pagination from "./Sections/Pagination";
import ManageNoticeSection from "./Sections/ManageNoticeSection";

const NoticePage = (props) => {
  const type = {
    student: "student",
    faculty: "faculty",
    librarian: "librarian",
  };

  //true if new notice is to be added, false if notice to be edited
  const [dataToBeEdited, setDataToBeEdited] = React.useState({
    flag: false,
    data: null,
  });

  const [showNewNoticePage, setShowNewNoticePage] = React.useState(false);
  const [user, setUser] = React.useState({
    userType: type.librarian,
  });

  const [notice, setNotice] = React.useState({
    currentPage: 1,
    totalPages: 1,
  });

  const [tableData, setTableData] = React.useState([
    {
      id: "notice1",
      details: "National Legal Services Authority",
      title: "Legal Services",
      link: "https://nalsa.gov.in/",
      is_downloadable: false,
    },
    {
      id: "notice2",
      details: "ओपन हाउस की बैठक का पुनर्निर्धारण",
      title: "Legal Services",
      link: "https://nalsa.gov.in/",
      is_downloadable: true,
    },
    {
      id: "notice3",
      details: "National Legal Services Authority",
      title: "Legal Services",
      link: "https://nalsa.gov.in/",
      is_downloadable: false,
    },
    {
      id: "notice4",
      details: "National Legal Services Authority",
      title: "Legal Services",
      link: "https://nalsa.gov.in/",
      is_downloadable: false,
    },
    {
      id: "notice5",
      details: "National Legal Services Authority",
      title: "Legal Services",
      link: "https://nalsa.gov.in/",
      is_downloadable: true,
    },
    {
      id: "notice6",
      details: "National Legal Services Authority",
      title: "Legal Services",
      link: "https://nalsa.gov.in/",
      is_downloadable: false,
    },
    {
      id: "notice7",
      details: "National Legal Services Authority",
      title: "Legal Services",
      link: "https://nalsa.gov.in/",
      is_downloadable: false,
    },
    {
      id: "notice8",
      details: "National Legal Services Authority",
      title: "Legal Services",
      link: "https://nalsa.gov.in/",
      is_downloadable: false,
    },
  ]);

  const toggleNewNoticePage = () => {
    setShowNewNoticePage((state) => {
      return !state;
    });
  };

  const manageNotice = (operation, data) => {
    const TableData = [...tableData];
    if (!data || !data.title || !data.id || !data.link || !operation) {
      return null;
    }
    //axios operations
    if ("add".localeCompare(operation) === 0) {
      TableData.unshift(data);
      toggleNewNoticePage();
    } else if (
      "delete".localeCompare(operation) === 0 ||
      "edit".localeCompare(operation) === 0
    ) {
      let index = -1;
      for (index = 0; index < TableData.length; index++)
        if (TableData[index].id.localeCompare(data.id) === 0) break;

      if ("delete".localeCompare(operation) === 0) TableData.splice(index, 1);
      else {
        TableData.splice(index, 1, data);
        //console.log(operation, data);
        toggleNewNoticePage();
      }
    }

    setTableData(TableData);
    return 1;
  };

  const setCurrentNoticePage = (pageNumber) => {
    setNotice((state) => {
      const Notice = { ...state };
      Notice.currentPage = pageNumber;
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

  React.useEffect(() => {
    if (props.user && props.user.userType) {
      setUser((prevState) => {
        const User = { ...prevState };
        User.userType = props.user.userType;
        return User;
      });
    }
  }, []);

  return (
    <div>
      <Navbar {...props} />
      <div style={{ paddingTop: "40px" }}>
        {!showNewNoticePage && (
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
                        width: `${
                          type.librarian.localeCompare(user.userType) === 0
                            ? "28"
                            : "33"
                        }%`,
                      }}
                    >
                      Title
                    </th>
                    {type.librarian.localeCompare(user.userType) === 0 && (
                      <th scope="col" colSpan="2" style={{ width: "5%" }}>
                        Modify
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.details}</td>
                        <td>
                          <a target="_blank" href={`${data.link}`}>
                            {data.is_downloadable ? "Download" : data.title}
                          </a>
                        </td>
                        {type.librarian.localeCompare(user.userType) === 0 && (
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
                                delete
                              </button>
                            </td>
                          </React.Fragment>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {type.librarian.localeCompare(user.userType) === 0 && (
                <div className="text-center py-2">
                  <button
                    className="btn btn-md btn-info"
                    onClick={toggleNewNoticePage}
                  >
                    New Notice
                  </button>
                </div>
              )}
            </div>
            <Pagination
              currentPage={notice.currentPage}
              totalPages={notice.totalPages}
              setCurrentPage={setCurrentNoticePage}
            />
          </React.Fragment>
        )}
        {showNewNoticePage && (
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
      <Footer />
    </div>
  );
};

export default NoticePage;
