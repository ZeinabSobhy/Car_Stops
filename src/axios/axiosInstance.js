import axios from 'axios';

const baseURL = 'http://dtcdashboard.pythonanywhere.com/api/v1/'
export default axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});
