import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-bcf9b.firebaseio.com/"
});

export default instance;
