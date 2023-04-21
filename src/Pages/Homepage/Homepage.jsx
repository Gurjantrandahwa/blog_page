import React, {useEffect, useState} from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Tech from "../../Components/Tech/Tech";
import Explore from "../../Components/Explore/Explore";
import Search from "../../Components/Search/Search";
import BlogList from "../../Components/BlogList/BlogList";
import EmptyList from "../../Common/EmptyList";
import db from "../../Common/firebase";

export const Homepage = () => {
    const [blogs, setBlogs] = useState([])
    const [filteredBlogs, setFilteredBlogs] = useState([])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState(["Automation", "IoT", "Precision Agriculture", "Sustainable Farming", "Industry News", "Case Studies", "Tips & Tricks"]);

    useEffect(() => {
        if (search) {
            let filteredBlogs = blogs.filter(blog =>
                blog.title.toLowerCase().includes(search.toLowerCase().trim()) ||
                blog.description.toLowerCase().includes(search.toLowerCase().trim())
            )||[]
            filteredBlogs = filteredBlogs.filter(value => {
                return category.includes(value.type)
            });

            setFilteredBlogs(filteredBlogs);
        } else {
            let filteredBlogs = blogs.filter(value => {
                return category.includes(value.type)
            });
            setFilteredBlogs([...filteredBlogs])
        }

    }, [search, category])

    useEffect(() => {
        db.collection('Blogs').onSnapshot(snapshot => {
            let _temp_blog=snapshot.docs.map(doc => doc.data());
            setBlogs(_temp_blog)

            let filteredBlogs = _temp_blog.filter(value => {
                return category.includes(value.type)
            });
            setFilteredBlogs(filteredBlogs)

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
            handleSearch={e=>setSearch(e.target.value)}
            category_value={category}
            setCategoryTypes={setCategory}
            />
            {/*{!filteredBlogs.length*/}
            {/*    ?*/}
            {/*    <EmptyList/>:*/}
                <BlogList blogs={filteredBlogs}/>
            {/*}*/}
        </div>

    </div>
}
