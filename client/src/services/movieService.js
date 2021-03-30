import http from "../config";

class movieService {
  saveMovie = async (data) => {
    debugger;

    return await http
      .post("/api/movie/create", data)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.error(error));
  };

  getAll = async () => {
    return await http.get("/api/movie");
  };
}
export default new movieService();
