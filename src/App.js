import React from "react";
import { MovieList } from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./components/AddMovie";
// https://www.youtube.com/watch?v=35lXWvCuM8o&t=34s
function App() {
  return (
    <MovieProvider>
      <div>
        <center>
          <Nav></Nav>
          <AddMovie></AddMovie>
          <MovieList></MovieList>
        </center>
      </div>
    </MovieProvider>
  );
}

export default App;
