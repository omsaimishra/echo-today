import axios from "axios";

const api = axios.create({baseURL:'https://newsapi.org/v2'});

export const getapi = async () => {
  const res = await api.get('/top-headlines', {
    params: {
      country: 'us',
      apiKey: '76f9dc6dec274d9b9c38e61e491a020f',
    },
  });

  return res.data;
};

const apibook = axios.create({baseURL:"https://gutendex.com/books/?search=history"});

export const getbookdata= async()=>{
try {
  const res= await apibook.get('/book');
  return res.data
} catch (error) {
  console.log(error)
}
}