import axios from "axios";

axios.defaults.baseURL = "https://64ca6df2700d50e3c704e441.mockapi.io/api/";
// axios.defaults.params = {
//     api_key: API_KEY,
//     language: 'en',
//   };

// url.searchParams.append('completed', false);
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 10);

export const getAdverts = async()=>{
    const {data}=await axios.get('/adverts');
    console.log(data);
    return data;
}

