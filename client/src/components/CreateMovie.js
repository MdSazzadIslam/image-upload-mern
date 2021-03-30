import React, { useState } from "react";
import {
  Navbar,
  Form,
  Button,
  Container,
  Row,
  Image,
  Col,
} from "react-bootstrap";
import movieService from "../services/movieService";
import FileBase from "react-file-base64";

const CreateMovie = () => {
  const [movieData, setMovieData] = useState({
    name: "",
    releaseYear: "",
    file: "",
  });

  const [error, setError] = useState("");

  const clearData = () => {
    setMovieData({
      name: "",
      releaseYear: "",
      file: "",
    });
  };

  const submitHandler = async (e) => {
    try {
      debugger;
      e.preventDefault();
      console.log(movieData);
      if (movieData.file) {
        try {
          await movieService.saveMovie(movieData);
          clearData();
        } catch (error) {
          alert('Something went wrong')
          console.error(error);
        }
      } else {
        setError("Please select a file");
        alert(error);
      }
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/movie/list">List</Navbar.Brand>
      </Navbar>
      <Row className="justify-content-md-center">
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie name"
              required
              value={movieData.name}
              onChange={(e) =>
                setMovieData({ ...movieData, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="ReleaseYear">
            <Form.Label>Release Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Release year"
              required
              value={movieData.releaseYear}
              onChange={(e) =>
                setMovieData({ ...movieData, releaseYear: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setMovieData({ ...movieData, file: base64 })
              }
            />
          </Form.Group>

          <Col>
            <Image
              src={movieData.file}
              rounded
              style={{ width: "100px", height: "100px" }}
            />
          </Col>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default CreateMovie;
