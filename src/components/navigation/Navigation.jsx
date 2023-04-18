import React from "react";

const Navigation = () => {

    return (
        <div className="navBar flex justify-between items-center p-[3rem] bg-[#2c125c]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-neutral-100">
                    <strong>Awesome</strong>Blog
                </h1>
            </div>

            <div className="mexu flex gap-8">
                <li className="text-neutral-100 hover:text-violet-700">Home</li>
                <li className="text-neutral-100 hover:text-violet-700">About</li>
                <li className="text-neutral-100 hover:text-violet-700">Contact</li>
                <li className="text-neutral-100 hover:text-violet-700">Write</li>
            </div>
            
        </div>  
    )
}

export default Navigation