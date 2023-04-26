import axios from "axios";

const urlLink = "https://youtube-v31.p.rapidapi.com/captions";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${urlLink}/${url}`, options);
  return data;
};
