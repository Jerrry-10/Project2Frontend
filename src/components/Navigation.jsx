import React from "react";

const Navigation = () => {

    return (
        <div className="navBar flex justify-between items-center p-[3rem] bg-[#2c125c]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-yellow-200">
                    <strong>Awesome</strong>Blog
                </h1>
            </div>

            <div className="mexu flex gap-8">
                <li className="text-yellow-200 hover:text-violet-700">Home</li>
                <li className="text-yellow-200 hover:text-violet-700">Blog</li>
                <li className="text-yellow-200 hover:text-violet-700">Contact Us</li>
                <li className="text-yellow-200 hover:text-violet-700">Login</li>
            </div>
            
        </div>
    )
}

export default Navigation;