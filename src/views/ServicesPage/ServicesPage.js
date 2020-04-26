import React from "react";

import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

const ServicesPage = (props) => {
  return (
    <React.Fragment>
      <Navbar {...props} />

      <div
        style={{
          color: "white",
          backgroundColor: "#4D62A4",
          paddingBottom: "2%",
          paddingTop: "150px",
        }}
      >
        <section style={{ marginLeft: "8%", marginRight: "8%" }}>
          <h1>LIBRARY FACILITIES</h1>
          <p style={{ fontSize: "20px" }}>
            The University library system comprises the Central Library, Salt
            lake Campus Library, 36 Departmental Libraries, and also the
            Libraries attached with Schools and Centres for studies. The
            University Central Library is housed in a three-storied building on
            the campus. Its shelf space and working space total 36,000 sq.
            ft.,(approx) and is being extended by new construction of Annex
            Building 5,500 sq. ft. (approx.). Seven reading rooms, carrels, and
            an alcove for bound volumes of journals provide sitting
            accommodation for 700 readers. There is a separate library on the
            Second Campus at Salt Lake. The space of the Salt Lake campus
            Library is 6,800sq. ft. (approx.).
          </p>
        </section>
      </div>

      <div
        style={{
          color: "white",
          backgroundColor: "#7384B7",
          paddingBottom: "2%",
          paddingTop: "2%",
        }}
      >
        <section style={{ marginLeft: "8%", marginRight: "8%" }}>
          <h1>CENTRE FOR DIGITAL LIBRARY & DOCUMENTATION</h1>
          <p style={{ fontSize: "20px" }}>
            Under the potential for excellence programme of UGC, Centre for
            Digital Library has been established in November 2003 in the first
            floor of the new annex building of the Central Library. The digital
            Library has a learning Resource Centre (LRC) and a reading room. The
            Digital Library Management Software Dspace, developed by MIT, USA
            and Hewlett Packard has been installed. It is an open source
            software and has been customized to suit our requirements. Dspace
            accepts all forms of digital materials including text, images, video
            and audio files. The Institutional Repository is being built in the
            Digital Library Faculty wise & Department wise. The Learning
            Resource Centre has been set-up with sixty nodes for Teachers,
            Students, Research Scholars and Academic Administrators for
            retrieving On-line journals/books and for internet browsing. The
            Hardware infrastructure for archival of rare texts, Ph.D. theses
            abstracts has been installed. Besides this, the users may search all
            On-line journals and databases from all the computers connected to
            the Jadavpur University Network.
          </p>

          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-sm"
              target="_blank"
              href="http://www.jaduniv.edu.in/templates/newpages/library.html"
            >
              Know more
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default ServicesPage;
