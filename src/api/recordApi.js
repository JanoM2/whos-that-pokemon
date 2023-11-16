import axios from "axios";

const recordApi = axios.create({
  baseURL: "https://pokemon-guess-6fc08-default-rtdb.firebaseio.com/",
});

export default recordApi;
