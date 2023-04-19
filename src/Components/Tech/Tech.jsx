import "./tech.scss";
import icon1 from "../../Assets/Icons/Icon.jpg"
import icon2 from "../../Assets/Icons/shuttle.png"
import icon3 from "../../Assets/Icons/icon3.png"
import icon4 from "../../Assets/Icons/cyborg.png"

export default function Tech() {
    return <div className={"tech-container"}>
        <h1>What would You like to read today?</h1>
        <div className={"tech-wrapper"}>
            {
                [
                    {
                        icon: icon1,
                        header: "AgTech",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    },
                    {
                        icon: icon2,
                        header: "Technology",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    },
                    {
                        icon: icon3,
                        header: "Crop Science",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    },
                    {
                        icon: icon4,
                        header: "Soil",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    },
                ]

                    .map((tech, index) => {
                        return <div key={index} className={index===1?'tech-card-2':`tech-card`}>
                            <img src={tech.icon} alt={"icon"}/>
                            <h2>{tech.header}</h2>
                            <p>{tech.description}</p>
                        </div>
                    })
            }
        </div>

    </div>
}