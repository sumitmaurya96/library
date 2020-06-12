import React from "react";

//Icons
import { MdSearch } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";

//Logo
import Logo from "assets/img/app/ju.png";

//Css
import "./Style/navbarStyle.css";

const Navbar = (props) => {
  const { apiLink } = props;
  const { loggedIn, userData } = props.user;
  const { role, profilePicUrl } = userData;

  const navbar = {
    color: {
      transparent: "rgb(60, 61, 65,0.5)",
      dark: "rgb(60, 61, 65)",
    },
  };

  const [classes, setClasses] = React.useState({
    collapse: "collapse",
    showInput: false,
    dropdownDisplay: "none",
    navbarBackground: navbar.color.transparent,
    NavLinks: {
      home: null,
      resources: null,
      services: null,
      notice: null,
      team: null,
      about: null,
      search: null,
      profile: null,
      settings: null,
    },
  });

  const getActiveLink = () => {
    let pathname = props.location.pathname.trim().split(/[\s#?\/]+/)[1];
    //console.log(pathname);

    const Classes = { ...classes };

    for (const nav in Classes.NavLinks) {
      Classes.NavLinks[nav] = null;
    }

    Classes.NavLinks[pathname] = "active";
    //console.log(Classes.NavLinks);

    for (const nav in Classes.NavLinks) {
      if (props.location.pathname === nav) {
        Classes.NavLinks[nav] = "active";
      }
    }

    setClasses(Classes);
  };

  const toggleNavbar = () => {
    const Classes = { ...classes };
    Classes.collapse = Classes.collapse === "collapse" ? "" : "collapse";
    setClasses(Classes);
  };

  const scrollHandler = (event) => {
    if (Math.floor(window.pageYOffset) > 200) {
      setClasses((prevState) => {
        const Classes = { ...prevState };
        Classes.navbarBackground = navbar.color.dark;
        if (
          navbar.color.transparent.localeCompare(prevState.navbarBackground) ===
          0
        ) {
          return Classes;
        }
        return prevState;
      });
    }

    if (Math.floor(window.pageYOffset) <= 200) {
      setClasses((prevState) => {
        const Classes = { ...prevState };
        Classes.navbarBackground = navbar.color.transparent;
        if (navbar.color.dark.localeCompare(prevState.navbarBackground) === 0) {
          return Classes;
        } else {
          return prevState;
        }
      });
    }
  };

  const handleDropDownClick = (button) => {
    if (button === "logout") {
      localStorage.removeItem("_id");
      localStorage.removeItem("token");
      props.logOut();
    }
  };

  const dropdownToggle = () => {
    const Classes = { ...classes };
    Classes.dropdownDisplay =
      Classes.dropdownDisplay === "block" ? "none" : "block";
    setClasses(Classes);
  };

  React.useEffect(() => {
    //console.log(props.location);
    getActiveLink();
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top h6"
      style={{ background: `${classes.navbarBackground}` }}
    >
      <a
        className="navbar-brand"
        href="#"
        onClick={() => {
          props.history.push("/home");
        }}
      >
        <img
          src={Logo}
          alt="JU Library"
          width="40px"
          height="40px"
          style={{ display: "inline" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${classes.collapse} navbar-collapse `}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${classes.NavLinks.home}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/home");
              }}
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className={`nav-item ${classes.NavLinks.resources}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/resources");
              }}
            >
              Resources
            </a>
          </li>
          <li className={`nav-item ${classes.NavLinks.services}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/services");
              }}
            >
              Services
            </a>
          </li>
          <li className={`nav-item ${classes.NavLinks.notice}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/notice");
              }}
            >
              Notice
            </a>
          </li>
          <li className={`nav-item ${classes.NavLinks.team}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/team");
              }}
            >
              Team
            </a>
          </li>
          <li className={`nav-item ${classes.NavLinks.about}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/about");
              }}
            >
              About
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${classes.NavLinks.search}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                props.history.push("/search");
              }}
            >
              <MdSearch size="40px" />
            </a>
          </li>
          <li className={`nav-item ${classes.NavLinks.profile}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                if (loggedIn) props.history.push("/profile");
                else props.history.push("/login");
              }}
            >
              {loggedIn ? (
                <img
                  className="rounded-circle border border-light"
                  src={`${apiLink}${profilePicUrl}`}
                  alt="name"
                  width="40px"
                  height="40px"
                />
              ) : (
                <MdPersonAdd size="40px" />
              )}
            </a>
          </li>
          {loggedIn && (
            <li className={`nav-item dropdown ${classes.NavLinks.home} `}>
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={dropdownToggle}
              >
                <MdArrowDropDown size="40px" />
              </a>
              <div
                className={`dropdown-menu dropdown-menu-right d-${classes.dropdownDisplay}`}
                aria-labelledby="navbarDropdown"
              >
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropDownClick("logout")}
                >
                  LogOut
                </a>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
