import React from "react";

const Book = (props) => {
  const { bookDetails = {}, like = false, apiLink } = props;

  const { title, authors, thumbnailUrl, edition } = bookDetails;

  return (
    <div
      className="m-2 p-1 w-100 rounded text-center"
      style={{
        border: "0px",
        background: "rgb(0,220,90,0.4)",
      }}
    >
      <img
        className="rounded"
        src={`${apiLink}/${thumbnailUrl}`}
        alt={title}
        width="140px"
        height="auto"
      />
      <div className="p-3">
        <p className="text-dark">{!title ? "no title" : title}</p>
        <p className="text-muted">
          {!authors ? (
            <span className="p-1" style={{ fontSize: "12px" }}>
              no authors data
            </span>
          ) : (
            authors.map((author, index) => {
              return (
                <span key={index} className="p-1" style={{ fontSize: "12px" }}>
                  {index !== 0 && index === authors.length - 1 && (
                    <span>and </span>
                  )}
                  {author}
                  {index < authors.length - 3 && <span>, </span>}
                </span>
              );
            })
          )}
        </p>
        {edition && <p className="text-muted h8">{edition} edition</p>}
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={(event) => {
            if (props && props.onClick) props.onClick(event);
          }}
          style={{ borderRadius: "20px" }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Book;
