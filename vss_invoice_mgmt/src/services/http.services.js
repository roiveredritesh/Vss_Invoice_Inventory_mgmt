import axios from "axios";

export const getRequest = (url) => {
  try {
    const response = axios.get(url);
    const parsedResponse = response.then((res) => res.data);
    return parsedResponse;
  } catch (err) {
    return null;
  }
};

export const postRequest = async (url, data, header) => {
  try {
    const response = await axios.post(url, data, header);
    // const parsedResponse = await response.json();
    const parsedResponse = response.then((res) => res.data);
    return parsedResponse;
  } catch (err) {
    return null;
  }
};
