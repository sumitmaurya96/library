import React from "react";
import axios from "axios";

//Sections
import NewFeedback from "./Sections/NewFeedback";
import ShowFeedbacks from "./Sections/ShowFeedbacks";
//Icons
import { MdArrowBack, MdPlusOne, MdFeedback } from "react-icons/md";

//Image
import Loading from "assets/img/loading/loading.gif";

const AskALibrarian = (props) => {
  const { apiLink } = props;
  const [feedback, setFeedback] = React.useState({
    total: -1,
    pageNumber: 1,
    feedbacks: [],
  });
  const [loading, setLoading] = React.useState(false);
  const [showNewFeedbackPage, setShowNewFeedbackPage] = React.useState(false);

  const onFormSubmit = (input) => {
    setLoading(true);
    console.log(input);

    axios
      .post(`${apiLink}/feedbacks`, input)
      .then((result) => {
        setLoading(false);
        setShowNewFeedbackPage(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${apiLink}/feedbacks/library-feedbacks/pageNumber=${feedback.pageNumber}`
      )
      .then((result) => {
        console.log(result);
        setFeedback((state) => {
          const Feedback = { ...state };
          Feedback.total = result.data.total;
          Feedback.feedbacks = result.data.feedbacks;
          setLoading(false);
          return Feedback;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [feedback.pageNumber, showNewFeedbackPage]);

  return (
    <React.Fragment>
      {loading ? (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="align-self-center w-100 text-center">
            <img width="64px" height="64px" src={Loading} />
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div
            className="p-1 mb-0"
            style={{ paddingTop: "6rem", position: "relative" }}
          >
            <button
              className="btn btn-lg btn-outline-secondary"
              style={{ position: "absolute", right: "3%", top: "12%" }}
              onClick={() => setShowNewFeedbackPage((state) => !state)}
            >
              {showNewFeedbackPage ? <MdFeedback /> : <MdPlusOne />}
            </button>

            {showNewFeedbackPage ? (
              <NewFeedback onFormSubmit={onFormSubmit} />
            ) : (
              <ShowFeedbacks feedback={feedback} />
            )}
          </div>
          <div className="text-center py-3 bg-light mt-0">
            <button
              className="btn btn-sm btn-outline-info"
              onClick={props.goBack}
            >
              Go Back
            </button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AskALibrarian;
