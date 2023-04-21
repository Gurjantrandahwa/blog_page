import React from "react";


export default function Blogs({blog}) {
    const {
        id,
        image,
        type,
        description,
        title,
    } = blog
    return <div key={id}>
        <img src={image} alt={"blogs"}/>
        <h5>{type}</h5>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
}