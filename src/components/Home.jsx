import React from "react";
import { Link } from "react-router-dom";
import Card4 from "./Card4";
import { ErrorBoundary } from "./ErrorBoundary";
import HomeNavbar from "./HomeNavbar";

function Home() {
  return (
    <div>
      <HomeNavbar />
      <div className="content--box">
        <h1 className="main--header"> User Mock Up </h1>
        <p className="sub--header">
          This is a mock up websites, that give deatils about users. It make use
          of the <b>Random User Generator API</b> to get some random user
          details and display the outcome in form of a card, containing detailed
          informations about a particular user/users.
        </p>
        <div className="main__card--box">
          <Link to="/users" className="links">
            <div className="card">
              <h1>Random Users</h1>
              <i class="fa-solid fa-users fa-4x"></i>
              <p>This displays random users</p>
            </div>
          </Link>

          <Link to="/users/male" className="links">
            <div className="card">
              <h1>Male Users</h1>
              <i class="fa-solid fa-user fa-4x"></i>
              <p>This displays Male users</p>
            </div>
          </Link>

          <Link to="/users/female" className="links">
            <div className="card">
              <h1>Female Users</h1>
              <i class="fa-solid fa-person-dress fa-4x"></i>
              <p>This displays Female users</p>
            </div>
          </Link>
        </div>
        <ErrorBoundary>
          <Card4 />
        </ErrorBoundary>
        <p className="sub--header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non, eum
          cumque neque soluta quia. Deserunt fugiat, ullam quibusdam officia
          aliquid esse, neque ea quaerat nesciunt corrupti sapiente repudiandae
          molestiae voluptas illum. Excepturi praesentium temporibus a velit
          iste culpa minima id vero laudantium nisi? Rerum.
        </p>
      </div>
    </div>
  );
}

export default Home;
