import React from "react";

const UserCard = (props) => {
  const {
    userData = {},
    onEditClick = () => {},
    onDeleteClick = () => {},
    favouriteClick = () => {},
    apiLink,
  } = props;

  const {
    profilePicUrl,
    firstname,
    username,
    lastname,
    email,
    role,
    favourites,
  } = userData;

  return (
    <React.Fragment>
      <div
        className="row m-1 m-0 border-box bg-inf"
        style={{ background: "rgba(23, 162, 184, 0.6)" }}
      >
        <div className="col-lg-4 p-2 text-center">
          <img
            src={`${apiLink}${profilePicUrl}`}
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <br />
          <div className="d-inline-block pt-2">
            <button
              className="btn btn-sm btn-outline-warning mr-2"
              onClick={onEditClick}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-outline-danger ml-2"
              onClick={onDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="col-lg-8 p-2">
          <div className="w-100 d-flex justify-content-center">
            <div className="d-inline-block float-lef text-light">
              <p>{`${firstname} ${lastname}`}</p>
              <p>{username}</p>
              <p>{email}</p>
              <p>Role: {role}</p>
              Favourites:{" "}
              <button
                className="btn btn-sm btn-warning"
                onClick={favouriteClick}
              >
                {favourites.length} Item{favourites.length > 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCard;
