import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./HomePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="Title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            porro dolores enim voluptate, quas harum corrupti dolorem magni
            rerum obcaecati quis perspiciatis quibusdam. Similique, nihil
            quaerat distinctio eum ipsam alias.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer z-{-1}">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
