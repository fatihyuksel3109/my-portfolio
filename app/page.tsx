import Image from "next/image";
import { aboutMeData, skills } from "./data/data";
import Skills from "./components/skills";

export default function AboutMePage() {
  return (
    <main className="flex flex-col items-center mb-32">
      <section className="flex sm:flex-row w-full sm:w-10/12 mb-6 items-center flex-col">
        <div className="sm:w-1/2 md:w-1/3 w-full flex justify-center">
          <Image
            priority={false}
            src={"/images/profilephoto.jpg"}
            alt={"photo"}
            width={480}
            height={800}
            aria-label={"photo"}
            className="profileImage p-10"
          />
        </div>
        <div className="p-10 sm:ml-20 sm:w-2/3 w-full sm:mt-0 mt-6">
          <h2 className=""> {aboutMeData.title} </h2>
          <p className="text-base mb-4"> {aboutMeData.body} </p>
          <Skills data={skills} />
        </div>
      </section>
      <section className="w-full my-8 bg-blue-light p-10 sm:p-20 h-full">
        <div>
          <p className="px-7">{aboutMeData.highlightedBody} </p>
        </div>
      </section>
      <section className="flex flex-col w-10/12 sm:flex-row items-center mt-10 p-5">
        <div className="flex flex-col w-full sm:w-7/12">
          <p>{aboutMeData.body2}</p>
        </div>
        <div className="w-full mt-5 sm:w-5/12 sm:ml-10 sm:mt-0 ">
          <Image
            priority={false}
            src={"/images/hands-typing-on-laptop.jpg"}
            alt={"photo"}
            width={500}
            height={250}
            aria-label={"photo"}
            className="h-250 object-cover w-500"
          />
        </div>
      </section>
    </main>
  );
}
