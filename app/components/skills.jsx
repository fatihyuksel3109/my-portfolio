"use client";
import Image from "next/image";
import React, { useState } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Hard");

  const setBg = (active) => (activeTab === active ? "bg-blue-light text-black" : "bg-white text-blue");
  const setTabsAlignment = (tab) =>
    tab === "Hard" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex justify-around ">
      {["Hard", "Soft"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
        <h3 className="">{el} Skills</h3>  
        </button>
      ))}
    </div>
  );

  const content = (
    <ul
      className={`list-none py-4 gap-2 ${
        activeTab === "Soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }) => (
        <li key={text} className="skill flex flex-row">
          <span>{activeTab === "Hard" ? <Image className="mr-2" width={24} height={24} src={icon} alt={text} /> : icon}</span> {text}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;

