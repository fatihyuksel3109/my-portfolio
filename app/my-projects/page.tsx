import React from "react";
import { projects } from "../data/data";
import { Github, Window } from "../icons";
import Image from "next/image";

const MyProjects = () => {
  return (
    <div className="flex flex-wrap p-5 mb-20">
      {projects.map((project) => (
        <div className="flex flex-col shadow-lg shadow-black w-full lg:w-1/2 xl:w-1/4 bg-blue-light m-10" key={project.title}>
          <div className="image-container">
            <Image
              src={`/images/${project.image}`}
              layout="fill"
              objectFit="cover"
              alt={project.title}
              aria-label={project.title}
            />
          </div>
          <div className="text-base p-4">
            <h3 className="mt-4 text-black text-xl font-bold">{project.title}</h3>
            <p className="mt-4">{project.body1}</p>
            <p className="mt-4 font-semibold">{project.body2}</p>
          </div>
          <div className="flex flex-row justify-between link-container p-2">
            {project.links.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.text}
                aria-label={link.text}
                className="hover:text-blue"
              >
                {link.text === "Source Code" ? (
                  <Github className="icons_contactme" />
                ) : (
                  <Window className="icons_contactme" />
                )}
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
