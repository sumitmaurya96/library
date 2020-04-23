import React from "react";

import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

export default function FeedbackPage() {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.section}>
        <p>FeedbackPage</p>
      </div>
      <Footer />
    </React.Fragment>
  );
}
