import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Auth Setting
        </Link>
        <div className="">
          <Link className="btn btn-ghost normal-case text-xl" to="/home">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Log in
          </Link>
          <Link className="btn btn-ghost normal-case text-xl " to="/register">
            Register
          </Link>
          {user?.email && <span> welcome, {user.email}</span>}
          {user?.email ? (
            <button onClick={handleLogOut} className="btn btn-sm">
              Sign out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning">Log In</button>{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
