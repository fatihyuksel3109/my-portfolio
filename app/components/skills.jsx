"use client";
import Image from "next/image";
import React, { useState } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Soft");

  const setBg = (active) => (activeTab === active ? "bg-grey" : "bg-white");
  const setTabsAlignment = (tab) =>
    tab === "Soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex justify-around ">
      {["Soft", "Hard"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(el)} text-white text-[10]`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
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

