import React from "react";
import axios from "axios";

const EditBookDetails = (props) => {
  const { apiLink } = props;
  const [bookDetails, setBookDetails] = React.useState({
    title: "",
    authors: "",
    publication: "",
    edition: "",
    categories: "",
    status: "",
    dateOfPurchase: "",
    pageCount: "",
    bookCount: "",
    price: "",
    isbn: "",
    classNo: "",
    bookNo: "",
    accessionNo: "",
    shortDescription: "",
    longDescription: "",
    thumbnail: null,
    ebook: null,
  });

  const onInputChanege = (fieldName, value) => {
    setBookDetails((state) => {
      const BookDetails = { ...state };
      BookDetails[fieldName] = value;
      console.log(bookDetails);
      return BookDetails;
    });
  };

  const handleSubmit = () => {
    const updateOps = {};

    for (const prop in bookDetails) {
      if (bookDetails[prop] !== props.bookDetails[prop]) {
        updateOps[prop] = bookDetails[prop];
      }
    }

    if (updateOps.authors) {
      updateOps.authors = updateOps.authors
        .split(",")
        .map((author) => author.trim());
    }

    if (updateOps.categories) {
      updateOps.categories = updateOps.categories
        .split(",")
        .map((category) => category.trim());
    }

    const payload = new FormData();

    for (const field in updateOps) {
      payload.append(field, bookDetails[field]);
    }

    console.log(payload);

    axios
      .patch(`${apiLink}/books/${props.bookDetails._id}`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        console.log("uploaded successfully");
        props.changeFlag();
        props.goBack();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  React.useEffect(() => {
    setBookDetails((state) => {
      const BookDetails = { ...state };
      for (const prop in BookDetails) {
        BookDetails[prop] = props.bookDetails[prop];
      }
      return BookDetails;
    });
  }, []);

  return (
    <div className="jumbotron m-0">
      <div className="bg-info py-1 my-2 rounded">
        <p className="h1 text-light text-center">Edit Book</p>
      </div>
      <form className="mx-auto rounded border border-info p-3">
        {Object.entries(bookDetails).map((keyValPairArr, index) => {
          if (
            keyValPairArr[0] === "shortDescription" ||
            keyValPairArr[0] === "longDescription"
          ) {
            return (
              <div key={index} className="py-2">
                <textarea
                  value={keyValPairArr[1]}
                  onChange={(event) =>
                    onInputChanege(keyValPairArr[0], event.target.value)
                  }
                  placeholder={keyValPairArr[0].toUpperCase()}
                  row="1"
                  className="form-control login-form-control"
                  id={keyValPairArr[0]}
                />
              </div>
            );
          } else if (
            keyValPairArr[0] === "thumbnail" ||
            keyValPairArr[0] === "ebook"
          ) {
            return (
              <div key={index} className="py-2">
                {keyValPairArr[0] === "thumbnail"
                  ? "Thumbnail Image"
                  : "Ebook Pdf"}

                <input
                  onChange={(event) =>
                    onInputChanege(keyValPairArr[0], event.target.files[0])
                  }
                  type="file"
                  id={keyValPairArr[0]}
                  className="login-form-control form-control"
                  name={keyValPairArr[0] === "ebook" ? "ebook" : "thumbnail"}
                />
              </div>
            );
          } else {
            return (
              <div key={index} className="py-2">
                <input
                  value={keyValPairArr[1]}
                  onChange={(event) =>
                    onInputChanege(keyValPairArr[0], event.target.value)
                  }
                  type={keyValPairArr[0] === "dateOfPurchase" ? "date" : "text"}
                  placeholder={keyValPairArr[0].toUpperCase()}
                  id={keyValPairArr[0]}
                  className="login-form-control form-control"
                />
              </div>
            );
          }
        })}
        <div className="text-center py-3">
          <button
            type="submit"
            className="btn btn-md btn-outline-danger px-4 mr-2"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </button>
          <button
            className="btn btn-md btn-outline-info px-4 ml-2"
            onClick={() => {
              props.goBack();
            }}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookDetails;
