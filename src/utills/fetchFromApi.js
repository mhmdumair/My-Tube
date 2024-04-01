const axios = require('axios');

const APIURL='https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

 
const fetchFromApi= async (url)=>{
    const {data} = await axios.get(`${APIURL}/${url}`,options)
    return data
}

export default fetchFromApi;