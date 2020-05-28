import React from "react";

const ShowFeedbacks = (props) => {
  const { feedbacks } = props.feedback;

  return (
    <div className="jumbotron bg-light mb-0" style={{ minHeight: "90vh" }}>
      <div className="text-center p">
        <p className="h1 text-muted strong">User Feedbacks</p>
      </div>
      {feedbacks.length ? (
        <table className="table table-bordered table-striped mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{ width: "2%" }}>
                Sl. No.
              </th>
              <th scope="col" style={{ width: "15%" }}>
                Name
              </th>
              <th
                scope="col"
                style={{
                  width: "20%",
                }}
              >
                Email
              </th>
              <th
                scope="col"
                style={{
                  width: "63%",
                }}
              >
                Feedback
              </th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => {
              console.log(feedback);

              return (
                <tr key={index}>
                  <td scope="row">{index + 1}</td>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>
                    <ul className="">
                      {feedback.feedback.map((value, index) => {
                        return <li key={index}>{value}</li>;
                      })}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ minHeight: "60vh" }}
        >
          <p className="align-self-center">No feedbacks</p>
        </div>
      )}
    </div>
  );
};

export default ShowFeedbacks;
