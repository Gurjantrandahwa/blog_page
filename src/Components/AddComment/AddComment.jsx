import React, {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import "./AddComment.scss";
import db from "../../Common/firebase";
import {Formik} from "formik";
import * as Yup from 'yup';

export default function AddComment() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submit, setSubmit] = useState('')
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        db.collection('comments').onSnapshot(snapshot => {
            let temp_comment = snapshot.docs.map((doc => doc.data()));
            setComments(temp_comment)
        })
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    }
    const handleCommentSubmit = () => {
        db.collection('comments').add({
            name: name,
            email: email,
            comment: comment,
        })
            .then(() => {
                console.log('Comment added successfully!');
                setName('');
                setEmail('');
                setComment('');
                setOpen(false);
            })
            .catch((error) => {
                console.error('Error adding comment: ', error);
            });
    };
    return <div>
        <div className={"comments-container"}>
            <h2>Comments</h2>
            <div onClick={handleClickOpen} className={"comment-dialog"}>
                Write Comment
            </div>
            <div className={"comments-container"}>

                {comments.map((comment) => (
                    <div key={comment.id} className={"comment"}>
                        <div className={"comment-header"}>
                            <h2>{comment.name}</h2> {comment.email}
                        </div>
                        <div className={"comment-body"}>{comment.comment}</div>
                    </div>
                ))}
            </div>

        </div>
        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle color={"darkgreen"}>Write Comment</DialogTitle>
            <DialogContent>

                <form >
                    <div style={{display: "flex"}}>
                        <TextField
                            sx={{marginRight: 5}}
                            margin="dense"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            color={"success"}
                            value={name}
                            onChange={e => setName(e.target.value)}

                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            color={"success"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}

                        />
                    </div>
                    <TextField
                        margin="dense"
                        label="Write Comment"
                        type="text"
                        fullWidth
                        variant="outlined"
                        color={"success"}
                        value={comment}
                        required
                        onChange={e => setComment(e.target.value)}

                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button
                    variant={"contained"}
                    color={"success"}
                    onClick={handleClickClose}>
                    Cancel
                </Button>
                <Button
                    variant={"contained"}
                    color={"success"}
                    onClick={handleCommentSubmit}
                >
                    Comment
                </Button>
            </DialogActions>
        </Dialog>
    </div>
}