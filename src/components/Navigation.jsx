import React from "react";
import getPosts from "../hook/hook";

const Navigation = () => {
  return (
    <div className="Nav text-teal-300">
      <p className="text-green-300">hello world</p>

      <ul>
        {getPosts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
