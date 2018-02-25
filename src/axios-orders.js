import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-fe6aa.firebaseio.com/'
});

export default instance;