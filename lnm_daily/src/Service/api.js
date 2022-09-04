import axios from "axios";

const URL = "http://localhost:8000";

export const addPost = async (data) => {
  try {
    return await axios.post(`${URL}/new_post`, data);
  } catch (error) {
    console.log(`Error while calling Add Post API : ${error}`);
  }
};

export const getPost = async () => {
  try {
    const k = await axios.get(`${URL}`);
    return k;
  } catch (error) {
    console.log(`Error while getting the posts : ${error}`);
  }
};
