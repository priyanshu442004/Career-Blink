
import axios from 'axios'

const BASE_URL = import.meta.VITE_API_BASE_URL;

export const fetchAllQuestion = async () => {
   const res = await axios.get(`${BASE_URL}/api/all-question`);
   console.log(res.data);
   return res.data;
}