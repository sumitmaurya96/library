import React from "react";
import axios from "axios";

//Sections
import ShowBookDetails from "./Sections/ShowBookDetails";
import EditBookDetails from "./Sections/EditBookDetails";

//Icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

//Role
import { librarian, admin, student, faculty } from "Helpers/Roles";

const BookDetailsPage = (props) => {
  const { role, bookDetails, favourites, id } = props;
  console.log(favourites);

  const [showEditBookDetails, setShowEditBookDetails] = React.useState(false);
  const [liked, setLiked] = React.useState(() => {
    let flag = false;
    for (const fav of favourites) {
      if (fav.bookId === bookDetails._id) {
        flag = true;
        break;
      }
    }
    return flag;
  });

  const saveEditedBookDetails = (data) => {
    console.log(data);

    setShowEditBookDetails((state) => {
      return !state;
    });
    //Return success
    return 1;
  };

  const handleClick = (args) => {
    if ("edit" === args) {
      setShowEditBookDetails((state) => {
        return !state;
      });
    } else if ("delete" === args) {
      //use axios delete
      axios
        .delete(`http://localhost:5000/books/${bookDetails._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((result) => {
          console.log("deleted successfully");
          props.changeFlag();
          props.goBack();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const toggleLiked = () => {
    axios
      .patch(
        `http://localhost:5000/users/favourites/delete=${liked}`,
        {
          bookId: bookDetails._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        setLiked((state) => {
          return !state;
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <React.Fragment>
      {showEditBookDetails ? (
        <EditBookDetails
          changeFlag={() => props.changeFlag()}
          {...props}
          goBack={() => handleClick("edit")}
          bookDetails={bookDetails}
          saveEditedDetails={saveEditedBookDetails}
        />
      ) : (
        <React.Fragment>
          <ShowBookDetails role={role} {...props} bookDetails={bookDetails} />
          {(role === librarian || role === admin) && (
            <div className="text-center p-2">
              <button
                className="btn btn-md btn-warning mr-2"
                onClick={() => handleClick("edit")}
              >
                Edit Details
              </button>
              <button
                className="btn btn-md btn-danger ml-2"
                onClick={() => handleClick("delete")}
              >
                Delete Book
              </button>
            </div>
          )}
          {(role === student || role === faculty) && (
            <div className="d-inline-block m-2">
              <a
                href="#"
                className="h2 m-2 text-danger"
                onClick={() => {
                  toggleLiked();
                }}
              >
                {liked ? <AiFillHeart /> : <AiOutlineHeart />}
              </a>
              <button className="btn btn-sm btn-outline-success m-2">
                Add to cart <FiShoppingCart />
              </button>
            </div>
          )}
        </React.Fragment>
      )}
      <div className="text-center py-4">
        <button className="btn btn-sm btn-info" onClick={() => props.goBack()}>
          Go to resources
        </button>
      </div>
    </React.Fragment>
  );
};

export default BookDetailsPage;
