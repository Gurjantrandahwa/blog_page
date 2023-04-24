import {useNavigate} from 'react-router-dom';
import {Button, TextField} from "@mui/material";
import db from '../../Common/firebase';
import "./AddBlog.scss";
import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import {KeyboardBackspace} from "@mui/icons-material";

const AddBlog = () => {
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageError, setImageError] = useState('');
    const [typeError, setTypeError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!image || !type || !title || !description) {
            if (!image) {
                setImageError('Image is required');
            }
            if (!type) {
                setTypeError('Type is required');
            }
            if (!title) {
                setTitleError('Title is required');
            }
            if (!description) {
                setDescriptionError('Description is required');
            }
            return;
        }

        const blogRef = db.collection('Blogs').doc();
        const id = blogRef.id;
        await blogRef.set({
            id: id,
            image: image,
            type: type,
            title: title,
            description: description,
        });

        navigate("/")
    };

    const handleGoBack = () => {
        navigate(-1);
    };
    return <div className={"add-blog-wrapper"}>
        <div className={"back-btn"}>
            <IconButton onClick={handleGoBack}>
                <KeyboardBackspace/>
            </IconButton>
        </div>
        <h1>Add Blog</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <TextField
                    fullWidth
                    variant={"outlined"}
                    color={"secondary"}
                    label={"Image"}
                    type="url"
                    value={image}
                    onChange={(e) => {
                        setImage(e.target.value);
                        setImageError('');
                    }}
                    required
                    error={Boolean(imageError)}
                    helperText={imageError}

                />
            </div>
            <div>

                <TextField
                    fullWidth
                    variant={"outlined"}
                    color={"secondary"}
                    label={"Type"}
                    type="text"
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                        setTypeError('');
                    }}
                    required
                    error={Boolean(typeError)}
                    helperText={typeError}
                />
            </div>
            <div>

                <TextField
                    fullWidth
                    variant={"outlined"}
                    color={"secondary"}
                    label={"Title"}
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        setTitleError('');
                    }}
                    required
                    error={Boolean(titleError)}
                    helperText={titleError}
                />
            </div>
            <div>
                <TextField
                    fullWidth
                    variant={"outlined"}
                    color={"secondary"}
                    multiline
                    rows={5}
                    label={"Description"}
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        setDescriptionError('');
                    }}
                    required
                    error={Boolean(descriptionError)}
                    helperText={descriptionError}
                />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    </div>;
};

export default AddBlog;
