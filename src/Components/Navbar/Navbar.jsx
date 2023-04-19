
import "./navbar.scss";
import Rectangle from "../../Assets/Rectangle.png"
export default function Navbar (){
    return <nav className={"navbar"}>
        <img src={Rectangle} alt={"logo"}/>
        <ul>
            <li>
                <a href={"home"}>Home</a>
            </li>
            <li>
                <a href={"home"}>About Me</a>
            </li>
            <li>
                <a href={"home"}>Category</a>
            </li>
            <li>
                <a href={"home"}>Blog</a>
            </li>
            <li>
                <a href={"home"}>Contact Me</a>
            </li>
            <li>
                <a href={"home"}>
                    <button>Buy now</button>
                </a>
            </li>
        </ul>
    </nav>
}