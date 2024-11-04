"use client";
import Image from "next/image";
import React, { useState } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Hard");

  const setBg = (active) => (activeTab === active ? "bg-blue-300 text-black" : "bg-white text-blue-600");
  const setTabsAlignment = (tab) => (tab === "Hard" ? "text-left" : "text-right");

  const tabs = (
    <div className="flex justify-around">
      {["Hard", "Soft"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          <h3>{el} Skills</h3>
        </button>
      ))}
    </div>
  );

  return (
    <div>
      {tabs}
      <div className="relative flex">
        <ul
          className={`list-none py-4 gap-2 transition-opacity duration-500 ${
            activeTab === "Hard" ? "opacity-100" : "opacity-0 h-0"
          }`}
        >
          {data["Hard"].map(({ icon, text }) => (
            <li key={text} className={`skill flex flex-row items-center ${ activeTab !== "Hard" ? "hidden" : ""} `}>
            <Image className="mr-2" width={24} height={21} src={icon} alt={text} /> {text}
            </li>
          ))}
        </ul>
        <ul
          className={`list-none py-4 gap-2 transition-opacity duration-500 ${
            activeTab === "Soft" ? "opacity-100" : "opacity-0"
          }`}
        >
          {data["Soft"].map(({ icon, text }) => (
            <li key={text} className={`skill flex flex-row items-center ${ activeTab !== "Soft" ? "hidden" : ""} `}>
              <span>{icon}</span> {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
