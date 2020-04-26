import React from "react";

const BookDetails = (props) => {
  console.log(props);

  const {
    title,
    isbn,
    authors,
    pageCount,
    price,
    shortDescription,
    longDescription,
    publishedDate,
    status,
    categories,
    eBookLink,
    edition,
    publication,
  } = props.details;

  return (
    <React.Fragment>
      <div className="col-md-7 border-left border-info">
        <div className="text-center bg-info py-2">
          <p className="h1 text-dark">Title</p>
          <p className="h2 text-light">{title}</p>
        </div>
        <div className="px-2 py-3">
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">Authors </p>
            </div>
            <div className="col-md-8">
              <p className="h5 text-muted">
                {!authors
                  ? "no data"
                  : authors.map((author, index) => {
                      return (
                        <span key={index}>
                          {index !== 0 && index === authors.length - 1 && (
                            <span>and </span>
                          )}
                          {author}
                          {index < authors.length - 3 && <span>, </span>}
                        </span>
                      );
                    })}
              </p>
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">ISBN </p>
            </div>
            <div className="col-md-8">
              <p className="h5 text-muted">{isbn}</p>
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">Edition </p>
            </div>
            <div className="col-md-8">
              <p className="h5 text-muted">{!edition ? "no data" : edition}</p>
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">Publication </p>
            </div>
            <div className="col-md-8">
              <p className="h5 text-muted">
                {!publication ? "no data" : publication}
              </p>
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">Status </p>
            </div>
            <div className="col-md-8">
              <p className="h5 text-muted">{!status ? "no data" : status}</p>
              {publishedDate !== undefined && (
                <p className="h5 text-muted">Date: {publishedDate.date}</p>
              )}
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">Total Pages </p>
            </div>
            <div className="col-md-8">
              <p className="h5 text-muted">
                {!pageCount ? "no data" : pageCount}
              </p>
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">Price </p>
            </div>
            <div className="col-md-8">
              <p className="h5 text-muted">
                {price !== undefined ? price : "No Data"}
              </p>
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">Categories </p>
            </div>
            <div className="col-md-8">
              <p className="h5 text-muted">
                {!categories ? "no data" : categories}
              </p>
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">Short Description </p>
            </div>
            <div className="col-md-8">
              {shortDescription !== undefined ? (
                <p className="h7 text-muted">{shortDescription}</p>
              ) : (
                <div className="text-small">No data</div>
              )}
            </div>
          </div>
          <div className="d-flex py-2">
            <div className="col-md-4 text-right">
              <p className="h4 text-info">E-Bbook </p>
            </div>
            <div className="col-md-8">
              {eBookLink !== undefined ? (
                <a
                  tagt="_blanck"
                  href={eBookLink}
                  className="btn btn-md btn-info"
                >
                  Download
                </a>
              ) : (
                <p className="h5 text-muted"> No E-Book found</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 my-2 px-3">
        <div className="text-center bg-info">
          <p className="h4 text-light">Long Description </p>
        </div>
        <div className="jumbotron mb-0 py-3">
          {longDescription !== undefined ? (
            <p className="h7 text-muted">{longDescription}</p>
          ) : (
            <div className="text-center">No data</div>
          )}
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default BookDetails;
