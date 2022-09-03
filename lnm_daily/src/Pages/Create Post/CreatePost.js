import React from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "./CreatePost.css"

const CreatePost = () => {

    return (
        <div className="parent_createpost">  
            <h1> So what's going on </h1>
            <hr/>
                <div className="input_list">
                    <TextField id="title" label="Title" variant="standard" className="inputs"/> 
                    <TextField id="summary" label="Summary" multiline rows={2} variant="filled" className="inputs"/>
                    <TextField id="details" label="Details" multiline rows={5} className="inputs"/>
                    <TextField id="Formlink" label="Google Form Link (if registration required)" variant="standard" className="inputs"/>
                </div>
                <div>
                    <Button variant="outlined" component="label" className="btn">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <Button variant="contained" className="btn" endIcon={<SendIcon />}>Post</Button>
                </div>
        </div>
    );
}

export default CreatePost;