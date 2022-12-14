import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./CreatePost.css";
import { addPost } from "../../Service/api";
// import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const postInit = {
    title: "",
    summary: "",
    details: "",
    formlink: "",
  };

  // const navigate = useNavigate();
  const [post, setPost] = useState(postInit);

  const postDetails = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const addPostDetails = async () => {
    await addPost(post);
    // navigate("/");
  };

  return (
    <div className="parent_createpost">
      <h1> NEW EVENT ANNOUNCEMENT </h1>
      <hr />
      <div className="input_list">
        <TextField
          id="title"
          label="Title"
          name="title"
          variant="standard"
          className="inputs"
          onChange={(e) => {
            postDetails(e);
          }}
        />
        <TextField
          id="summary"
          label="Summary"
          name="summary"
          multiline
          rows={2}
          variant="filled"
          className="inputs"
          onChange={(e) => {
            postDetails(e);
          }}
        />
        <TextField
          id="details"
          label="Details"
          name="details"
          multiline
          rows={5}
          className="inputs"
          onChange={(e) => {
            postDetails(e);
          }}
        />
        <TextField
          id="Formlink"
          label="Google Form Link (if registration required)"
          name="formlink"
          variant="standard"
          className="inputs"
          onChange={(e) => {
            postDetails(e);
          }}
        />
      </div>
      <div>
        <Button variant="outlined" component="label" className="btn">
          Upload
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              postDetails(e);
            }}
          />
        </Button>
        <Button
          variant="contained"
          className="btn"
          endIcon={<SendIcon />}
          onClick={() => {
            addPostDetails();
          }}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
