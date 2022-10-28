import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";

function FemaleUsers() {
  const [allUser, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://randomuser.me/api/?results=50");
      let data = response.json();
      return data;
    };
    getData()
      .then((data) => {
        data = data.results;
        setAllUsers(data.slice(0, 10));
        setLoading(!loading);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
        <h1 className="user--header">Female Users</h1>
    <div className="user__card--box">
      {!loading ? (
        allUser.map((user) => {
          if ((user.name.title = "Mrs")) {
            return (
              <div key={user.email} className="user--card">
                <div className="img--box">
                  <img
                    src={user.picture.medium}
                    alt="user--image"
                    className="card--img"
                  />
                </div>
                <h1 className="user--name">
                  Name: {user.name.title} {user.name.first} {user.name.last}
                </h1>
                <p className="user--age">Age: {user.dob.age} </p>
                <p className="user--num">Phone Number: {user.cell}</p>
              </div>
            );
          }
        })
      ) : (
        <Loading />
      )}
    </div>
    </div>
    
  );
}

export default FemaleUsers;