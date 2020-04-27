import React from "react";

const EditBookDetails = (props) => {
  const { dataToBeEdited } = props;

  //Refs
  const titleRef = React.createRef();
  const editionRef = React.createRef();
  const publicationRef = React.createRef();
  const statusRef = React.createRef();
  const isbnRef = React.createRef();
  const thumbnailRef = React.createRef();
  const authorsRef = React.createRef();
  const categoriesRef = React.createRef();
  const pageCountRef = React.createRef();
  const priceRef = React.createRef();
  const shortDescriptionRef = React.createRef();
  const longDescriptionRef = React.createRef();
  const ebookLinkRef = React.createRef();

  const handleSubmit = () => {
    const otherData = {
      authors: [],
      categories: [],
    };

    const bookDetails = {
      thumbnailUrl: null,
      ebookLink: null,
      price: null,
      publication: null,
      edition: null,
      title: null,
      authors: null,
      categories: null,
      isbn: null,
      pageCount: null,
      status: null,
      shortDescription: null,
      longDescription: null,
      date: `${new Date().toISOString()}`,
    };

    if (
      titleRef.current.value &&
      isbnRef.current.value &&
      authorsRef.current.value &&
      categoriesRef.current.value
    ) {
      otherData.authors = authorsRef.current.value.split(",");
      otherData.categories = categoriesRef.current.value.split(",");
      const auth = [];
      const cat = [];
      for (let i = 0; i < otherData.authors.length; i++) {
        const toPush = otherData.authors[i].trim();
        if (toPush) {
          auth.push(toPush);
        }
      }
      for (let i = 0; i < otherData.categories.length; i++) {
        const toPush = otherData.categories[i].trim();
        if (toPush) {
          cat.push(toPush);
        }
      }

      bookDetails.title = titleRef.current.value;
      bookDetails.isbn = isbnRef.current.value;
      bookDetails.shortDescription = shortDescriptionRef.current.value;
      bookDetails.pageCount = pageCountRef.current.value;
      bookDetails.edition = editionRef.current.value;
      bookDetails.ebookLink = isbnRef.current.value;
      bookDetails.price = priceRef.current.value;
      bookDetails.status = statusRef.current.value;
      bookDetails.shortDescription = shortDescriptionRef.current.value;
      bookDetails.longDescription = longDescriptionRef.current.value;
      bookDetails.thumbnailUrl = thumbnailRef.current.value;
      bookDetails.categories = cat;
      bookDetails.authors = auth;

      const feedback = props.saveEditedDetails(bookDetails);

      if (!feedback) {
        console.log("faild");
      }
    }
  };

  return (
    <div className="jumbotron m-0">
      <div className="bg-info py-1 my-2 rounded">
        <p className="h1 text-light text-center">Edit Book Details</p>
      </div>
      <form className="mx-auto rounded border border-info p-3">
        <div className="py-2">
          <input
            ref={titleRef}
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.title}
            type="text"
            placeholder="Title"
            id="title"
            className="login-form-control form-control"
          />
        </div>
        <div className="py-2">
          <input
            ref={isbnRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.isbn}
            placeholder="ISBN"
            className="form-control login-form-control"
            id="isbn"
          />
        </div>
        <div className="py-2">
          <input
            ref={authorsRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.authors}
            placeholder="Authors(comma seperated)"
            className="form-control login-form-control"
            id="authors"
          />
        </div>
        <div className="py-2">
          <input
            ref={editionRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.edition}
            placeholder="Edition"
            className="form-control login-form-control"
            id="edition"
          />
        </div>
        <div className="py-2">
          <input
            ref={publicationRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.publication}
            placeholder="Publication"
            className="form-control login-form-control"
            id="publication"
          />
        </div>
        <div className="py-2">
          <input
            ref={statusRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.status}
            placeholder="Status"
            className="form-control login-form-control"
            id="status"
          />
        </div>
        <div className="py-2">
          <input
            ref={pageCountRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.pageCount}
            placeholder="Total Pages"
            className="form-control login-form-control"
            id="pages"
          />
        </div>
        <div className="py-2">
          <input
            ref={priceRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.price}
            placeholder="Price"
            className="form-control login-form-control"
            id="price"
          />
        </div>
        <div className="py-2">
          <input
            ref={categoriesRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.categories}
            placeholder="Categories(comma seperated)"
            className="form-control login-form-control"
            id="Categories"
          />
        </div>
        <div className="py-2">
          <input
            ref={ebookLinkRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.ebookLink}
            placeholder="E-Book Link"
            className="form-control login-form-control"
            id="ebook"
          />
        </div>
        <div className="py-2">
          <input
            ref={thumbnailRef}
            type="text"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.thumbnailUrl}
            placeholder="Book Cover Thumbnail URL"
            className="form-control login-form-control"
            id="bookCover"
          />
        </div>
        <div className="py-2">
          <textarea
            ref={shortDescriptionRef}
            placeholder="Short Description"
            defaultValue={
              !dataToBeEdited ? "" : dataToBeEdited.shortDescription
            }
            row="1"
            className="form-control login-form-control"
            id="shortDescription"
          />
        </div>
        <div className="py-2">
          <textarea
            ref={longDescriptionRef}
            placeholder="Long Description"
            defaultValue={!dataToBeEdited ? "" : dataToBeEdited.longDescription}
            row="1"
            className="form-control login-form-control"
            id="longDescription"
          />
        </div>

        <div className="text-center py-3">
          <button
            type="submit"
            className="btn btn-md btn-outline-warning px-4 mr-2"
            onClick={(e) => {
              e.preventDefault();
              if (dataToBeEdited) handleSubmit();
            }}
          >
            Edit
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
