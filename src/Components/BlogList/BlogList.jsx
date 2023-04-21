import React from "react";
import "./bloglist.scss"
import Blogs from "../Blogs/Blogs";

export default function BlogList({blogs}) {
    return <div id={"blog"} className={"blog-list"}>

            {
                blogs && blogs.map((blog, id) => {
                    return <div key={id}>
                        <Blogs blog={blog}/>
                    </div>
                })
            }


    </div>
}