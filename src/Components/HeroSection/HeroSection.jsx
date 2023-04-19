import React from "react";
import "./herosection.scss";
import {Carousel} from 'react-carousel-minimal';
import caro1 from "../../Assets/caro1.jpg";
import caro2 from "../../Assets/caro2.jpg";
import caro3 from "../../Assets/caro3.jpg";

export default function HeroSection() {

    const data = [
        {
            image: caro1,
            caption: `
                <h1>Tech Meets Agriculture</h1>
                <p>The fusion of technology and agriculture is creating new possibilities for<br/> precision farming,
                    automation, and data-driven decision making</p>
                <button>Read more</button>
            `
        },
        {
            image: caro2,
            caption: `
                <h1>Ouranos helping farmer grow</h1>
                <p>The fusion of technology and agriculture is creating new possibilities for <br/> precision farming,
                    automation, and data-driven decision making
                </p>
                <button>Read more</button>
           `
        },
        {
            image: caro3,
            caption:

                `      
                    <h1 style={{color:"#252525"}}>Know your crop</h1>
                    <p>The fusion of technology and agriculture is creating new possibilities for <br/> precision farming,
                        automation, and data-driven decision making
                    </p>
                    <button className="button">Read more</button>
                `
        },

    ];
    const captionStyle = {}

    return <div>

        <Carousel
            data={data}
            time={5000}
            width="1918px"
            height="870px"
            captionPosition="center"
            automatic={true}
            dots={true}
            slideImageFit="cover"
            captionStyle={captionStyle}
            style={{
                textAlign: "center",
                maxWidth: "1918px",
                maxHeight: "670px",
                margin: "auto"
            }}
        />
    </div>


}
