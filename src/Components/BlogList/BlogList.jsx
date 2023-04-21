import React from "react";
<<<<<<< HEAD
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

=======
import {Grid} from "@mui/material";
import Blogs from "../Blogs/Blogs";

export default function BlogList({blogs}) {
    return <div id={"blog"}>
        <Grid container spacing={5}>
            {
                blogs && blogs.map((blog, id) => {
                    return <Grid item md={2} sm={6} xs={12} key={id}>
                        <Blogs blog={blog}/>
                    </Grid>
                })
            }
        </Grid>
>>>>>>> origin/main

    </div>
}