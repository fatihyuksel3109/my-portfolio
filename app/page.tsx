import Image from "next/image";
import { aboutMeData, skills } from "./data/data";
import Skills from "./components/skills";

export default function AboutMePage() {
  return (
    <main className="flex flex-col items-center mb-32">
      <section className="flex sm:flex-row w-full sm:w-10/12 mb-6 items-center flex-col">
        <div className="p-16 sm:p-0 sm:w-1/2 md:w-1/3 w-full flex justify-center">
          <Image
            priority={false}
            src={"/images/profilephoto.jpg"}
            alt={"photo"}
            width={480}
            height={800}
            aria-label={"photo"}
            className="profileImage p-4"
          />
        </div>
        <div className="p-10 sm:ml-20 sm:w-2/3 w-full mt-0 ">
          <h2 className=""> {aboutMeData.title} </h2>
          <p className="text-base mb-4 px-2"> {aboutMeData.body} </p>
        </div>
      </section>
      <section className="flex flex-col-reverse bg-blue-light w-full sm:flex-row items-center mt-4 p-8">
        <div className=" w-full sm:w-7/12">
          <p className="pr-6 pl-6 sm:pl-12">{aboutMeData.highlightedBody} </p>
        </div>
        <div className="w-full mt-5 sm:w-5/12 p-4 sm:ml-10 sm:mt-0 ">
          <Image
            priority={false}
            src={"/images/hands-typing-on-laptop.jpg"}
            alt={"photo"}
            width={500}
            height={250}
            aria-label={"photo"}
            className="rounded-[50px] object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col w-10/12 sm:flex-row items-center mt-4">
        <div className="w-full sm:w-5/12 sm:mr-10 sm:mt-0 mb-4 px-4">
          <Image
            priority={false}
            src={"/images/coding.jpg"}
            alt={"photo"}
            width={500}
            height={250}
            aria-label={"photo"}
            className="rounded-[50px] object-cover"
          />
        </div>
        <div className="px-7 w-full sm:w-7/12 ">
          <p>{aboutMeData.body2}</p>
        </div>
      </section>
    </main>
  );
}
