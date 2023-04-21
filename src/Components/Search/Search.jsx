import React from "react";
import "./Search.scss";
import {Checkbox, Divider,
    // IconButton, InputAdornment,
    ListItem, TextField} from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';

export default function Search({value, category_value, handleSearch, setCategoryTypes}) {
    return <div className={"search-container"}>
        <div className={"search-wrapper"}>
            <TextField
                fullWidth
                label="Search"
                value={value}
                onChange={handleSearch}
                // InputProps={{
                //     endAdornment: (
                //         <InputAdornment>
                //             <IconButton>
                //                 <SearchIcon/>
                //             </IconButton>
                //         </InputAdornment>
                //     )
                // }}
            />
        </div>
        <div>
            {["Automation", "IoT", "Precision Agriculture", "Sustainable Farming", "Industry News", "Case Studies", "Tips & Tricks"].map((type, index) => {
                return <div key={index}>
                    <ListItem>
                        <Checkbox onChange={(event, checked) => {
                            if (category_value.includes(type)) {
                                let index_type = category_value.findIndex(v => v === type);
                                if (index_type >= 0) {
                                    let temp = [...category_value]
                                    temp.splice(index_type, 1);
                                    setCategoryTypes(temp)
                                }
                            } else {
                                setCategoryTypes([...category_value, type])
                            }
                        }} checked={category_value.includes(type)}/>
                        <span className={"blog-item-type"}>{type}</span>
                    </ListItem>
                    <Divider/>
                </div>
            })}

        </div>
        {/*Top Post*/}
        <div>
            <h2>Top Posts</h2>
            {
                [
                    {
                        post: "How Regenerative Agriculture is Changing the Game",
                        cate: "Sustainable Farming - March, 2022"
                    },
                    {
                        post: "Precision Agriculture 2.0: Using Artificial Intelligence to Optimize Crop Yields",
                        cate: "Precision Agriculture - September 2021"
                    },
                    {
                        post: "Breaking Ground: How Automation is Revolutionizing the Agriculture Industry",
                        cate: "Industry News - May 2022"
                    },
                    {
                        post: "How Ouranos Robotics' Smart Sensors are Transforming Crop Management",
                        cate: " IoT - July 2021"
                    },
                    {
                        post: "The Impact of Technology on the Agriculture Industry",
                        cate: " Expert Insights - November 2021"
                    },

                ].map((value1, index) => {
                    return <div key={index}>
                        <div>
                            <h1>   {index + 1}</h1>
                        </div>
                        <div>
                            <h4>{value1.post}</h4>
                            <p>{value1.cate}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}