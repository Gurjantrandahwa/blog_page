import React, {useEffect, useState} from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Tech from "../../Components/Tech/Tech";
import Explore from "../../Components/Explore/Explore";
import Search from "../../Components/Search/Search";
import BlogList from "../../Components/BlogList/BlogList";
import EmptyList from "../../Common/EmptyList";
import db from "../../Common/firebase";

export default function Homepage() {
    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        if (search) {
            let filteredBlogs = blogs.filter(blog =>
                blog.title.toLowerCase().includes(search.toLowerCase().trim()) ||
                blog.description.toLowerCase().includes(search.toLowerCase().trim())
            )

            setBlogs(filteredBlogs)

        } else {
            setBlogs([...blogs])
        }

    }, [search, blogs])

    useEffect(() => {
        db.collection('Blogs').onSnapshot(snapshot => {
            let _temp_blog = snapshot.docs.map(doc => doc.data());
            setBlogs(_temp_blog)
        })
    }, [])

    return <div>
        <Navbar/>
        <HeroSection/>
        <Tech/>
        <Explore/>
        <div className={"blog-container"}>
            <Search
                value={search}
                handleSearch={(e) => setSearch(e.target.value)}

            />
            {!blogs.length
                ?
                <EmptyList/> :
                <BlogList blogs={blogs}/>
            }
        </div>

    </div>
}
