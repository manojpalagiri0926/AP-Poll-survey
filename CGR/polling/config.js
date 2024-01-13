// config.js
const API_URLS = {
    getDivision: process.env.REACT_APP_API_GET_DIVISION || 'http://127.0.0.1:8000/api/getdivision/',
    anotherEndpoint: process.env.REACT_APP_ANOTHER_ENDPOINT || 'http://example.com/api/anotherendpoint/',
  };
  
  export default API_URLS;