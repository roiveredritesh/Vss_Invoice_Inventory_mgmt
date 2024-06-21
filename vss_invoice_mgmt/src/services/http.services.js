import axios from "axios";
//Generalized function

export const getRequest = async (url) => {
  try {
    const response = axios.get(url); // will receive promise as response
    const parsedResponse = await response.then((res) => res.data);
    return parsedResponse;
  } catch (err) {
    console.log("@getmethoderror", err);
    return null;
  }
};

export const postRequest = async (url, data, header) => {
  try {
    console.log("@posteddata", data);
    const response = await axios.post(url, data, header); // will receive data as response
    const parsedResponse = response.data;
    console.log("@parsedResponse", parsedResponse);
    return parsedResponse;
  } catch (err) {
    console.log("@postmethoderror", err);
    return null;
  }
};

export const putRequest = async (url, data, header) => {
  try {
    const response = await axios.put(url, data, header); // will receive data as response
    const parsedResponse = response.data;
    console.log("@parsedResponse", parsedResponse);
    return parsedResponse;
  } catch (err) {
    console.log("@putmethoderror", err);
    return null;
  }
};
