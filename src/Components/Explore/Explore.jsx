import React from "react";
import "./explore.scss";
import explore1 from "../../Assets/explore1.jpg"

export default function Explore() {
    return<div className={"explore-container"}>
<h1>Featured Explore</h1>
<div className={"explore-cards"}>

    {
        [
            {
                img: explore1,
                header: "Sustainable farming practices-environmentally-friendly",
                description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                    " et velit..."
            },
            {
                img: explore1,
                header: "Sustainable farming practices-environmentally-friendly",
                description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                    " et velit..."
            },
            {
                img: explore1,
                header: "Sustainable farming practices-environmentally-friendly",
                description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                    " et velit..."
            },
            {
                img:explore1,
                header: "Sustainable farming practices-environmentally-friendly",
                description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                    " et velit..."
            },
            {
                img: explore1,
                header: "Sustainable farming practices-environmentally-friendly",
                description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                    " et velit..."
            },
            {
                img: explore1,
                header: "Sustainable farming practices-environmentally-friendly",
                description:"Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero" +
                    " et velit..."
            },

        ].map(((value, index) => {
            return<div key={index} className={"explore-card"}>
                <img src={value.img} alt={"explore-img"}/>
                <h2>{value.header}</h2>
                <p>{value.description}</p>
            </div>
        }))
    }
</div>
    </div>
}