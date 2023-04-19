import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="navBar flex justify-between items-center p-[3rem] bg-[#2c125c]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-neutral-100">
                    <strong>Awesome</strong>Blog
                </h1>
            </div>

            <div className="mexu flex gap-8">
                <li className="text-neutral-100 hover:text-violet-700"><Link to  = "/">Home</Link></li>
                <li className="text-neutral-100 hover:text-violet-700"><Link to = "/about">About</Link></li>
                <li className="text-neutral-100 hover:text-violet-700"><Link to = "/contact">Contact</Link></li>
                <li className="text-neutral-100 hover:text-violet-700"><Link to = "/create">Create</Link></li>
            </div>
            
        </div>  
    )
}

export default Navigation
// 