import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../../Common/firebase';
import {TextareaAutosize, TextField} from "@mui/material";

const AddBlog = () => {
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const blogRef = db.collection('Blogs').doc();
        const id = blogRef.id;
        await blogRef.set({
            id: id,
            image:image,
            type:type,
            title: title,
            description: description,
        });

        navigate("/")
    };

    return (
        <div>
            <h1>Add Blog</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        label={"Image"}
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div>

                    <TextField
                        label={"Type"}
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div>

                    <TextField
                        label={"Title"}
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <TextareaAutosize
                        style={{padding:10}}
                        rows={6}
                        placeholder={"Description"}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    > </TextareaAutosize>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBlog;
