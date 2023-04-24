import React, {useEffect, useState} from "react";
import "./explore.scss";
import explore1 from "../../Assets/explore1.jpg"
import explore2 from "../../Assets/explore2.jpg"
import explore3 from "../../Assets/explore3.jpg"
import explore4 from "../../Assets/explore4.jpg"
import explore5 from "../../Assets/explore5.jpg"
import explore6 from "../../Assets/explore6.jpg"
import {Pagination, Stack} from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Explore() {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const itemsPerPage = 6;
    const startIndex = (page - 1) * itemsPerPage;
    useEffect(() => {

        Aos.init({duration: 2000})

    }, [])
    useEffect(() => {
        const handleClick = () => {
            window.scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth'
            });
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
    const data = [
        {
            img: explore1,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore2,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore3,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore4,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore5,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore6,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },

        {
            img: explore3,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore4,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore5,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore6,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore1,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore2,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore3,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore4,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore5,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore6,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },
        {
            img: explore2,
            header: "Sustainable farming practices-environmentally-friendly",
            description: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                " et velit..."
        },

    ]
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
    return <div className={"explore-container"} id={"category"}>
        <h1 data-aos={"fade-up"} data-aos-duration={"1500"}>Featured Explore</h1>
        <div className={"explore-cards"} >
            {currentItems.map(((value, index) => {
                return <div key={index} className={"explore-card"}  data-aos={"fade-up"} data-aos-duration={"2000"}>
                    <img src={value.img} alt={"explore-img"}/>
                    <div>
                        <h2>{value.header}</h2>
                        <p>
                            {value.description}
                            <span className={"read-btn"}>Read more</span>
                        </p>

                    </div>
                </div>
            }))}

        </div>
        <Stack spacing={2}>

            <Pagination
                hidePrevButton
                count={Math.ceil(data.length/itemsPerPage)}
                className={"pagination"}
                page={page}
                onChange={handleChange}

            />
        </Stack>

    </div>
}
