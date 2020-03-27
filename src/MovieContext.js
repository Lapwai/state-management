import React, { useState, createContext } from "react";

export const MovieContext = createContext();

//Provide the information to different components
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124
    },
    {
      name: "Game of Thrones",
      price: "$14",
      id: 25661
    },
    {
      name: "Inception",
      price: "$12",
      id: 23524
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}

      {/* <Nav></Nav>
      <MovieList></MovieList> */}
    </MovieContext.Provider>
  );
};
