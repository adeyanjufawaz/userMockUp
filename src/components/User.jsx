import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function User() {
  const [allUser, setAllUsers] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://randomuser.me/api/?results=100");
      let data = response.json();
      return data;
    };
    getData()
      .then((data) => {
        data = data.results;
        setAllUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <ul className="user--ul">
        <li>
        <Link to="/" className="links">Home</Link>
        </li>
        <li>
          <Link to="/users" className="links">Random User</Link>
        </li>
        <li>
          <Link to="/users/male" className="links">Male User</Link>
        </li>
        <li>
          <Link to="/users/female" className="links">Female Users</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default User;