import React from "react";
import Skills from "../components/skills";
import {
  skills,
  experienceData,
  summaryData,
  languageData,
} from "../data/data";
import Image from "next/image";


export default function Page() {
  return (
    <div>
      <section className="flex flex-col sm:flex-row">
        <div className="max-w-600 sm:w-1/3 m-10">
          <div className="mb-10">
            <h2 className="mb-8 ml-5">{summaryData.title}</h2>
            <p className="shadow-lg p-5  bg-blue-light">{summaryData.description}</p>
          </div>
          <Skills data={skills} />
          <div className="p-5 bg-blue-light shadow-lg">
            <h2 className="mb-5">Languages</h2>
            {languageData.map((language, index) => (
              <div key={index} className="flex flex-row my-4 font-semibold">
                <Image
                  src={language.icon}
                  width={24}
                  height={24}
                  alt={language.language}
                  className="mr-4"
                />
                <h4>
                  {language.language} - {language.level}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-600 sm:w-2/3 m-10">
          <h2>{experienceData.title} </h2>
          {experienceData.experiences.map((experience: any, index: any) => (
            <div className="w-full shadow-lg my-8 bg-blue-light p-10" key={index}>
              <h3 className="mb-4 font-semibold text-lg">{experience.role}</h3>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


