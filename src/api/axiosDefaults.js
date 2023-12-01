import axios from "axios";

axios.defaults.baseURL = 'https://momentstwo-faa9f7e8d370.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true