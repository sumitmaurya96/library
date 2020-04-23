import React from "react";

import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

const AboutPage = (props) => {
  return (
    <div>
      <Navbar {...props} />

      <div
        style={{
          color: "white",
          backgroundColor: "#344064",
          paddingBottom: "2%",
          paddingTop: "150px",
        }}
      >
        <section style={{ marginLeft: "8%", marginRight: "8%" }}>
          <h1 className="text-center">ABOUT</h1>
          <p style={{ fontSize: "20px" }}>
            Jadavpur University Library was started along with the establishment
            of the University in 1955 in order to cater the academic and
            research needs of the faculty, research scholars, students, officers
            and non-teaching staff. Since then, the University Library has gone
            from strength to strength to live up to the expectations of its
            immediate clientele.It is one of the best-equipped libraries in the
            country.
          </p>
          <p style={{ fontSize: "20px" }}>
            The University is proud of its library system, which comprises the
            Central Library, Salt Lake Campus Library, 36 Departmental Libraries
            under the Faculty of Arts, Science, Engineering and Technology, and
            also the Libraries attached with the Schools and Centres for
            studies. The Central Library of Jadavpur University is one of the
            central facilities used by all types of members of this University.
            This is the third largest library in West Bengal.
          </p>
          <p style={{ fontSize: "20px" }}>
            This webapp is just a degitilized version of JU library...
          </p>
        </section>
      </div>

      <div
        style={{
          color: "white",
          backgroundColor: "#4D62A4",
          paddingBottom: "2%",
          paddingTop: "2%",
        }}
      >
        <section style={{ marginLeft: "8%", marginRight: "8%" }}>
          <h1 className="text-center">LIBRARY FACILITIES</h1>
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
          backgroundColor: "#6374A8",
          paddingBottom: "2%",
          paddingTop: "2%",
        }}
      >
        <section style={{ marginLeft: "8%", marginRight: "8%" }}>
          <h1 className="text-center">COLLECTION</h1>
          <p style={{ fontSize: "20px" }}>
            At present, the Central Library has over 6,46,296 volumes of books
            on record (including the Salt lake Campus Library and those loaned
            to Departmental Libraries), 80,700 bound volumes of journals, 13000
            theses and dissertations, and 37,000 items of non-book materials
            such as reports pamphlets, maps and micro-forms. At present, the
            library subscribes to about 633 print and 2794 online journals. The
            University also has access to around 9082 online journals more
            through INFLIBNET and INDEST Consortia. In total, the University
            Library has access to around 12530 Journals.The library subscribes
            to 30 databases which include Scopus, Econlit etc. and also about
            10,057 E-books. A considerable part of the Library acquisitions
            consists of gifts from individuals and institutions, the largest
            book donation having been from Sri Uday Kumar Das, Kumar S.C. Nandy
            of Cossimbazar, the British Council, USIS, Asia Foundation, the late
            A.K. Chanda, Sri M. N. Mitra, Sudhindranath Datta and others. The
            gift collections contain a good stock of old materials valuable for
            research in the humanities and social sciences.
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
          <h1 className="text-center">
            CENTRE FOR DIGITAL LIBRARY & DOCUMENTATION
          </h1>
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
            <a
              className="btn btn-lg btn-danger"
              target="_blank"
              href="http://www.jaduniv.edu.in/templates/newpages/library.html"
            >
              Know more
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
