"use client";
import Image from "next/image";
import React, { useState } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Hard");

  const setBg = (active) => (activeTab === active ? "bg-blue-300 text-black" : "bg-white text-blue-600");
  const setTabsAlignment = (tab) =>
    tab === "Hard" ? "text-left" : "text-right";

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

  const content = (
    <ul
      className={`list-none py-4 gap-2 transition-opacity duration-500 ${
        activeTab === "Soft" ? "opacity-0" : "opacity-100"
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
