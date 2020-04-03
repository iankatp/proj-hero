import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.29:3333' //ip do computador + porta usando no node    
    
});

export default api;