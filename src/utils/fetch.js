import axios from 'axios';
import {BACKEND_URL} from '../constants/bikesConstants';

export const fetch = axios.create({
	baseURL: BACKEND_URL,
});
