import React from "react";

const BookDetails = (props) => {
  //console.log(props);
  const { role, bookDetails } = props;
  const {
    title,
    isbn,
    authors,
    pageCount,
    price,
    bookCount,
    shortDescription,
    longDescription,
    publishedDate,
    status,
    categories,
    classNo,
    bookNo,
    accessionNo,
    ebookUrl,
    thumbnailUrl,
    edition,
    publication,
  } = bookDetails;

  return (
    <React.Fragment>
      <div className="row pt-5">
        <div className="col-md-5">
          <div className="text-center p-1">
            <img
              className="p-3"
              style={{ width: "100%", height: "auto" }}
              src={`http://localhost:5000/${thumbnailUrl}`}
              alt={title}
            />
          </div>
        </div>
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
                <p className="h4 text-info">Class Number </p>
              </div>
              <div className="col-md-8">
                <p className="h5 text-muted">{classNo}</p>
              </div>
            </div>
            <div className="d-flex py-2">
              <div className="col-md-4 text-right">
                <p className="h4 text-info">Book Number </p>
              </div>
              <div className="col-md-8">
                <p className="h5 text-muted">{bookNo}</p>
              </div>
            </div>
            <div className="d-flex py-2">
              <div className="col-md-4 text-right">
                <p className="h4 text-info">Accession Number </p>
              </div>
              <div className="col-md-8">
                <p className="h5 text-muted">{accessionNo}</p>
              </div>
            </div>
            <div className="d-flex py-2">
              <div className="col-md-4 text-right">
                <p className="h4 text-info">Edition </p>
              </div>
              <div className="col-md-8">
                <p className="h5 text-muted">
                  {!edition ? "no data" : edition}
                </p>
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
                {publishedDate && (
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
                <p className="h5 text-muted">{price ? price : "No Data"}</p>
              </div>
            </div>
            <div className="d-flex py-2">
              <div className="col-md-4 text-right">
                <p className="h4 text-info">Book Count </p>
              </div>
              <div className="col-md-8">
                <p className="h5 text-muted">
                  {bookCount ? bookCount : "No Data"}
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
                <p className="h4 text-info">e-Bbook </p>
              </div>
              <div className="col-md-8">
                {ebookUrl ? (
                  <a
                    tagt="_blanck"
                    href={`http://localhost:5000/${ebookUrl}`}
                    className="text-success"
                  >
                    Download
                  </a>
                ) : (
                  <React.Fragment>
                    {role ? (
                      <p className="h5 text-muted"> No e-Book found</p>
                    ) : (
                      <a
                        className="h5 text-danger"
                        href="#"
                        onClick={() => {
                          props.history.push("/login");
                        }}
                      >
                        Login to download
                      </a>
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 mt-4">
          <div className=" text-center bg-info">
            <p className="h4 text-light">Short Description </p>
          </div>
          <div className="jumbotron rounded-0 m-0 py-3">
            {shortDescription ? (
              <p className="h7 text-muted">{shortDescription}</p>
            ) : (
              <div className="text-center">No data</div>
            )}
          </div>
        </div>
        <div className="w-100 my-2">
          <div className="text-center bg-info">
            <p className="h4 text-light">Long Description </p>
          </div>
          <div className="jumbotron rounded-0 m-0 py-3">
            {longDescription ? (
              <p className="h7 text-muted">{longDescription}</p>
            ) : (
              <div className="text-center">No data</div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookDetails;
