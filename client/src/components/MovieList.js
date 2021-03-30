import React, { useState, useEffect } from "react";
import { Container, Row, Table, Navbar } from "react-bootstrap";
import movieService from "../services/movieService";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getAll().then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  const movieData = movies.map(function (item, index) {
    return (
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td>{item.releaseYear}</td>
        <td>
          <img
            src={item.file}
            alt={item.name}
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Add</Navbar.Brand>
      </Navbar>

      <Row className="justify-content-md-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SL</th>
              <th>Id</th>
              <th>Name</th>
              <th>Release Year</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>{movieData}</tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default MovieList;
