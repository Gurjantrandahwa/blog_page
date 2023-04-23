import React, {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import "./AddComment.scss";
import db from "../../Common/firebase";


export default function AddComment() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [commentError, setCommentError] = useState("");
    useEffect(() => {
        db.collection('comments').onSnapshot(snapshot => {
            let temp_comment = snapshot.docs.map((doc => doc.data()));
            setComments(temp_comment)
        })
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
        setNameError("")
        setEmailError("")
        setCommentError("")
    };
    const handleClickClose = () => {
        setOpen(false);
        setNameError("")
        setEmailError("")
        setCommentError("")
    }
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setNameError("Please enter your name");
            return;
        }
        if (!email) {
            setEmailError("Please enter your email");
            return;
        }
        if (!comment) {
            setCommentError("Please enter your comment");
            return;
        }
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
            <div className={"comments"}>
                {comments.map((comment,index) => (
                    <div key={index}>
                        <div className={"comment-header"}>
                            <h2>{comment.name}</h2>
                            <p>{comment.email}</p>
                        </div>
                        <div className={"comment-body"}>
                            <p> {comment.comment}</p>

                        </div>
                    </div>
                ))}
            </div>


        </div>
        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle color={"darkgreen"}>Write Comment</DialogTitle>
            <DialogContent>

                <form>
                    <TextField
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        color={"success"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    {nameError && <p className="error">{nameError}</p>}


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

                    {emailError && <p className="error">{emailError}</p>}

                    <TextField
                        margin="dense"
                        label="Write Comment"
                        type="text"
                        fullWidth
                        variant="outlined"
                        color={"success"}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    {commentError && <p className="error">{commentError}</p>}
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