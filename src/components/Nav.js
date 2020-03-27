import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";
const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Andy Lau</h3>
      <p>List of Movie: {movies.length}</p>
    </div>
  );
};
export default Nav;
