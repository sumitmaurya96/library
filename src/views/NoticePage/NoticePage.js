import React from "react";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

const NoticePage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <div style={{ paddingTop: "40px" }}>
        <div className="jumbotron" style={{ marginBottom: "0px" }}>
          <p className="h1 text-dander py-3 text-center">
            Library Notice Board
          </p>
          <div className="list-group">
            <div
              href="#"
              className="list-group-item  flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small>
            </div>
            <div
              href="#"
              className="list-group-item flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </div>
            <div
              href="#"
              className="list-group-item flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </div>
            <div
              href="#"
              className="list-group-item flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </div>
            <div
              href="#"
              className="list-group-item flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoticePage;
