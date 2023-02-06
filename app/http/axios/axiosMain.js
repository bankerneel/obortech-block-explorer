import axios from 'axios';

const token = `bearer ${localStorage.getItem('userToken')}`;

const axiosMain = axios.create({
  baseURL: 'http://winter-cloud-6324.on.fleek.co/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});
export default axiosMain;
