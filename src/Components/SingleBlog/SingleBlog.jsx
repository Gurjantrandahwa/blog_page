// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import db from '../../Common/firebase';
import EmptyList from '../../Common/EmptyList';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const unsubscribe = db.collection('Blogs').doc(id).onSnapshot((snapshot) => {
            setBlog(snapshot.data());
        });

        return () => unsubscribe();
    }, [id]);

    if (!blog) {
        return <EmptyList message="Loading..." />;
    }

    return (
        <div className="single-blog-container">
            <img src={blog.image} alt={""}/>
            <p>{blog.type}</p>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
        </div>
    );
};

export default SingleBlog;



