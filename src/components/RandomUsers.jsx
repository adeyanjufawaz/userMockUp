import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import ReactPaginate from "react-paginate";

function RandomUsers() {
  const [total, setTotal] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNum * usersPerPage;

  const displayUsers = allUsers
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
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
    });

  // To get users from the API
  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://randomuser.me/api/?results=50");
      let data = response.json();
      return data;
    };
    getData()
      .then((data) => {
        data = data.results;
        setAllUsers(data.slice(0, 50));
        setTotal(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Paginate Library variables
  const pageCount = Math.ceil(total.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <div>
        <h1 className="user--header">Random Users</h1>
        <>
      {loading ? (
        <Loading />
      ) : (
        <div className="user__card--box">
          {displayUsers}
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"prevBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"activeBtn"}
            disabledClassName={"disableBtn"}
          />
        </div>
      )}
    </>
    </div>
    
  );
}

export default RandomUsers;