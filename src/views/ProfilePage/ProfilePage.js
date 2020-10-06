import React from "react";
import axios from "axios";

//views
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//Sections
import UserProfile from "./Sections/UserProfile";

//Navigation
import AdminNavigation from "./Navigations/AdminNavigation";
import UserNavigation from "./Navigations/UserNavigation";

//Role
import { admin, librarian, faculty, student } from "Helpers/Roles";

//Pages
import ManageUser from "./Pages/ManageUser";
import Favourites from "./Pages/Favourites";
import UsersDetails from "./Pages/UsersDetails";
import UserOrders from "./Pages/UserOrders";
import Orders from "./Pages/Orders";
import ApproveOrder from "./Pages/ApproveOrder";

const ProfilePage = (props) => {
  const { apiLink } = props;
  const { role, username } = props.user.userData;

  const { favourites, ...rest } = props.user.userData;

  const navigationParams = {
    admins: "admins",
    librarians: "librarians",
    faculties: "faculties",
    students: "students",
    orders: "orders",
    userOrder: "userOrder",
    favourites: "favourites",
    transactions: "transactions",
    addNew: "addNew",
    approveOrder: "approve",
  };

  const [views, setViews] = React.useState(null);

  //Single
  const [userOrder, setUserOrder] = React.useState({
    id: "",
    username: "",
    dueAmount: 0,
    cardUsed: 0,
    borrowLimit: 0,
    data: [],
  });

  //Multiple
  const [users, setUsers] = React.useState({
    student: [],
    faculty: [],
    librarian: [],
  });

  const [orders, setOrders] = React.useState({
    total: 0,
    data: [],
  });

  const [transactions, setTransactions] = React.useState({
    total: 0,
    data: [],
  });

  const [favouriteData, setFavouriteData] = React.useState({
    fromPage: "",
    data: [...favourites],
  });

  const handleNavigationClick = (action) => {
    setViews(action);
  };

  const handleFavouriteClick = (action, data, fromPage) => {
    console.log(data);
    setFavouriteData((state) => {
      const FavouriteData = { ...state };
      FavouriteData.fromPage = fromPage;
      FavouriteData.data = data;
      return FavouriteData;
    });
    setViews("favourites");
  };

  const getPage = () => {
    if (views === navigationParams.addNew) {
      return (
        <ManageUser
          apiLink={apiLink}
          ownData={rest}
          handleNavigationClick={handleNavigationClick}
        />
      );
    } else if (views === navigationParams.favourites) {
      return (
        <Favourites
          apiLink={apiLink}
          {...props}
          data={favouriteData.data}
          handleNavigationClick={() =>
            handleNavigationClick(favouriteData.fromPage)
          }
        />
      );
    } else if (views === navigationParams.librarians) {
      return (
        <UsersDetails
          apiLink={apiLink}
          userRole={librarian}
          data={users.librarian}
          fromPage={navigationParams.librarians}
          handleNavigationClick={handleNavigationClick}
          handleFavouriteClick={handleFavouriteClick}
        />
      );
    } else if (views === navigationParams.students) {
      return (
        <UsersDetails
          apiLink={apiLink}
          userRole={student}
          data={users.student}
          fromPage={navigationParams.students}
          handleNavigationClick={handleNavigationClick}
          handleFavouriteClick={handleFavouriteClick}
        />
      );
    } else if (views === navigationParams.faculties) {
      return (
        <UsersDetails
          apiLink={apiLink}
          userRole={faculty}
          data={users.faculty}
          fromPage={navigationParams.faculties}
          handleNavigationClick={handleNavigationClick}
          handleFavouriteClick={handleFavouriteClick}
        />
      );
    } else if (views === navigationParams.userOrder) {
      return (
        <UserOrders
          role={role}
          {...userOrder}
          fromPage={navigationParams.faculties}
          handleNavigationClick={handleNavigationClick}
          handleFavouriteClick={handleFavouriteClick}
        />
      );
    } else if (views === navigationParams.orders) {
      return (
        <Orders
          role={role}
          orders={orders}
          handleNavigationClick={handleNavigationClick}
        />
      );
    } else if (views === navigationParams.approveOrder) {
      return (
        <ApproveOrder
          role={role}
          apiLink={apiLink}
          handleNavigationClick={handleNavigationClick}
        />
      );
    } else {
      setViews(null);
    }
  };

  /**
   * Data fetching
   */
  const fetchUsers = () => {
    axios
      .get(`${apiLink}/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((results) => {
        console.log(results.data.users);
        setUsers((state) => {
          const Users = {
            student: [],
            faculty: [],
            librarian: [],
          };

          results.data.users.forEach((value) => {
            Users[value.role].push(value);
          });

          console.log(Users);

          return Users;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOrders = () => {
    axios
      .get(`${apiLink}/orders/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((results) => {
        console.log(results.data);
        setOrders((state) => {
          const Orders = { total: 0, data: [] };
          Orders.data = results.data.orders;
          let totalOrders = 0;
          results.data.orders.forEach((value) => {
            totalOrders += value.orders.length;
          });
          Orders.total = totalOrders;
          return Orders;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTransactions = () => {
    axios
      .get(`${apiLink}/transactions/query/fromDate=24-08-2018`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((results) => {
        console.log(results.data);
        setTransactions((state) => {
          const Transactions = { ...state };
          Transactions.total = results.data.total;
          Transactions.data = results.data.transactions;
          return Transactions;
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  React.useEffect(() => {
    if (role === admin) {
      fetchUsers();
      fetchOrders();
      //fetchTransactions();
    } else if (role === librarian) {
      //fetchTransactions();
    }
  }, []);

  React.useEffect(() => {
    if (role === student || role === faculty) {
      axios
        .get(`${apiLink}/orders/${rest.username}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((result) => {
          console.log(result.data);
          setUserOrder((state) => {
            const UserOrder = { ...state };
            UserOrder.id = result.data.order._id;
            UserOrder.username = result.data.order.username;
            UserOrder.borrowLimit = result.data.order.borrowLimit;
            UserOrder.dueAmount = result.data.order.dueAmount;
            let count = 0;
            for (const od of result.data.order.orders) {
              if (od.granted) {
                count++;
              }
            }
            UserOrder.cardUsed = count;
            UserOrder.data = result.data.order.orders;
            return UserOrder;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar
        user={props.user}
        apiLink={apiLink}
        logOut={props.logOut}
        {...props}
      />
      <div
        style={{
          paddingTop: "80px",
          boxSizing: "border-box",
        }}
      >
        {views ? (
          getPage()
        ) : (
          <React.Fragment>
            <UserProfile userData={rest} apiLink={apiLink} />
            {role === admin ? (
              <AdminNavigation
                adminNavigationParams={navigationParams}
                adminNavigationData={{
                  totalFaculties: users.faculty.length,
                  totalLibrarians: users.librarian.length,
                  totalStudents: users.student.length,
                  totalOrders: orders.total,
                  totalTransactions: transactions.total,
                }}
                handleNavigationClick={handleNavigationClick}
              />
            ) : (
              <UserNavigation
                role={role}
                userNavigationParams={navigationParams}
                userNavigationData={{
                  totalFavourites: favourites.length,
                  totalBorrowedBooks: userOrder.cardUsed,
                  totalDueAmount: userOrder.dueAmount,
                  totalTransactions: 0,
                  borrowLimit: userOrder.borrowLimit,
                  orders: { orders },
                }}
                handleNavigationClick={handleNavigationClick}
              />
            )}
          </React.Fragment>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProfilePage;
