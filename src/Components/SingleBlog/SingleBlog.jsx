import React, {useEffect, useState} from 'react';
import "./SingleBlog.scss";
import db from '../../Common/firebase';
import EmptyList from '../../Common/EmptyList';
import {useParams} from 'react-router-dom';
import {Button} from "@mui/material";
import {FacebookRounded, WhatsApp, KeyboardBackspace, ContentCopy, LinkedIn, Twitter} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import {useNavigate} from 'react-router-dom';
import AddComment from "../AddComment/AddComment";


const SingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };


    useEffect(() => {
        const unsubscribe = db.collection('Blogs').doc(id).onSnapshot((snapshot) => {
            setBlog(snapshot.data());
        });
        return () => unsubscribe();
    }, [id]);

    if (!blog) {
        return <EmptyList/>;
    }


    return <div className="single-blog-container">
        <div className={"icon-wrapper"}>
            <div>
                <IconButton onClick={handleGoBack}>
                    <KeyboardBackspace/>
                </IconButton>
            </div>
            <div>
                <Button variant="outlined" startIcon={<ContentCopy
                    fontSize={"small"}
                />}
                        className={"copy-btn"}
                >
                    Copy link
                </Button>
                <IconButton>
                    <Twitter/>
                </IconButton>
                <IconButton>
                    <FacebookRounded/>
                </IconButton>
                <IconButton>
                    <LinkedIn/>
                </IconButton>
                <IconButton>
                    <WhatsApp/>
                </IconButton>
            </div>
        </div>
        <div className={"single-blog"}>
            <img src={blog.image} alt={""}/>
            <h1>{blog.title}</h1>
            <p className={"type"}>{blog.type}</p>
            {/*<p>{blog.description}</p>*/}
            <>
                <p style={{marginTop: 30}}>
                    Organic farming is a method of agriculture that avoids the use of synthetic fertilizers, pesticides,
                    and other harmful chemicals. Instead, it relies on natural methods of pest control and soil
                    management, such as crop rotation, cover crops, and composting. Organic farming has gained
                    popularity in recent years due to concerns about the impact of conventional agriculture on the
                    environment, human health, and animal welfare. In this blog post, we'll explore how organic farming
                    can help save the planet and why it's important to support this sustainable method of agriculture.
                </p>
                <h2> Reducing Environmental Impact</h2>
                <p> One of the main benefits of organic farming is its reduced environmental impact. Conventional
                    agriculture relies heavily on synthetic fertilizers, pesticides, and herbicides, which can have
                    harmful
                    effects on soil health, water quality, and biodiversity. Organic farming, on the other hand, focuses
                    on
                    building healthy soil ecosystems that can support diverse plant and animal life. By avoiding
                    synthetic
                    chemicals and prioritizing soil health, organic farming can reduce greenhouse gas emissions, promote
                    biodiversity, and protect natural resources such as water and air.</p>

                <h2> Supporting Local Economies</h2>
                <p> In addition to its environmental benefits, organic farming can also support local economies by
                    promoting
                    sustainable agriculture practices and creating jobs in rural communities. Organic farms tend to be
                    smaller and more diverse than conventional farms, which can provide opportunities for local farmers
                    to
                    grow a wide range of crops and sell them directly to consumers. This can help to build a more
                    resilient
                    and sustainable food system, reduce food waste, and support local economies.</p>

                <h2> Promoting Health and Wellness</h2>
                <p> Organic farming also promotes health and wellness by providing consumers with access to fresh,
                    healthy
                    food that's free of harmful chemicals and synthetic additives. Research has shown that organic
                    produce
                    may contain higher levels of certain nutrients, such as antioxidants and vitamin C, than
                    conventionally
                    grown produce. Additionally, by avoiding the use of synthetic pesticides and herbicides, organic
                    farming
                    can reduce exposure to harmful chemicals that have been linked to a range of health problems,
                    including
                    cancer, neurotoxicity, and reproductive disorders.</p>

                <h2> Challenges and Opportunities</h2>
                <p> While organic farming has many benefits, it also faces a number of challenges and opportunities. One
                    of
                    the biggest challenges is the higher cost of organic produce compared to conventionally grown
                    produce.
                    This can make it difficult for some consumers to afford organic food, especially in areas where
                    access
                    to healthy food is limited. Additionally, organic farming requires more labor and management than
                    conventional farming, which can make it challenging for farmers to transition to this method.
                </p>
                <p style={{marginTop: 40}}>
                    Despite these challenges, organic farming presents many opportunities for farmers, consumers, and
                    the
                    planet. By supporting organic agriculture through our food choices and advocacy efforts, we can help
                    to
                    build a more sustainable and equitable food system that promotes health, wellness, and environmental
                    stewardship.</p>

            </>
        </div>
        {/*Comments*/}
        <AddComment/>
    </div>
};

export default SingleBlog;



