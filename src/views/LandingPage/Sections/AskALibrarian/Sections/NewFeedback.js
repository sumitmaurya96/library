import React from "react";
import { MdArrowBack } from "react-icons/md";

//CSS
//import "./askQuestionStyle.css";

const NewFeedback = (props) => {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    feedback: "",
  });

  const onInputChange = (field, value) => {
    setInput((state) => {
      const Input = { ...state };
      Input[field] = value;
      return Input;
    });
  };

  return (
    <div className="row m-0 pb-5" style={{ paddingTop: "6rem" }}>
      <div className="col-md-10 offset-md-1 bg-light shadow-lg">
        <div className="jumbotron bg-light">
          <div className="text-center">
            <p className="h1 text-muted strong">Ask A Librarian</p>
          </div>
          <div className="pt-3">
            <form className="mx-auto">
              <div className="py-2">
                <input
                  type="text"
                  value={input.name}
                  onChange={(event) =>
                    onInputChange("name", event.target.value)
                  }
                  placeholder="Your Full Name"
                  className="form-control login-form-control"
                  id="name"
                />
              </div>
              <div className="py-2">
                <input
                  type="email"
                  value={input.email}
                  onChange={(event) =>
                    onInputChange("email", event.target.value)
                  }
                  className="form-control login-form-control"
                  id="useremail"
                  placeholder="Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="bg-dar py-2">
                <textarea
                  value={input.feedback}
                  onChange={(event) =>
                    onInputChange("feedback", event.target.value)
                  }
                  className="border-info"
                  row="1"
                  placeholder="Your Question"
                  id="question"
                  className="login-form-control form-control"
                />
              </div>
              <div className="text-center py-3">
                <button
                  type="submit"
                  className="btn btn-md btn-outline-info px-4"
                  onClick={(event) => {
                    event.preventDefault();
                    props.onFormSubmit(input);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
