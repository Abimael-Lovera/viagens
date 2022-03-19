import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-agencia-viagens.herokuapp.com',
});

export default api;
