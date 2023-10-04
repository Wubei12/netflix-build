import React from "react";

import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";
import { Outlet } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}

      <Nav />

      {/* Banner */}

      <Banner />

      {/* Row */}

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Outlet />
    </div>
  );
}

export default HomeScreen;
