import axios from 'axios';

const baseURL = 'http://localhost:3000/Journals';

const API = {
  getAll: () => {
    return axios.get(baseURL);
  },
  createJournal: (newJournal) => {
    return axios.post(baseURL, newJournal);
  },
};

export default API;
