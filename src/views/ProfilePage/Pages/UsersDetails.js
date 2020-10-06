import React from "react";
import axios from "axios";

//import Pagination from "./Sections/Pagination";
import UserCard from "components/UserCard";

//Role
import { admin, librarian, student, faculty } from "Helpers/Roles";

const UsersDetails = (props) => {
  const {
    handleNavigationClick = () => {},
    handleFavouriteClick = () => {},
    userRole,
    apiLink,
    fromPage,
    data = [],
  } = props;

  const action = {
    delete: "delete",
    edit: "edit",
    favourite: "favourite",
  };

  const handleClick = (operation, data) => {
    if (action.edit === operation) {
      console.log("Edit Clicked");
    } else if (action.favourite === operation) {
      console.log("Favourite Clicked");
      console.log(data);
      console.log(fromPage);
      handleFavouriteClick(action.favourite, data, fromPage);
    } else if (action.delete === operation) {
      console.log(data);

      axios
        .delete(`${apiLink}/users/${data._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const populateList = () => {
    const outerDiv = [];
    let innerDiv = [];
    data.map((user, index) => {
      console.log(user);
      innerDiv.push(
        <div key={index} className="col-md-6">
          <UserCard
            apiLink={apiLink}
            key={index}
            userData={user}
            favouriteClick={() =>
              handleClick(action.favourite, user.favourites)
            }
            onEditClick={() => handleClick(action.edit, user)}
            onDeleteClick={() => handleClick(action.delete, user)}
          />
        </div>
      );
      if (index % 1 == 0 || index === data.length - 1) {
        outerDiv.push(
          <div key={index} className="row">
            {innerDiv}
          </div>
        );
        innerDiv = [];
      }
    });

    return outerDiv;
  };

  return (
    <React.Fragment>
      <div className="jumbotron m-0 pb-2 h-100">
        <p className="h1 text-dander py-3 text-center">User Details</p>
        {populateList()}
      </div>
      {/* <Pagination
        currentPage={users.pageNumber}
        totalPages={Math.ceil(users.totalPages / pageSize)}
        setCurrentPage={setCurrentUsersDetails}
      /> */}
      <div className="text-center py-4 bg-light">
        <button
          className="btn btn-md btn-info"
          onClick={() => handleNavigationClick("back")}
        >
          Go Back
        </button>
      </div>
    </React.Fragment>
  );
};

export default UsersDetails;
