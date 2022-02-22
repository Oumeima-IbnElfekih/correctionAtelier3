import axios from "axios";
const api = axios.create({
 //baseURL is required
 baseURL: `${process.env.REACT_APP_API_URL}/`,
});
export default api; 