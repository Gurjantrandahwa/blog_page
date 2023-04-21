import React from "react";
import "./blogs.scss"
import {Button} from "@mui/material";

export default function Blogs({blog}) {
    const {
        id,
        image,
        type,
        description,
        title,
    } = blog
    return <div key={id} className={"blog-card"}>
        <img src={image} alt={"blogs"}/>
        <div className={"blog-text"}>

            <h5>{type}</h5>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button>Read Full Article</Button>

        </div>

    </div>
}