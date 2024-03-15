import axios from "axios";

export const getRequest = async (url) => {
  try {
    const response = await axios.get(url);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    return null;
  }
};

export const postRequest = async (url, data, header) => {
  try {
    const response = await axios.post(url, data, header);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    return null;
  }
};
