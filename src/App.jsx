import './App.scss';
import Homepage from "./Pages/Homepage/Homepage";
import SingleBlog from './Components/SingleBlog/SingleBlog';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddBlog from "./Components/AddBlog/AddBlog";

function App() {
    return <div>
        <Router>
            <Routes>
                <Route
                    exact
                    path={"/"}
                    element={<Homepage/>}
                />
                <Route
                    path={"/blog/:id"}
                    element={<SingleBlog/>}
                />
                <Route
                path={"/addBlog"}
                element={<AddBlog/>}
                />
            </Routes>
        </Router>
    </div>
}

export default App;
