import React, {useState} from "react";
import "./blogList.scss"
import {Button, Pagination} from "@mui/material";
import {Link} from "react-router-dom";

export default function BlogList({blogs}) {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const itemsPerPage = 4;
    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = blogs.slice(startIndex, startIndex + itemsPerPage);
    console.log(blogs)

    return <div id={"blog"} className={"blog-list"}>


        {
            currentItems && currentItems.map(blog => {
                return <div key={blog.id} className={"blog-card"}>
                    <Link to={`/blog/${blog.id}`}>
                        <img src={blog.image} alt={"blogs"}/>
                        <div className={"blog-text"}>

                            <h5>{blog.type}</h5>
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            <Button>Read Full Article</Button>
                        </div>
                    </Link>
                </div>
            })
        }
        <Pagination
            className={"pagination-sq"}
            hidePrevButton
            size="large"
            page={page}
            count={Math.ceil(blogs.length / itemsPerPage)}
            onChange={handleChange}
        />
        <Link to={"/addBlog"}>
            <Button
                variant={"contained"}
                className={"add-blog-btn"}
            >
                Add Blog
            </Button>
        </Link>
    </div>
}